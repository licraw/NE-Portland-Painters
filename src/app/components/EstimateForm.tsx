"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { siteConfig } from "@/lib/siteConfig";

const INSTAGRAM_OPTION = "Instagram";
const UTM_SOURCE_STORAGE_KEY = "utm_source";

export default function EstimateForm() {
  const { executeRecaptcha } = useGoogleReCaptcha();

  const [fileInputKey, setFileInputKey] = useState(Date.now());
  const [status, setStatus] = useState("");
  const [isInstagramAttribution, setIsInstagramAttribution] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    overview: "",
    zipCode: "",
    promoCode: "",
    howDidYouFindUs: "",
    subscribeToMailchimp: true,
    formType: "estimate",
    photos: [] as File[],
  });

  useEffect(() => {
    const storedSource = window.localStorage.getItem(UTM_SOURCE_STORAGE_KEY)?.trim().toLowerCase();
    const fromInstagram = storedSource === "instagram";
    setIsInstagramAttribution(fromInstagram);

    if (fromInstagram) {
      setFormData((prev) => ({
        ...prev,
        howDidYouFindUs: INSTAGRAM_OPTION,
      }));
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type, checked, files } = e.target as HTMLInputElement;
    if (type === "file") {
      const selected = files ? Array.from(files).slice(0, 4) : [];
      setFormData((p) => ({ ...p, [name]: selected }));
    } else {
      setFormData((p) => ({ ...p, [name]: type === "checkbox" ? checked : value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending Please Don't Close…");

    if (!executeRecaptcha) {
      setStatus("Recaptcha not ready, try again.");
      return;
    }
    const token = await executeRecaptcha("estimate_form");
    const recRes = await axios.post("/api/verifyRecaptcha", { gRecaptchaToken: token });
    if (!recRes.data?.success) {
      setStatus("Recaptcha failed.");
      return;
    }

    // build JSON payload (no photos)
    const {
      photos,
      subscribeToMailchimp,
      ...jsonPayload
    } = formData as typeof formData & { photos: File[] };
    if (isInstagramAttribution && !jsonPayload.howDidYouFindUs) {
      jsonPayload.howDidYouFindUs = INSTAGRAM_OPTION;
    }

    try {
      const taskRes = await fetch("/api/createRequest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(jsonPayload),
      }).then((r) => r.json());

      if (!taskRes.taskId) throw new Error("task create failed");

      for (const photo of photos) {
        const fd = new FormData();
        fd.append("photo", photo);
        await fetch(`/api/uploadPhoto?taskId=${taskRes.taskId}`, {
          method: "POST",
          body: fd,
        });
      }

      const bodyText = `Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Address: ${formData.address}
Project Overview: ${formData.overview}
Promo Code: ${formData.promoCode || "None"}`;

      const emailFd = new FormData();
      emailFd.append("name", formData.name);
      emailFd.append("email", formData.email);
      emailFd.append("formType", formData.formType);
      emailFd.append("bodyText", bodyText);
      emailFd.append("asanaTaskId", taskRes.taskId);
      photos.forEach((p) => {
        if (p.size <= 2 * 1024 * 1024) emailFd.append("photos", p);
      });

      await fetch("/api/sendEmail", {
        method: "POST",
        body: emailFd,
      });

      if (subscribeToMailchimp) {
        await fetch("/api/subscribe", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: formData.email,
            firstName: formData.name.split(" ")[0],
            lastName: formData.name.split(" ")[1] || "",
          }),
        });
      }

      setStatus("Request sent successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        address: "",
        overview: "",
        promoCode: "",
        zipCode: "",
        howDidYouFindUs: isInstagramAttribution ? INSTAGRAM_OPTION : "",
        subscribeToMailchimp: true,
        formType: "estimate",
        photos: [],
      });
      setFileInputKey(Date.now());
    } catch (err) {
      console.error(err);
      setStatus("Error submitting request.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="theme-form-shell max-w-4xl mx-auto my-12"
    >
      <h2 className="theme-form-heading">
        {siteConfig.estimate.heading}
      </h2>
      <p className="theme-form-description">
        {siteConfig.estimate.description}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="theme-form-input"
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
          className="theme-form-input"
        />
      </div>

      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleChange}
        required
        className="theme-form-input"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <input
          type="text"
          name="address"
          placeholder="Project Address"
          value={formData.address}
          onChange={handleChange}
          required
          className="theme-form-input"
        />
        <input
          type="text"
          name="zipCode"
          placeholder="Zip Code"
          value={formData.zipCode}
          onChange={handleChange}
          required
          className="theme-form-input"
        />
      </div>

      <textarea
        name="overview"
        placeholder="Project Overview"
        value={formData.overview}
        onChange={handleChange}
        rows={4}
        required
        className="theme-form-input"
      />

      <div>
        <label className="theme-form-label">Upload up to 4 Photos (Optional)</label>
        <input
          key={fileInputKey}
          type="file"
          name="photos"
          accept="image/*"
          multiple
          onChange={handleChange}
          className="theme-form-file-input"
        />
      </div>

      <input
        type="text"
        name="promoCode"
        placeholder="Enter Promo Code"
        value={formData.promoCode}
        onChange={handleChange}
        className="theme-form-input"
      />

      {!isInstagramAttribution && (
        <div className="flex flex-col">
          <label htmlFor="howDidYouFindUs" className="theme-form-label">
            How did you find us?
          </label>
          <select
            id="howDidYouFindUs"
            name="howDidYouFindUs"
            value={formData.howDidYouFindUs}
            onChange={handleChange}
            className="theme-form-input"
            required
          >
            <option value="" disabled>Select an option</option>
            {siteConfig.referralOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      )}

      <button
        type="submit"
        className="theme-primary-button w-full rounded-lg py-4 font-bold transition-all"
      >
        Request Estimate
      </button>

      <p className="theme-form-status">{status}</p>
    </form>
  );
}

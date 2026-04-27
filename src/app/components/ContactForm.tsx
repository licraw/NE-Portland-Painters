"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { siteConfig } from "@/lib/siteConfig";

const INSTAGRAM_OPTION = "Instagram";
const UTM_SOURCE_STORAGE_KEY = "utm_source";

type CreateRequestResponse = {
  taskId?: string | null;
  cardUrl?: string | null;
  warning?: string;
  error?: string;
  details?: string;
  hint?: string;
};

export default function ContactForm() {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const recaptchaBypass = process.env.NEXT_PUBLIC_RECAPTCHA_BYPASS === "1";

  const [fileInputKey, setFileInputKey] = useState(Date.now());
  const [status, setStatus] = useState("");
  const [isInstagramAttribution, setIsInstagramAttribution] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    overview: "",
    promoCode: "",
    zipCode: "",
    howDidYouFindUs: "",
    formType: "contact",
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
      setFormData((prev) => ({
        ...prev,
        photos: files ? Array.from(files).slice(0, 4) : [],
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending Please Don't Close…");

    if (!recaptchaBypass) {
      if (!executeRecaptcha) {
        setStatus("Recaptcha not ready. Try again.");
        return;
      }
      const token = await executeRecaptcha("contact_form");
      const recRes = await axios.post("/api/verifyRecaptcha", { gRecaptchaToken: token });
      if (!recRes.data?.success) {
        console.warn("recaptcha failed", recRes.data);
        setStatus("Recaptcha failed.");
        return;
      }
    }

    try {
      const { photos, ...jsonPayload } = formData;
      if (isInstagramAttribution && !jsonPayload.howDidYouFindUs) {
        jsonPayload.howDidYouFindUs = INSTAGRAM_OPTION;
      }
      let createRes: CreateRequestResponse = {};
      try {
        const createRequestRes = await fetch("/api/createRequest", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(jsonPayload),
        });
        createRes = await createRequestRes.json();
        if (!createRequestRes.ok || createRes.error || createRes.warning) {
          console.warn("createRequest did not create a Trello card", createRes);
        }
      } catch (e) {
        console.warn("createRequest failed (continuing)", e);
      }

      if (createRes.taskId) {
        for (const file of photos) {
          const fd = new FormData();
          fd.append("photo", file);
          await fetch(`/api/uploadPhoto?taskId=${createRes.taskId}`, {
            method: "POST",
            body: fd,
          });
        }
      } else if (photos.length) {
        console.warn("Skipping photo upload because no Trello card was created.");
      }

      const bodyText = `Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Message: ${formData.overview}`;

      const emailFd = new FormData();
      emailFd.append("name", formData.name);
      emailFd.append("email", formData.email);
      emailFd.append("formType", formData.formType);
      emailFd.append("bodyText", bodyText);
      if (createRes.taskId) emailFd.append("asanaTaskId", String(createRes.taskId));
      if (createRes.cardUrl) emailFd.append("trelloCardUrl", createRes.cardUrl);
      photos.forEach((p) => {
        if (p.size <= 2 * 1024 * 1024) emailFd.append("photos", p);
      });

      const emailRes = await fetch("/api/sendEmail", {
        method: "POST",
        body: emailFd,
      });
      if (!emailRes.ok) {
        const text = await emailRes.text().catch(() => "");
        console.error("sendEmail failed", { status: emailRes.status, text });
        throw new Error("sendEmail failed");
      }

      setStatus("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        address: "",
        overview: "",
        promoCode: "",
        zipCode: "",
        howDidYouFindUs: isInstagramAttribution ? INSTAGRAM_OPTION : "",
        formType: "contact",
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
      className="theme-form-shell max-w-4xl mx-auto"
    >
      <h2 className="theme-form-heading">
        {siteConfig.contact.heading}
      </h2>
      <p className="theme-form-description">
        {siteConfig.contact.description}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <input
          className="theme-form-input"
          required
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          className="theme-form-input"
          required
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <input
        className="theme-form-input"
        required
        type="tel"
        name="phone"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleChange}
      />

      <input
        className="theme-form-input mt-4"
        required
        type="text"
        name="zipCode"
        placeholder="Zip Code"
        value={formData.zipCode}
        onChange={handleChange}
      />

      <textarea
        className="theme-form-input"
        required
        name="overview"
        placeholder="Your Message"
        rows={4}
        value={formData.overview}
        onChange={handleChange}
      />

      <div>
        <label className="theme-form-label">Upload up to 4 Photos (optional)</label>
        <input
          key={fileInputKey}
          className="theme-form-file-input"
          type="file"
          name="photos"
          accept="image/*"
          multiple
          onChange={handleChange}
        />
      </div>

      {!isInstagramAttribution && (
        <div className="flex flex-col">
          <label htmlFor="howDidYouFindUs" className="theme-form-label">
            How did you find us?
          </label>
          <select
            id="howDidYouFindUs"
            name="howDidYouFindUs"
            className="theme-form-input"
            required
            value={formData.howDidYouFindUs}
            onChange={handleChange}
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
        Send Message
      </button>

      <p className="theme-form-status">{status}</p>
    </form>
  );
}

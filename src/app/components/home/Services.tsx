"use client";
import { useState } from "react";
import Section from "../PageSection";
import styled from "styled-components";
import {
  SectionHeaderWrapper,
  SectionHeader,
  SectionBody,
  SectionSubHeader,
  SectionContent,
} from "./ServiceStyles";
import ServiceCard from "./ServiceCard";
import { siteConfig } from "@/lib/siteConfig";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 16px;

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: stretch;
    gap: 24px;
  }
`;

const Services = () => {
  const [activeCard, setActiveCard] = useState(siteConfig.services[0].title);

  function handleCardClick(e: { currentTarget: any; }) {
    const card = e.currentTarget;
    const title = card.querySelector("h2")?.textContent || "";
    setActiveCard(title);
  }

  return (
    <Section bgcolor="var(--color-primary-soft)">
      <SectionHeaderWrapper>
        <SectionHeader>
          <span className="sectionNumber">03/ </span>Our Services
        </SectionHeader>
        <hr />
      </SectionHeaderWrapper>
      <SectionBody>
        <SectionSubHeader>
          Flexible service cards for any painting company
        </SectionSubHeader>
        <SectionContent>
          <CardContainer>
            {siteConfig.services.map((service) => (
              <ServiceCard
                key={service.key}
                isactive={activeCard === service.title}
                title={service.title}
                description={service.description}
                image={service.image}
                secondImage={"secondImage" in service ? service.secondImage : undefined}
                href={service.href}
                handleCardClick={handleCardClick}
              />
            ))}
          </CardContainer>
        </SectionContent>
      </SectionBody>
    </Section>
  );
};

export default Services;

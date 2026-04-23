"use client";
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
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  gap: 16px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 20px;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 24px;
  }
`;

const Services = () => {
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
          Painting and carpentry services across the Portland area
        </SectionSubHeader>
        <SectionContent>
          <CardContainer>
            {siteConfig.services.map((service) => (
              <ServiceCard
                key={service.key}
                title={service.title}
                description={service.description}
                image={service.image}
                href={service.href}
              />
            ))}
          </CardContainer>
        </SectionContent>
      </SectionBody>
    </Section>
  );
};

export default Services;

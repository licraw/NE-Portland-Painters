"use client";

import styled from "styled-components";
import PageSection from "../PageSection";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

export const SectionHeaderWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 40px;
  align-self: stretch;
  .sectionNumber {
    color: var(--color-primary);
  }
  hr {
    flex-grow: 1;
    height: 1px;
    border: none;
    background-color: var(--color-border-strong);
  }
`;

export const SectionHeader = styled.h2`
  font-family: var(--font-geist-sans), ui-sans-serif, system-ui, sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  margin: 0;
  @media (min-width: 1024px) {
    font-size: 20px;
  }
`;

export const SectionBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-self: stretch;
`;

const AboutRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

export const SectionSubHeader = styled.h3`
  font-family: var(--font-geist-sans), ui-sans-serif, system-ui, sans-serif;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
  text-transform: capitalize;

  @media (min-width: 1024px) {
    font-size: 48px;
    line-height: 130%;
    max-width: 50%;
  }
`;

export const SectionContent = styled.div`
  font-family: var(--font-geist-sans), ui-sans-serif, system-ui, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
  max-width: 600px;
`;

const AboutLink = styled(Link)`
  display: inline-block;
  padding: 12px 24px;
  border-radius: 48px;
  border: 1px solid black;
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  color: black;
  transition: all 0.3s ease;
  margin-top: 16px;

  &:hover {
    background: black;
    color: white;
  }
`;

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  margin-top: 24px;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }
`;

const StatCard = styled.div`
  background: var(--color-primary-soft);
  border-radius: 12px;
  padding: 24px;
  text-align: center;
  font-family: var(--font-geist-sans), ui-sans-serif, system-ui, sans-serif;

  h4 {
    font-family: var(--font-geist-sans), ui-sans-serif, system-ui, sans-serif;
    font-size: 32px;
    font-weight: 700;
    color: var(--color-primary);
    margin: 0;
  }

  p {
    font-size: 14px;
    font-weight: 500;
    margin: 8px 0 0;
  }
`;

const About = () => {
  return (
    <PageSection bgcolor="white">
      <SectionHeaderWrapper>
        <SectionHeader>
          About Us
        </SectionHeader>
        <hr />
      </SectionHeaderWrapper>
      <SectionBody>
        {/* Title and Content Side-by-Side */}
        <AboutRow>
          <SectionSubHeader>{siteConfig.about.headline}</SectionSubHeader>
          <SectionContent>
            {siteConfig.about.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <AboutLink href="/about">About Us</AboutLink>
          </SectionContent>
        </AboutRow>

        {siteConfig.about.stats.length > 0 ? (
          <StatsContainer>
            {siteConfig.about.stats.map((stat) => (
              <StatCard key={stat.value}>
                <h4>{stat.value}</h4>
                <p>{stat.description}</p>
              </StatCard>
            ))}
          </StatsContainer>
        ) : null}
      </SectionBody>
    </PageSection>
  );
};

export default About;

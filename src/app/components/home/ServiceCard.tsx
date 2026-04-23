"use client";
import styled from "styled-components";
import Link from "next/link";

interface ServiceCardProps {
  title: string;
  description?: string;
  image?: string;
  href: string;
}

type CardProps = Pick<ServiceCardProps, "image">;

const toCssImageUrl = (image?: string) => {
  if (!image) return "none";
  return `url("${encodeURI(image)}")`;
};

const Card = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "image",
})<CardProps>`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
  height: 400px;
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  background: linear-gradient(
      180deg,
      rgba(9, 51, 25, 0) 30%,
      rgba(9, 51, 25, 0.9) 90%
    ),
    linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    ${(props) => toCssImageUrl(props.image)} center/cover no-repeat;

  @media (min-width: 1024px) {
    opacity: 1;
  }

  @media (max-width: 1023px) {
    width: 100%;
    transform: none;
    opacity: 1;
  }
`;

const CardLink = styled(Link)`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  text-decoration: none;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px;
  gap: 12px;
  width: 100%;
  position: relative;
`;

const Title = styled.h2`
  font-family: var(--font-geist-sans), ui-sans-serif, system-ui, sans-serif;
  font-size: 28px;
  font-weight: 600;
  color: white;
`;

const Description = styled.p`
  font-family: var(--font-geist-sans), ui-sans-serif, system-ui, sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: white;
  line-height: 1.5;
  max-width: 600px;
`;

const ViewServiceCta = styled.span`
  align-self: flex-start;
  margin-top: 16px;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 500;
  border-radius: 20px;
  border: 1px solid white;
  color: black;
  background: white;
  transition: all 0.3s ease;

  ${CardLink}:hover & {
    background: rgba(255, 255, 255, 0.2);
    color: white;
  }
`;

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  image,
  href,
}) => {
  return (
    <Card title={title} image={image}>
      <CardLink href={href}>
        <ContentWrapper>
          <Title>{title}</Title>
          {description ? <Description>{description}</Description> : null}
          <ViewServiceCta>View Service</ViewServiceCta>
        </ContentWrapper>
      </CardLink>
    </Card>
  );
};

export default ServiceCard;

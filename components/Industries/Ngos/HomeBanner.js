"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Image,
  CloseButton,
} from "react-bootstrap";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import BannerAllPage from "../../PropsShared/BannerAllPage";
import ConfigData from "../../../config";
import SeoComponents from "../../../components/SeoComponents/Seo";
import { usePathname } from "next/navigation";
import { CiCircleChevRight } from "react-icons/ci";

function HeroBanner() {
  const pathname = usePathname();
  const [domainName, setDomainName] = useState("");

  useEffect(() => {
    setDomainName(window.location.hostname);
  }, []);

  const title =
    "Digital Marketing Solutions for Nonprofit Organizations | SEO, Social Media & Web Design";
  const description =
    "Maximize your nonprofit's impact with our comprehensive digital marketing services. From SEO and social media marketing to web design, we help NGOs and nonprofit organizations reach their audience and drive meaningful engagement.";
  const path = `${pathname}`;
  const metaImage = "";

  const backgroundImage = {
    url: "/industrie/profit-ngos.png",
  };

  const mobileBackgroundImage = {
    url: "/industrie/profit-ngos.png",
  };

  const bannerHeading = "NOT-FOR-PROFITS/ NGOs";

  return (
    <>
      <SeoComponents
        title={title}
        description={description}
        path={path}
        metaImage={metaImage}
      />
      {/* <ScrollAnimationIndustries /> */}

      <Container fluid className="bg-black p-0 position-relative z-3">
        <BannerAllPage
          backgroundImage={backgroundImage}
          bannerHeading={bannerHeading}
          mobileBackgroundImage={mobileBackgroundImage}
        />
      </Container>
    </>
  );
}

export default HeroBanner;

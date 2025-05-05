"use client";
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Image, CloseButton } from "react-bootstrap";
// import Image from 'next/image'
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
    "Digital Marketing Solutions for Fashion Brands | Increase Online Sales & Social Engagement";
  const description =
    "Unlock the potential of your fashion brand with our tailored digital marketing services. From increasing online sales for fashion accessories to enhancing social media engagement, we help bridge the gap between online visitors and sales while creating curated online experiences to strengthen brand loyalty. Discover how our expertise can elevate your brand's online presence and drive growth in the dynamic fashion industry.";
  const path = `${pathname}`;
  const metaImage = "";

  const backgroundImage = {
    url: "/industrie/fashion-access.png",
  };

  const mobileBackgroundImage = {
    url: "/industrie/fashion-access.png",
  };

  const bannerHeading = "FASHION & ACCESSORIES";

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

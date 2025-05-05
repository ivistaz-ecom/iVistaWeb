"use client";
import React, { useEffect, useState } from "react";
import { Container, Row, Col, CloseButton, Image } from "react-bootstrap";
import BannerAllPage from "../../PropsShared/BannerAllPage";
import SeoComponents from "../../../components/SeoComponents/Seo";
import { usePathname } from "next/navigation";
import { CiCircleChevRight } from "react-icons/ci";
import Link from "next/link";

function HeroBanner() {
  const pathname = usePathname();
  const [domainName, setDomainName] = useState("");

  useEffect(() => {
    setDomainName(window.location.hostname);
  }, []);

  const title =
    "Enhancing digital experience for customers in hospitality sector";
  const description =
    " Leveraging twelve years of expertise with digital marketing in the hospitality sector, iVistaz ensures content is fine-tuned to customer expectations.";
  const path = `${pathname}`;
  const metaImage = "";

  const backgroundImage = {
    url: "/industrie/hospitality.png",
  };

  const mobileBackgroundImage = {
    url: "/industrie/hospitality.png",
  };

  const bannerHeading = "HOSPITALITY";

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

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
import BannerAllPage from "../../PropsShared/BannerAllPage";
import SeoComponents from "../../../components/SeoComponents/Seo";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiCircleChevRight } from "react-icons/ci";

function HeroBanner() {
  const pathname = usePathname();
  const [domainName, setDomainName] = useState("");

  useEffect(() => {
    setDomainName(window.location.hostname);
  }, []);

  const title = "Strengthening market share in Indian Automobile Industry";
  const description =
    "As India sees transformative growth at global levels for the automobile industry, digital marketing services are imperative to grow brand networks.";
  const path = `${pathname}`;
  const metaImage = "";

  const backgroundImage = {
    url: "/industrie/auto-mobiles.png",
  };

  const bannerHeading = "AUTOMOBILES";

  const mobileBackgroundImage = {
    url: "/industrie/auto-mobiles.png",
  };

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

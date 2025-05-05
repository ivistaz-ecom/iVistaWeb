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
import BannerAllPage from "../../PropsShared/BannerAllPage";
import CaseStudiesCategoriesComponents from "../../PropsShared/CaseStudiesCategoriesComponents";
import ScrollAnimationIndustries from "../../SharedComponents/ScrollAnimationindustries";
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
    "Increase Online Sales for Home Appliances | Expert Digital Marketing for Appliance Brands";
  const description =
    "Boost your appliance brand's online sales with our specialised digital marketing strategies. Capitalise on the growing market and enhance your brand's visibility and engagement on e-stores and marketplaces. Discover how we can help you succeed in the rapidly evolving appliances industry.";
  const path = `${pathname}`;
  const metaImage = "";

  const backgroundImage = {
    url: "/industrie/appliances-new.png",
  };

  const mobileBackgroundImage = {
    url: "/industrie/appliances-new.png",
  };

  const bannerHeading = "APPLIANCES";

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

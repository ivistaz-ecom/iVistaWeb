"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

const BannerAllPage = ({
  backgroundImage,
  bannerHeading,
  mobileBackgroundImage,
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    if (typeof window !== "undefined") {
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return (
    <>
      <Container
        fluid
        className="d-flex flex-column justify-content-lg-center justify-content-start align-items-start align-items-lg-start pt-lg-0 pt-4"
        style={{
          backgroundImage: `url(${
            isMobile ? mobileBackgroundImage.url : backgroundImage.url
          })`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: "",
          aspectRatio: isMobile ? "16/9" : "21/9",
          padding: "0",
          margin: "0",
        }}
      ></Container>
    </>
  );
};

export default BannerAllPage;

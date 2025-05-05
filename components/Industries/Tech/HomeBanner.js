"use client"

import React, { useEffect, useRef, useState } from 'react'
import { Container, Row, Col, Button, Image, CloseButton } from 'react-bootstrap'
// import Image from 'next/image'
import { FaArrowRight } from "react-icons/fa";
import Link from 'next/link'
import BannerAllPage from '../../PropsShared/BannerAllPage';
import ConfigData from '../../../config'
import SeoComponents from '../../../components/SeoComponents/Seo'
import { usePathname } from 'next/navigation'
import { CiCircleChevRight } from "react-icons/ci";


function HeroBanner() {

  const pathname = usePathname();
  const [domainName, setDomainName] = useState('');

  useEffect(() => {
    setDomainName(window.location.hostname);
  }, []);

  const title = "Marketing services within an evolving digital ecosystem  ";
  const description = "As trends and technologies in digital marketing rapidly evolve, iVistaz leverages its expertise to ensure you stay ahead of the curve.";
  const path = `${domainName}${pathname}`;
  const metaImage = "";

  const backgroundImage = {
    url: '/industrie/tech-it.png'
  };

  const mobileBackgroundImage = {
    url: '/industrie/tech-it.png'
  }

  const bannerHeading = 'TECH/IT'

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
  )
}

export default HeroBanner

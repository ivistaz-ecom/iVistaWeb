"use client"
import React, { useEffect, useRef, useState } from 'react'
import { Container, Row, Col, Button, Image, CloseButton } from 'react-bootstrap'
// import Image from 'next/image'
import Link from 'next/link'
import { FaArrowRight } from "react-icons/fa";
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

  const title = "Digital Marketing Solutions for Beauty and Wellness Brands | Increase Online Sales & Market Reach";
  const description = " Unlock the potential of your beauty and wellness brand with our tailored digital marketing services. From optimizing search visibility to driving online sales and engaging with your audience on social media, we help your brand stand out in the crowded market.";
  const path = `${domainName}${pathname}`;
  const metaImage = "";

  const backgroundImage = {
    url: '/industrie/beauty-well.png'
  };

  const bannerHeading = 'BEAUTY & WELLNESS'

  const mobileBackgroundImage = {
    url: '/industrie/beauty-well.png'
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
  )
}

export default HeroBanner

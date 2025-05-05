import React from "react";
import ScrollAnimationIndustries from "../../SharedComponents/ScrollAnimationindustries";
import { Col, Container } from "react-bootstrap";
import Link from "next/link";
import CaseStudiesCategoriesComponents from "../../PropsShared/CaseStudiesCategoriesComponents";

const FashionContentComponents = () => {
  const categoryId = 13;

  return (
    <>
      <style jsx>{`
         {
          .app {
            color: #ff0000 !important;
          }
        }
      `}</style>
      {/* <ScrollAnimationIndustries /> */}
      <Container fluid className="bg-white p-0">
        <div className="text-center fs-1 fw-bold pt-5 pb-lg-4 text-uppercase app">
          FASHION & ACCESSORIES
        </div>
        <article>
          <Col className="timeline3">
            <div className="position-relative ">
              <div className="timeline-badge3 mt-4"></div>
              <Container className="w-80 pb-4 pt-4">
                <p className="text-black para-text text-center fw-bold fs-5">
                  According to an article by the Times of India, the fashion
                  industry is poised to{" "}
                  <Link
                    href="https://timesofindia.indiatimes.com/blogs/voices/indian-apparel-and-fashion-market-in-next-five-years-industry-growth-challenges-and-opportunities/"
                    target="_blank"
                    className="text-black fw-bold cursor-pointer"
                  >
                    grow into a $106 billion industry by 2026,
                  </Link>{" "}
                  bringing up the Indian fashion market on maps.
                </p>
              </Container>
            </div>

            <div className="position-relative p-0 iv-bg ">
              <div className="timeline-badge3 mt-5"></div>
              <Container className="pt-5 pb-5 p-lg-5">
                <p className="text-white fs-2">
                  We will help you to capitalize on this market opportunity with
                  robust digital solutions that include:
                </p>
                <ul>
                  <li className="industry-bullet">
                    <p className="text-white para-text">
                      Bridging the gap between online visitors and sales
                      (in-store and online) both on your e-store, as well as on
                      marketplaces and increasing online sales for fashion
                      accessories.
                    </p>
                  </li>
                  <li className="industry-bullet">
                    <p className="text-white para-text">
                      Creating strong curated online experiences for your
                      customers to strengthen brand loyalty. Our digital
                      marketing for fashion brands focuses on crafting
                      compelling content and engaging experiences to attract and
                      retain customers.
                    </p>
                  </li>
                  <li className="industry-bullet">
                    <p className="text-white para-text">
                      Ensuring consistent social media engagement with your
                      customers. Our social media marketing for fashion brands
                      ensures your brand stays top-of-mind and engages with your
                      audience across platforms, driving brand awareness and
                      loyalty.
                    </p>
                  </li>
                </ul>
                <Container className="">
                  <Col className="d-flex flex-column align-items-center pt-4">
                    <Link className="btn-14 z-0" href="/contact-us">
                      Contact Us
                    </Link>
                  </Col>
                </Container>
              </Container>
            </div>

            <Container className="mt-5 mb-5 w-80 ps-7">
              <p className="fs-2">
                Here’s how we helped fashion and accessories brands secure a
                winning edge:
              </p>
            </Container>
          </Col>

          {/* case studies Props */}
          <Container className="w-80 pb-5">
            <CaseStudiesCategoriesComponents categoryId={categoryId} />
          </Container>
        </article>
      </Container>
    </>
  );
};

export default FashionContentComponents;

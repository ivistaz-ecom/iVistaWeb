import Link from "next/link";
import React from "react";
import { Col, Container } from "react-bootstrap";
import CaseStudiesCategoriesComponents from "../../PropsShared/CaseStudiesCategoriesComponents";
import ScrollAnimationIndustries from "../../SharedComponents/ScrollAnimationindustries";

const JewellryContent = () => {
  const categoryId = 15;

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
      <Container fluid className="p-0 bg-white">
        <div className="text-center fs-1 fw-bold pt-5 pb-lg-4 text-uppercase app">
        JEWELRY
        </div>
        <article>
          <Col className="timeline3 pt-1">
            <div className="position-relative ">
              <div className="timeline-badge3 mt-4"></div>
              <Container className="pt-lg-0 pt-2 w-80 pb-4">
                <p className=" para-text pe-lg-2 pe-3 text-center fs-5 fw-bold">
                  The Indian jewelry industry is a celebrated sector that
                  exhibits a remarkable ability to adapt to evolving trends in
                  response to the ever-changing needs and preferences of its
                  customers.
                </p>
              </Container>
            </div>

            <div className="position-relative iv-bg">
              <div className="timeline-badge3 mt-5"></div>
              <Container className="pt-5 pb-5 p-lg-5 ">
                <p className=" text-white fs-2 text-center">
                  {" "}
                  We will help your business keep up with this dynamic industry
                  by:
                </p>
                <ul>
                  <li className="industry-bullet">
                    <p className="text-white para-text">
                      Creating and improving the connection between online
                      visitors and sales, through end-to-end services, in order
                      to increase online sales for jewelry brands and boost
                      online conversions and sales both in-store and online.
                    </p>
                  </li>
                  <li className="industry-bullet">
                    <p className="text-white para-text">
                      Developing compelling and personalized online experiences
                      that will strengthen customers’ loyalty to your brand,
                      thus creating a more curated online experience. Our
                      digital marketing for jewelry brands focuses on creating
                      engaging content and leveraging social media platforms to
                      enhance brand visibility and drive sales.
                    </p>
                  </li>
                  <li className="industry-bullet">
                    <p className="text-white para-text">
                      Curating keywords that will ensure a lower cost of
                      acquisition. Our paid marketing services for jewelry
                      brands employ strategic keyword targeting to optimize ad
                      campaigns and drive qualified traffic to your online
                      store.
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

            <Container className="mt-5 mb-5 w-80 ">
              <p className="fs-2 text-center">
                Here’s how we have helped jewelry brands to win in the <br />
                e-commerce channel
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

export default JewellryContent;

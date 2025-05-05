import Link from "next/link";
import React from "react";
import { Col, Container } from "react-bootstrap";
import ScrollAnimationIndustries from "../../SharedComponents/ScrollAnimationindustries";
import CaseStudiesCategoriesComponents from "../../PropsShared/CaseStudiesCategoriesComponents";

const HospitlityComp = () => {
  const categoryId = 14;

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
        HOSPITALITY
        </div>
        <article>
          <Col className="timeline3">
            <div className="position-relative">
              <div className="timeline-badge3 mt-4"></div>
              <Container className="w-80 pb-4 pt-3 pt-lg-0">
                <p className="text-center para-text fw-bold fs-5">
                  In the last 12 years, iVistaz has built a deep digital
                  hospitality practice .
                </p>
              </Container>
            </div>

            <div className="position-relative p-0">
              <div className="timeline-badge3 mt-5"></div>
              <Container
                className="iv-bg d-flex flex-column justify-content-center pb-5 pt-5 text-center p-lg-5"
                fluid
              >
                <p className="text-white para-text fs-3">
                  We can leverage our experience in digital marketing for the
                  hospitality industry to grow and sustain online room revenues
                  for your properties and in turn, help increase room occupancy,
                  RevPAR (Revenue Per Available Room) and ADR (Average Daily
                  Rate) . We are also deeply aware that the customers of luxury
                  hospitality brands are highly discerning, and our focus will
                  be to enhance their overall digital experience with engaging
                  UI/UX and content.
                </p>
                <Container className="">
                  <Col className="d-flex flex-column align-items-center pt-lg-4">
                    <Link className="btn-14 z-0" href="/contact-us">
                      Contact Us
                    </Link>
                  </Col>
                </Container>
              </Container>
            </div>

            <Container className="mt-5 mb-5 w-80 ps-7">
              <p className="fs-2 text-black w-80 mx-auto pe-3 text-center">
                Here are some numbers from our experience in digital marketing
                for the hotel industry that will interest you.
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

export default HospitlityComp;

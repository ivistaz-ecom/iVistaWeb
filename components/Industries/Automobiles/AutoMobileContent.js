import Link from "next/link";
import React from "react";
import { Col, Container } from "react-bootstrap";
import CaseStudiesCategoriesComponents from "../../PropsShared/CaseStudiesCategoriesComponents";
import ScrollAnimationIndustries from "../../SharedComponents/ScrollAnimationindustries";

const AutoMobileContent = () => {
  const categoryId = 10;

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
      <Container fluid className="p-0">
        <div className="text-center fs-1 fw-bold pt-5 pb-lg-4 text-uppercase app">
          AUTOMOBILES
        </div>
        <Container fluid className="bg-white p-0">
          <article>
            <Col className="timeline3">
              <div className="position-relative">
                <div className=" mt-4"></div>
                <Container className="p w-80 pb-4 ">
                  <p className="text-black para-text pe-lg-2 pe-3 text-center">
                    <Link
                      href="/pdf/THE_AUTOMOBILE_SECTOR_IN_INDIA.pdf"
                      target="_blank"
                      className="text-black"
                    >
                      According to the Ministry of Heavy Industries,
                    </Link>{" "}
                    Government of India, the automotive industry is likely to
                    see significant transformations at a global level in the
                    next ten years. Among the notable changes will be the shift
                    of growth in demand for automobiles from developed nations
                    to developing nations (mainly BRICS).
                  </p>
                  <p className="text-black para-text pe-lg-2 pe-3 text-center">
                    India aims to double its auto industry size to Rs. 15
                    trillion by end of the year 2024 (Source: Ministry of Heavy
                    Industries).
                  </p>
                </Container>
              </div>
              <div className="position-relative">
                <div className="timeline-badge3 mt-"></div>
                <Container className=" w-80 pb-4 ps-7">
                  <p className="text-black fs-5 pe-3 fw-bold text-center">
                    Your focus would be on strengthening your market share in
                    India by growing your sales and dealer network through
                    digital marketing for the automotive industry. Through our
                    online marketing service for automobile companies, iVistaz
                    can support you in this journey and help:
                  </p>
                </Container>
              </div>

              <div className="position-relative">
                <div className="timeline-badge3 mt-5 p-0"> </div>
                <Container className="iv-bg pt-5 pb-5" fluid>
                  <p className="text-white para-text text-center w-80 mx-auto fs-3 px-md-5">
                    Your brand to increase online enquiries, bookings and sales
                    conversion ratios
                  </p>
                  <p className="text-white para-text text-center w-80 mx-auto fs-3 px-md-5">
                    You to increase your qualified leads and sales conversion
                    ratios for you and for your dealers
                  </p>
                  <Container className="py-2">
                    <Col className="d-flex flex-column align-items-center">
                      <Link className="btn-14 z-0" href="/contact-us">
                        Contact Us
                      </Link>
                    </Col>
                  </Container>
                </Container>
              </div>
              <Container className="mt-5 mb-5 w-80 ps-7">
                <p className="fs-2 text-black text-center">
                  Here’s how we have helped brands win over the dynamic and
                  highly competitive industry through digital marketing for
                  automobile brands
                </p>
              </Container>
            </Col>

            {/* case studies Props */}
            <Container className="w-80 pb-5">
              <CaseStudiesCategoriesComponents categoryId={categoryId} />
            </Container>
          </article>
        </Container>
      </Container>
    </>
  );
};

export default AutoMobileContent;

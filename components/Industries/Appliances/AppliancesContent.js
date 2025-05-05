import React from "react";
import { Col, Container } from "react-bootstrap";
import CaseStudiesCategoriesComponents from "../../PropsShared/CaseStudiesCategoriesComponents";
import ScrollAnimationindustries from "../../SharedComponents/ScrollAnimationindustries";
import Link from "next/link";

const AppliancesContent = () => {
  const categoryId = 11;

  return (
    <>
      <style jsx>{`
         {
          .app {
            color: #ff0000 !important;
          }
        }
      `}</style>
      {/* <ScrollAnimationindustries /> */}
      <Container fluid className="bg-white p-0">
        <div className="text-center fs-1 fw-bold pt-5 pb-lg-4 text-uppercase app">
          Appliances
        </div>
        <article>
          <Col className="timeline3">
            <div className="position-relative">
              <div className="timeline-badge3 mt-4"></div>
              <Container className="pt-4 w-80 pb-4 pt-4">
                <p className="text-black para-text pe-3 text-center">
                  The Indian Appliances and Consumer Electronics industry is
                  expected to double to Rs. 1.48 trillion by 2025{" "}
                  <Link
                    href="https://retail.economictimes.indiatimes.com/news/consumer-durables-and-information-technology/consumer-electronics/indian-appliances-consumer-electronic-industry-to-double-to-rs-1-48-crore-by-2025/95568165"
                    target="_blank"
                    className="text-black"
                  >
                    according to CEAMA
                  </Link>
                  . A recent report{" "}
                  <Link
                    href="https://yourstory.com/2022/10/indian-online-shoppers-migh-outnumber-us-shoppers-ecommerce"
                    target="_blank"
                    className="text-black"
                  >
                    by Flipkart and Bain & Co
                  </Link>{" "}
                  states that the number of online shoppers in India is likely
                  to grow to 400 million-450 million by 2027 from 180
                  million-190 million in 2021 and appliances (along with mobiles
                  and electronics) will have among the highest market shares at
                  25-30%.
                </p>
              </Container>
            </div>
            <div className="position-relative">
              <div className="timeline-badge3 mt-"></div>
              <Container className=" w-80 pb-4 ps-7">
                <p className="text-black fs-4 pe-3 fw-bold text-center" >
                  The size of customers doing research online and buying offline
                  is rapidly shrinking. More and more buyers are now comfortable
                  buying even large appliances online. Undoubtedly, you would be
                  looking to capitalize on this opportunity.
                </p>
                <p className="text-black fs-4 pe-3 fw-bold text-center">
                  Our carefully tailored digital marketing strategies will help
                  to increase online sales for appliances brands, boosting
                  visibility and engagement both on your brand e-store as well
                  as on marketplaces. With our expertise in digital marketing
                  for the appliances industry, we ensure your brand stands out
                  in a competitive market.
                </p>
              </Container>
            </div>

            <div className="position-relative" fluid>
              <div className="timeline-badge3 mt-5 p-0"> </div>
              <Container className="iv-bg pt-5 pb-5" fluid>
                <p className="text-white para-text text-center w-80 mx-auto fs-3 container px-0 px-md-5">
                  We focus on strategies that optimize online sales for home
                  appliances brands, leveraging targeted campaigns and
                  data-driven insights to reach your ideal customers. Our
                  approach will help you capture the growing market of online
                  shoppers and drive significant sales growth.
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

            <div className="position-relative">
              <div className="timeline-badge3 mt-"></div>
              <Container className=" w-80 pb-4 pt-4 ps-7">
                <p className="text-black fs-2 w-80 mx-auto pe-3 text-center">
                  Here’s how we have helped appliance brands to win in the<br/>
                  e-commerce channel:
                </p>
              </Container>
            </div>
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

export default AppliancesContent;

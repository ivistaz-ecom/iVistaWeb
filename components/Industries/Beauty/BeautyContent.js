import React from "react";
import { Container, Col } from "react-bootstrap";
import ScrollAnimationIndustries from "../../SharedComponents/ScrollAnimationindustries";
import CaseStudiesCategoriesComponents from "../../PropsShared/CaseStudiesCategoriesComponents";
import Link from "next/link";

const BeautyContent = () => {
  const categoryId = 12;

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
      <div className="text-center text-black fs-1 fw-bold pt-5 pb-lg-4 text-uppercase app">
      BEAUTY & WELLNESS 
        </div>
        <article>
          <Col className="timeline3">
            <div className="position-relative">
              <div className="timeline-badge3 mt-4"></div>
              <Container className="pt-4 w-80 pb-4 pt-4 ">
                <p className="text-black para-text pe-lg-2 pe-3 text-center">
                  The beauty and wellness market has been growing at a rapid
                  pace in India. The market in India was valued at INR 901.07
                  billion in 2018 and is{" "}
                  <Link
                    href="https://bwwellbeingworld.businessworld.in/article/How-Beauty-Wellness-Sector-Emerge-As-A-Thriving-Sector-In-India/18-10-2021-408985/"
                    target="_blank"
                    className="text-black cursor-pointer"
                  >
                    {" "}
                    forecasted to reach INR 2,463.49 billion by the year 2024.
                  </Link>
                </p>
                <p className="text-black pt-3 fs-5 text-center para-text pe-lg-2 pe-3 fw-bold">
                  What is notable is that the beauty and wellness market today
                  straddles the affluent as well as the middle class, the female
                  as well as the male sexes, the synthetic brands as well as the
                  organic brands. The sheer number of new entrants, especially
                  in the ‘natural’, ‘vegan’ ‘safe’ and ‘sustainable’ categories
                  is testimony to the exponential growth of the industry.
                </p>
              </Container>
            </div>

            <div className="position-relative iv-bg">
              <div className="mt-3"></div>
              <Container className=" pb-5 pt-5 p-lg-5">
                <p className="text-white fs-2">
                  To help your brand to stand out in a highly crowded market, we
                  will:
                </p>
                <ul className="text-white">
                  <li className="industry-bullet">
                    <p className=" para-text fs-lg-5">
                      Develop and implement robust search strategies to drive
                      your primary target audience to your brand store and
                      marketplaces. Our digital marketing for beauty products
                      focuses on optimizing search visibility and attracting
                      potential customers interested in wellness products.
                    </p>
                  </li>
                  <li className="industry-bullet">
                    <p className=" para-text fs-lg-5">
                      Create a robust performance-based e-commerce model with a
                      monthly/quarterly goal of improving and sustaining your
                      revenues. Through our online marketing service for beauty
                      product brands, we ensure your brand achieves steady
                      growth and increased online sales for wellness products.
                    </p>
                  </li>
                  <li className="industry-bullet">
                    <p className=" para-text fs-lg-5">
                      Create a robust e-commerce channel that will not only
                      improve revenues on your e-store and marketplaces but also
                      drive customers to your offline stores. With our social
                      media marketing for beauty brands, we engage your audience
                      across platforms, driving traffic to both your online and
                      offline stores, maximizing your brand's reach and impact.
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
              <p className="fs-2 text-black">
                Here’s how we helped beauty and wellness brands secure a winning
                edge:
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

export default BeautyContent;

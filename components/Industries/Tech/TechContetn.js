import React from "react";
import ScrollAnimation from "../../SharedComponents/ScrollAnimationServices";
import { Col, Container } from "react-bootstrap";
import CaseStudiesCategoriesComponents from "../../PropsShared/CaseStudiesCategoriesComponents";
import Link from "next/link";
import ScrollAnimationIndustries from "../../SharedComponents/ScrollAnimationindustries";

const TechContetn = () => {
  const categoryId = 17;

  return (
    <>
      {" "}
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
          TECH/IT
        </div>
        <article>
          <Col className="timeline3">
            <div className="position-relative">
              <div className="timeline-badge3 mt-4"></div>
              <Container className=" w-80 pb-4 pt-3 pt-lg-0 ">
                <p className="fw-bold fs-5 para-text text-center">
                  The evolving digital trends and technologies are causing a
                  tectonic shift in digital marketing for IT companies. In this
                  scenario, iVistaz will help you keep pace and have a firm
                  grasp on the evolving digital ecosystem to give you measurable
                  ROI for your digital spending.
                </p>
              </Container>
            </div>

            <div className="position-relative iv-bg ">
              <div className="timeline-badge3 mt-5"></div>
              <Container className="p-lg-5 p-3">
                <p className=" text-white fs-2">
                  {" "}
                  Our digital marketing services for Tech and IT brands include:
                </p>
                <ul>
                  {/* <li className='industry-bullet'>
                                        <p className="text-white para-text">Assess the current or redefine<span className='fw-bold'> positioning, messaging and narrative</span> for value creation.</p>
                                    </li>
                                    <li className='industry-bullet'>
                                        <p className="text-white para-text">Create pull for your website and offerings with<span className='fw-bold'> engaging content and SEO</span>.</p>
                                    </li> */}
                  <li className="industry-bullet">
                    <p className="text-white para-text">
                      Generate Marketing Qualified Leads (MQLs) with email
                      marketing, SEM and SMM
                    </p>
                  </li>
                  <li className="industry-bullet">
                    <p className="text-white para-text">
                      Enhance the web experience for your customers with
                      engaging UI/UX developed on a robust tech platform
                    </p>
                  </li>
                  <li className="industry-bullet">
                    <p className="text-white para-text">
                      Content writing for your blogs, articles, eBooks, POVs,
                      case studies, product-solution pages, campaign landing
                      pages and newsletter content
                    </p>
                  </li>
                  <li className="industry-bullet">
                    <p className="text-white para-text">
                      Thought leadership content: White papers, articles and
                      blogs for the CEO’s office
                    </p>
                  </li>
                  <li className="industry-bullet">
                    <p className="text-white para-text">
                      Keyword research, on-page and off-page SEO to help your
                      brand and offerings rank in the top 10 search results
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
            <Container className="mt-5 mb-5 d-flex flex-column align-items-center justify-content-center text-center">
              <p className="fs-2 mb-3">
                Smarter, Faster, AI-Powered Marketing for Tech Brands
              </p>
              <Link href="/ai-powered-marketing" className="btn-18 p-2 px-0">
                Explore Solutions
              </Link>
            </Container>

            <Container className="mt-5 mb-5 w-80">
              <p className="fs-2 text-center">
                Here are some instances where our expertise and cutting-edge
                solutions have propelled Tech/IT companies to success:
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

export default TechContetn;

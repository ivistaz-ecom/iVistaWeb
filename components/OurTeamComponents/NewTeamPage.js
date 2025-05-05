"use client";
import React, { useState, useEffect } from "react";
import ConfigData from "../../config";
import { Col, Container, Image, Row } from "react-bootstrap";
import Link from "next/link";

const NewTeamPage = () => {
  return (
    <div>
      <style>
        {`  
          .image-container {
            position: relative;
            width: 100%;
            max-width: 400px;
            margin: auto;
            overflow: hidden;
            border-radius: 10px;
          }
          .image-container img {
            width: 100%;
            border-radius: 10px;
            transition: transform 0.3s ease-in-out;
          }
          .image-container .overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            box-shadow: inset 0px 0px 30px 40px rgba(0, 0, 0, 0.7);
            opacity: 0;
            transition: opacity 0.3s ease-in-out;
            border-radius: 0px;
            pointer-events: none;
          }
          .image-container:hover .overlay {
            opacity: 1;
          }
          @media (max-width: 768px) {
            .static-card {
              height: 550px;
            }
          }
          .app {
            color: #ff0000 !important;
          }
        `}
      </style>

      <Container fluid className="bg-white p-0 pb-5 p-2 ">
        <Container className="w-80 custom-container">
          <h1 className="text-white fs-70 fw-bold d-inline-block text-uppercase app pt-5">
            Expertise Of <br /> Key Personnel
          </h1>
          <p className="text-black para-text pe-3 text-start">
            At iVistaz, we believe that the strength of any project lies in the
            expertise, creativity, and executional rigour of the team behind it.
            Our people bring together deep experience across industries,
            offering a balance of strategic thinking, technical excellence, and
            creative vision to every engagement.
          </p>

          <Container className="iv-bg pt-5 mt-5 pb-5 rounded-5 p-lg-4">
            <h3 className="text-white para-text mx-auto fs-3 px-lg-4 fw-semibold">
              Account Management Team
            </h3>
            <Container className="py-2">
              <ul className="fs-5 text-white para-text px-lg-4">
                <li>
                  <span className="fw-bold">Average Experience:</span>{" "}
                  <span className="fw-light">9+ Years</span>
                </li>
                <li className="pt-2">
                  <span className="fw-bold">Strengths:</span>{" "}
                  <span className="fw-light">
                    Strategic Planning, Project Management, Digital Campaign
                    Execution, Analytics and Reporting, <br />
                    and Stakeholder Coordination
                  </span>
                </li>
                <li className="pt-2">
                  <span className="fw-bold">Industries Served:</span>{" "}
                  <span className="fw-light">
                    Technology, Hospitality, E-Commerce, Education, Social
                    Impact, D2C, Finance, and Real Estate
                  </span>
                </li>
              </ul>
              <p className="text-white para-text px-lg-4 fs-5 text-start">
                Our account managers serve as the central point of communication
                and coordination, ensuring seamless collaboration between teams,
                maintaining project momentum, and delivering outcomes aligned
                with client expectations and timelines.
              </p>
            </Container>
          </Container>
          <Container className="iv-bg-white pt-5 mt-5 pb-5 rounded-5 mx-auto p-lg-4">
            <h3 className="text-black para-text mx-auto fs-3 px-lg-4 fw-semibold">
              Copywriting Team
            </h3>
            <Container className="py-2">
              <ul className="fs-5 text-black para-text px-lg-4">
                <li>
                  <span className="fw-bold">Average Experience:</span>{" "}
                  <span className="fw-light">6+ Years</span>
                </li>
                <li className="pt-2">
                  <span className="fw-bold">Industries Served:</span>{" "}
                  <span className="fw-light">
                    Technology, Hospitality, E-Commerce, Education, Social
                    Impact, D2C, Finance, and Real Estate
                  </span>
                </li>
              </ul>
              <p className="text-black para-text px-lg-4 fs-5 text-start">
                Our writers craft clear, engaging, and brand-aligned narratives
                that strengthen user experience and drive meaningful
                connections—whether it’s a landing page, campaign, or
                full-fledged website.
              </p>
            </Container>
          </Container>
          <Container className="iv-bg pt-5 mt-5 pb-5 rounded-5 mx-auto p-lg-4">
            <h3 className="text-white para-text mx-auto fs-3 px-lg-4 fw-semibold">
              Design Team
            </h3>
            <Container className="py-2">
              <ul className="fs-5 text-white para-text px-lg-4">
                <li>
                  <span className="fw-bold">Average Experience:</span>{" "}
                  <span className="fw-light">10+ Years</span>
                </li>
                <li className="pt-2">
                  <span className="fw-bold">Tools Of Choice:</span>{" "}
                  <span className="fw-light">
                    Adobe XD, Photoshop, Illustrator, CorelDRAW, After Effects,
                    Premiere Pro, Figma
                  </span>
                </li>
                <li className="pt-2">
                  <span className="fw-bold">Certifications: </span>{" "}
                  <span className="fw-light">
                    User Interface & Interactive Design
                  </span>
                </li>
                <li className="pt-2">
                  <span className="fw-bold">Industries Served: </span>{" "}
                  <span className="fw-light">
                    Technology, Hospitality, E-Commerce, Education, Social
                    Impact, Finance, and Real Estate
                  </span>
                </li>
              </ul>
              <p className="text-white para-text px-lg-4 fs-5 text-start">
                Our UI/UX specialists focus on designing intuitive, mobile-first
                experiences that reflect brand personality while ensuring ease
                of use, visual coherence, and strong engagement across
                platforms.
              </p>
            </Container>
          </Container>
          {/* SEO Team */}
          <Container className="iv-bg-white pt-5 mt-5 pb-5 rounded-5 mx-auto p-lg-4">
            <h3 className="text-black para-text mx-auto fs-3 px-lg-4 fw-semibold">
              SEO/SEM Team
            </h3>
            <Container className="py-2">
              <ul className="fs-5 text-black para-text px-lg-4">
                <li>
                  <span className="fw-bold">Average Experience:</span>{" "}
                  <span className="fw-light">7+ Years</span>
                </li>
                <li className="pt-2">
                  <span className="fw-bold">Expertise:</span>{" "}
                  <span className="fw-light">
                    On-Page SEO, Technical SEO, Local SEO, and Paid Media
                    Strategy Across LinkedIn, Meta, and Google
                  </span>
                </li>
                <li className="pt-2">
                  <span className="fw-bold">Industries Served: </span>{" "}
                  <span className="fw-light">
                    Technology, Hospitality, E-Commerce, Education, Social
                    Impact, D2C, Finance, and Real Estate
                  </span>
                </li>
              </ul>
              <p className="text-black para-text px-lg-4 fs-5 text-start">
                Our SEO and performance marketing specialists ensure that
                digital properties are search-optimized, discoverable, and
                conversion-ready from the ground up, integrating best practices
                at every stage of development.
              </p>
            </Container>
          </Container>
          {/* Development Team */}
          <Container className="iv-bg pt-5 mt-5 pb-5 rounded-5 mx-auto p-lg-4">
            <h3 className="text-white para-text mx-auto fs-3 px-lg-4 fw-semibold">
              Web Development Team
            </h3>
            <Container className="py-2">
              <ul className="fs-5 text-white para-text px-lg-4">
                <li>
                  <span className="fw-bold">Average Experience:</span>{" "}
                  <span className="fw-light">5+ Years</span>
                </li>
                <li className="pt-2">
                  <span className="fw-bold">Technical Strengths:</span>{" "}
                  <span className="fw-light">
                    HTML5, CSS3, JavaScript, React, Next.js, Bootstrap, Tailwind
                    CSS, Sitecore XP, REST API, PHP, .NET, MySQL, MongoDB,
                    Python, Shopify, WordPress, Cloud Platforms (AWS, Azure,
                    Google Cloud), and DevOps Tools
                  </span>
                </li>
                <li className="pt-2">
                  <span className="fw-bold">Certifications: </span>{" "}
                  <span className="fw-light">
                    Sitecore Developer Certification (.NET & XP), React
                    Developer Certification, Laravel & MERN Stack
                  </span>
                </li>
                <li className="pt-2">
                  <span className="fw-bold">Industries Served: </span>{" "}
                  <span className="fw-light">
                    Technology, Hospitality, E-Commerce, Education, Social
                    Impact, Finance, and Real Estate
                  </span>
                </li>
              </ul>
              <p className="text-white para-text px-lg-4 fs-5 text-start">
                Our development team specializes in building robust, scalable
                digital platforms with a focus on performance, accessibility,
                security, and seamless third-party integrations.
              </p>
            </Container>
          </Container>
        </Container>
      </Container>
    </div>
  );
};

export default NewTeamPage;

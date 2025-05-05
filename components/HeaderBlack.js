"use client";
import React, { useState, useRef, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaBars } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

function HeaderBlackNew({ setChatVisible }) {
  const pathname = usePathname();
  const [show, setShow] = useState(false);
  const timeoutRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);

  const isActive = (path) => (pathname === path ? "active" : "");

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setShow(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShow(false);
      setChatVisible(true);
    }, 200);
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const serviceMenuTitles = {
    "/service/content-development-b2b-b2c": "Content Development (B2B & B2C)",
    "/service/design": "Design",
    "/service/search-engine-marketing": "Search Engine Marketing",
    "/service/search-engine-optimization": "Search Engine Optimization",
    "/service/social-media-marketing": "Social Media Marketing",
    "/service/organic-social-media": "Social Media - Organic ",
    "/service/website-design-and-development": "Website Design & Development"
  };

  const industryMenuTitles = {
    "/industries/appliances": "Appliances",
    "/industries/automobiles": "Automobiles",
    "/industries/beauty-wellness": "Beauty & Wellness",
    "/industries/fashion-accessories": "Fashion & Accessories",
    "/industries/hospitality": "Hospitality",
    "/industries/jewellery": "Jewelery",
    "/industries/ngos": "NGOs",
    "/industries/technology-IT": "Tech/IT"
  };

  const companyMenuTitles = {
    "/our-team": "Team",
    "/our-clients": "Clients",
    "/mastery/about-us": "About Us",
    "/careers": "Careers",
    "/mastery-art-performance": "M.A.P"
  };

  return (
    <>
      <style>{`
        .dropdown-menu.show {
          border: 0 !important;
          position: absolute;
          inset: auto auto 0px 0px; 
          min-height: 50vh !important;
        }

        .offcanvas-body {
          display: flex !important;
          flex-direction: column !important;
          flex-wrap: wrap !important;
          justify-content: space-between !important;
        }

        .header-container {
          transition: background-color 0.4s ease, box-shadow 0.4s ease;
        }

        .header-scrolled {
          background-color: white !important;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        .nav-dropdown.active,
        .nav-link.active {
          color: #e53238 !important;
          font-weight: 600;
          background-color: transparent !important;
        }

        @media (max-width: 767px) {
          .dropdown-menu.show {
            min-height: auto !important;
          }
        }
      `}</style>

      <Container
        className={`p-0 position-fixed z-index-100 m-0 w-100 header-container ${scrolled ? "header-scrolled" : ""
          } ${pathname === "/our-team" ? "bg-white" : ""}`}
        fluid
      >
        <Container className="w-80">
          <nav className="navbar bg-color z-index-100">
            <div className="container-fluid">
              <Link className="navbar-brand" href="/welcome">
                <Image
                  src="/images/ivista_logo.svg"
                  width={200}
                  height={40}
                  className="img-fluid z-index-100"
                  alt="logo"
                />
              </Link>
              <Button
                onMouseEnter={handleMouseEnter}
                className={
                  pathname.startsWith("/art") ||
                    pathname.startsWith("/service") ||
                    pathname === "/our-clients"
                    ? "btn btn-outline-custom"
                    : "btn btn-outline"
                }
                type="button"
                aria-label="Toggle navigation"
              >
                <FaBars size={27} />
              </Button>

            </div>
          </nav>
        </Container>

        <Offcanvas
          show={show}
          placement="end"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Offcanvas.Header closeButton onClick={handleMouseLeave} />
          <Offcanvas.Body>
            <Row className="d-flex flex-column justify-content-between h-100 z-index-100">
              <Col>
                <Container className="text-center">
                  <Link className="navbar-brand d-flex justify-content-center" href="/welcome">
                    <Image
                      src="/images/ivista_logo.svg"
                      width="200"
                      height={100}
                      alt=""
                      className="d-lg-none d-flex text-center"
                    />
                  </Link>
                </Container>
                <ul className="navbar-nav text-center flex-grow-1 pe-2">
                  <NavDropdown title="Services" id="navbarScrollingDropdown" className="border-0">
                    <NavDropdown.Item href="/art/services" className="nav-overview">
                      Overview
                    </NavDropdown.Item>
                    {Object.entries(serviceMenuTitles).map(([path, label]) => (
                      <NavDropdown.Item
                        key={path}
                        href={path}
                        className={`nav-dropdown p-2 ${isActive(path)}`}
                      >
                        {label}
                      </NavDropdown.Item>
                    ))}
                  </NavDropdown>
                  <li className="divider-center"><hr className="m-divider" /></li>
                  <li className="nav-item">
                    <Link className={`nav-link ${isActive("/mastery/solutions")}`} href="/mastery/solutions">
                      Solutions
                    </Link>
                  </li>
                  <li className="divider-center"><hr className="m-divider" /></li>
                  <NavDropdown title="Industries" id="navbarScrollingDropdown" className="border-0">
                    <NavDropdown.Item href="/performance/industries" className="nav-overview">
                      Overview
                    </NavDropdown.Item>
                    {Object.entries(industryMenuTitles).map(([path, label]) => (
                      <NavDropdown.Item
                        key={path}
                        href={path}
                        className={`nav-dropdown p-2 ${isActive(path)}`}
                      >
                        {label}
                      </NavDropdown.Item>
                    ))}
                  </NavDropdown>
                  <li className="divider-center"><hr className="m-divider" /></li>
                  <li className="nav-item">
                    <Link className={`nav-link ${isActive("/case-studies")}`} href="/case-studies">
                      Case Studies
                    </Link>
                  </li>
                  <li className="divider-center"><hr className="m-divider" /></li>
                  <li className="nav-item">
                    <Link className={`nav-link ${isActive("/blogs")}`} href="/blogs">
                      Blogs
                    </Link>
                  </li>
                  <li className="divider-center"><hr className="m-divider" /></li>
                  <NavDropdown title="Company" id="navbarScrollingDropdown" className="custom-nav-company">
                    {Object.entries(companyMenuTitles).map(([path, label]) => (
                      <NavDropdown.Item
                        key={path}
                        href={path}
                        className={`nav-dropdown px-2 ${isActive(path)}`}
                      >
                        {label}
                      </NavDropdown.Item>
                    ))}
                  </NavDropdown>
                  <li className="divider-center"><hr className="m-divider" /></li>
                  <li className="nav-item">
                    <Link className={`nav-link ${isActive("/contact-us")}`} href="/contact-us">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </Col>
            </Row>
          </Offcanvas.Body>
          <Col className="d-flex flex-column justify-content-end z-index-100 pb-3">
            <div className="d-flex flex-row justify-content-center align-items-center">
              <div>Follow Us:</div>
              <div className="d-flex align-items-center justify-content-start gap-1">
                <Link href="https://www.linkedin.com/company/ivistawebsolutions/mycompany/" target="_blank">
                  <Image src="/images/linkerin_icon.svg" width={43} height={43} className="social" alt="" />
                </Link>
                <Link href="https://www.instagram.com/ivistazecomservices/" target="_blank">
                  <Image src="/images/insta_icon.svg" width={44} height={44} className="social" alt="" />
                </Link>
                <Link href="https://www.facebook.com/people/IVistaz-Ecom-Services/61564957311627/" target="_blank">
                  <Image src="/images/facebook_icon.svg" width={30} height={30} className="social" alt="" />
                </Link>
                <Link href="https://x.com/ivistazecom" target="_blank">
                  <Image src="/images/x_icon.svg" width={44} height={44} className="social" alt="" />
                </Link>
              </div>
            </div>
          </Col>
        </Offcanvas>
      </Container>
    </>
  );
}

export default HeaderBlackNew;

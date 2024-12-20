"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
import { Col, Container, Row } from "react-bootstrap";
import { useState } from "react";
import {
  faChevronLeft,
  faChevronRight,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faYoutube,
  faSquareInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import NavDropdown from "react-bootstrap/NavDropdown";
import Link from "next/link";
export default function Links() {
  const [menuVisible, setMenuVisible] = useState(false);

  const openMenu = () => {
    setMenuVisible(true);
  };

  const closeMenu = () => {
    setMenuVisible(false);
  };

  return (
    <section className="links d-flex  justify-content-center align-items-center ">
      <Container>
        <Row>
          <Col className="text-start">
            <FontAwesomeIcon
              className="fs-5"
              icon={faBarsStaggered}
              onClick={openMenu}
            />

            <section
              className={`menuheader ${menuVisible ? "visible" : "close"}`}
            >
              <div className="menu-details">
                <div className="head-back" onClick={closeMenu}>
                  <h4 className="pt-3 px-3 fw-bold">
                    <FontAwesomeIcon className="fs-0 px-3 " icon={faChevronLeft} />
                    back
                  </h4>
                  <hr />
                </div>
                <div className="links">
                  <ul className="list-unstyled px-3 app-links">
                    <li>
                      <Link href="/">
                        Home
                        <FontAwesomeIcon
                          className="fs-0"
                          icon={faChevronRight}
                        />
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        Feature
                        <FontAwesomeIcon
                          className="fs-0"
                          icon={faChevronRight}
                        />
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        Shop
                        <FontAwesomeIcon
                          className="fs-0"
                          icon={faChevronRight}
                        />
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        product
                        <FontAwesomeIcon
                          className="fs-0"
                          icon={faChevronRight}
                        />
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        pages
                        <FontAwesomeIcon
                          className="fs-0"
                          icon={faChevronRight}
                        />
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        blog
                        <FontAwesomeIcon
                          className="fs-0"
                          icon={faChevronRight}
                        />
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="social-icons">
                  <ul className=" d-flex list-unstyled justify-content-start align-items-center  px-4 ">
                    <li>
                      <Link href="/">
                        <FontAwesomeIcon icon={faFacebookF} />
                      </Link>
                    </li>
                    <li>
                      <Link href="https://www.youtube.com/@StylerStore" target="_blank">
                      <FontAwesomeIcon icon={faYoutube} />
                      </Link>
                    </li>
                    <li>
                      <Link href="https://www.instagram.com/stylerstore.eg/profilecard/?igsh=MTZsOXcyajgwZXJ0Zg==" target="_blank">
                        <FontAwesomeIcon icon={faSquareInstagram} />
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <FontAwesomeIcon icon={faTiktok} />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </Col>
          <Col>
            <div className="auth">
              <div className="my-acc d-flex justify-content-end align-items-center">
                <NavDropdown
                  id="nav-dropdown-dark-example"
                  title="My Account"
                  menuVariant="dark"
                  align="end"
                  className="text-capitalize"
                >
                  <Link href="/register" className="ms-2 ">
                    register
                  </Link>
                  <br />
                  <Link href="/login" className="ms-2 ">
                    login
                  </Link>

                  <NavDropdown.Divider />
                  <Link href="/my-orders" className="ms-2 ">
                    my orders
                  </Link>
                </NavDropdown>
                <div className="icon-user">
                  <FontAwesomeIcon icon={faUser} className="ms-2" />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

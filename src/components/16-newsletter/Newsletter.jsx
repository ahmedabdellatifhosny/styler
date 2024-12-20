"use client";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGoogle,
  faXTwitter,
  faSquareInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

export default function Newsletter() {
  return (
    <section className="newsletter text-center">
      <Container>
      <Row>
        <Col md={4}>
          <div className="social-icons">
            <div className="icons">
              <h3 className="fw-bold mb-4 text-uppercase"> styler store</h3>

              <ul className=" d-flex list-unstyled justify-content-center align-items-center gap-4 fs-3">
                <li>
                  <FontAwesomeIcon icon={faFacebookF} />
                </li>
                <li>
                  <FontAwesomeIcon icon={faGoogle} />
                </li>
                <li>
                  <FontAwesomeIcon icon={faXTwitter} />
                </li>
                <li>
                  <FontAwesomeIcon icon={faSquareInstagram} />
                </li>
                <li>
                  <FontAwesomeIcon icon={faTiktok} />
                </li>
              </ul>
            </div>
          </div>
        </Col>
        <Col md={4}>
          <div className="newsletter-info">
            <div className="info">
              <h3 className="fw-bold text-uppercase"> news letter</h3>
              <input className="form-control mb-3 text-center" type="text" name="newsletter" placeholder="Enter your email" />
              <button className="btn btn-dark  ">subscribe</button>
            </div>
          </div>
        </Col>
        <Col md={4}>
          <div className="store-information">
            <div className="store">
              <h3 className="fw-bold text-uppercase"> store information</h3>
              <ul className="list-unstyled">
                <li>Multikart Demo Store, Demo store India 345-659</li>
                <li>Call Us: 123-456-7898</li>
                <li>Email Us: Support@Multikart.com</li>
                <li>Fax: 123456</li>
              </ul>
            </div>
          </div>
        </Col>
      </Row>
      </Container>
    </section>
  );
}

"use client";
import Footer from "components/1-layout/Footer";
import Header from "components/1-layout/Header";
import { Col, Container, Row } from "react-bootstrap";
import Breadcrumb from "react-bootstrap/esm/Breadcrumb";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faFax,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

export default function page() {
  return (
    <>
      <Header />
      <section className="contact-us">
        <div className="contact-header text-center">
          <h2 className="text-capitalize">contact us</h2>
          <Breadcrumb>
            <Breadcrumb.Item href="/" active>
              Home
            </Breadcrumb.Item>
            <Breadcrumb.Item href="#">contact us</Breadcrumb.Item>
          </Breadcrumb>
        </div>

        <div className="get-in-touch">
          <Container>
            <Row>
              <Col md={6}>
                <h2>Get In Touch</h2>
                <p>
                  Were here to help! Reach out to us with any questions,
                  feedback, or inquiries, and well get back to you as soon as
                  possible.
                </p>
              </Col>
              <Col md={6}>
                <div className="contact-form">
                  <Form className="my-5 text-capitalize">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Full Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter name" />
                    </Form.Group>
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>email</Form.Label>
                          <Form.Control
                            type="email"
                            placeholder="Enter email"
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Phone</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter your Phone"
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Form.Group className="mb-3">
                      <Form.Label>subject</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your subject"
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Label>write your message </Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="write your message "
                      />
                    </Form.Group>
                    <Button
                      variant="primary"
                      type="submit"
                      className="text-capitalize"
                    >
                      send your message
                    </Button>
                  </Form>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="contact-info">
          <Container>
            <Row>
              <Col md={3}>
                <div className="contact-box d-flex  align-items-center ">
                  <div className="contact-icon">
                    <FontAwesomeIcon icon={faPhone} />
                  </div>
                  <div className="contact-details ms-4">
                    <h6>contact us</h6>
                    <p>+91 123 - 456 - 7890</p>
                  </div>
                </div>
              </Col>
              <Col md={3}>
                <div className="contact-box d-flex  align-items-center ">
                  <div className="contact-icon">
                    <FontAwesomeIcon icon={faLocationDot} />
                  </div>
                  <div className="contact-details ms-4">
                    <h6>Address</h6>
                    <p>ABC Complex,Near xyz, New York</p>
                  </div>
                </div>
              </Col>
              <Col md={3}>
                <div className="contact-box d-flex  align-items-center ">
                  <div className="contact-icon">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </div>
                  <div className="contact-details ms-4">
                    <h6>Email</h6>
                    <p>support@multikart.com</p>
                  </div>
                </div>
              </Col>
              <Col md={3}>
                <div className="contact-box d-flex  align-items-center ">
                  <div className="contact-icon">
                    <FontAwesomeIcon icon={faFax} />
                  </div>
                  <div className="contact-details ms-4">
                    <h6>Fax</h6>
                    <p>support@multikart.com</p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      <Footer />
    </>
  );
}

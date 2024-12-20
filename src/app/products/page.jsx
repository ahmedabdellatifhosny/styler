// @ts-nocheck
"use client";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "components/1-layout/Footer";
import Header from "components/1-layout/Header";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import Form from "react-bootstrap/Form";
import Accordion from "react-bootstrap/Accordion";
export default function page() {
  return (
    <>
      <Header />
      <section className="products">
        <Container>
          <Row>
            <Col md={3}>
              <div className="filters">
                <div className="categories-filter">
                  <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Categories</Accordion.Header>
                      <Accordion.Body>
                        <Form>
                          {["checkbox"].map((type) => (
                            <div key={`default-${type}`} className="mb-3">
                              <Form.Check // prettier-ignore
                                type={type}
                                id={`default-${type}`}
                                label={`default ${type}`}
                              />
                            </div>
                          ))}
                          {["checkbox"].map((type) => (
                            <div key={`default-${type}`} className="mb-3">
                              <Form.Check // prettier-ignore
                                type={type}
                                id={`default-${type}`}
                                label={`default ${type}`}
                              />
                            </div>
                          ))}
                          {["checkbox"].map((type) => (
                            <div key={`default-${type}`} className="mb-3">
                              <Form.Check // prettier-ignore
                                type={type}
                                id={`default-${type}`}
                                label={`default ${type}`}
                              />
                            </div>
                          ))}
                          {["checkbox"].map((type) => (
                            <div key={`default-${type}`} className="mb-3">
                              <Form.Check // prettier-ignore
                                type={type}
                                id={`default-${type}`}
                                label={`default ${type}`}
                              />
                            </div>
                          ))}
                          {["checkbox"].map((type) => (
                            <div key={`default-${type}`} className="mb-3">
                              <Form.Check // prettier-ignore
                                type={type}
                                id={`default-${type}`}
                                label={`default ${type}`}
                              />
                            </div>
                          ))}
                          {["checkbox"].map((type) => (
                            <div key={`default-${type}`} className="mb-3">
                              <Form.Check // prettier-ignore
                                type={type}
                                id={`default-${type}`}
                                label={`default ${type}`}
                              />
                            </div>
                          ))}
                        </Form>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>

                <div className="brands-filter">
                  <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>brands</Accordion.Header>
                      <Accordion.Body>
                        <Form>
                          {["checkbox"].map((type) => (
                            <div key={`default-${type}`} className="mb-3">
                              <Form.Check // prettier-ignore
                                type={type}
                                id={`default-${type}`}
                                label={`default ${type}`}
                              />
                            </div>
                          ))}
                          {["checkbox"].map((type) => (
                            <div key={`default-${type}`} className="mb-3">
                              <Form.Check // prettier-ignore
                                type={type}
                                id={`default-${type}`}
                                label={`default ${type}`}
                              />
                            </div>
                          ))}
                          {["checkbox"].map((type) => (
                            <div key={`default-${type}`} className="mb-3">
                              <Form.Check // prettier-ignore
                                type={type}
                                id={`default-${type}`}
                                label={`default ${type}`}
                              />
                            </div>
                          ))}
                          {["checkbox"].map((type) => (
                            <div key={`default-${type}`} className="mb-3">
                              <Form.Check // prettier-ignore
                                type={type}
                                id={`default-${type}`}
                                label={`default ${type}`}
                              />
                            </div>
                          ))}
                          {["checkbox"].map((type) => (
                            <div key={`default-${type}`} className="mb-3">
                              <Form.Check // prettier-ignore
                                type={type}
                                id={`default-${type}`}
                                label={`default ${type}`}
                              />
                            </div>
                          ))}
                          {["checkbox"].map((type) => (
                            <div key={`default-${type}`} className="mb-3">
                              <Form.Check // prettier-ignore
                                type={type}
                                id={`default-${type}`}
                                label={`default ${type}`}
                              />
                            </div>
                          ))}
                        </Form>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>

                <div className="colours-filter">
                  <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>colours</Accordion.Header>
                      <Accordion.Body>
                        <Form>
                          {["checkbox"].map((type) => (
                            <div key={`default-${type}`} className="mb-3">
                              <Form.Check // prettier-ignore
                                type={type}
                                id={`default-${type}`}
                                label={`default ${type}`}
                              />
                            </div>
                          ))}
                          {["checkbox"].map((type) => (
                            <div key={`default-${type}`} className="mb-3">
                              <Form.Check // prettier-ignore
                                type={type}
                                id={`default-${type}`}
                                label={`default ${type}`}
                              />
                            </div>
                          ))}
                          {["checkbox"].map((type) => (
                            <div key={`default-${type}`} className="mb-3">
                              <Form.Check // prettier-ignore
                                type={type}
                                id={`default-${type}`}
                                label={`default ${type}`}
                              />
                            </div>
                          ))}
                          {["checkbox"].map((type) => (
                            <div key={`default-${type}`} className="mb-3">
                              <Form.Check // prettier-ignore
                                type={type}
                                id={`default-${type}`}
                                label={`default ${type}`}
                              />
                            </div>
                          ))}
                          {["checkbox"].map((type) => (
                            <div key={`default-${type}`} className="mb-3">
                              <Form.Check // prettier-ignore
                                type={type}
                                id={`default-${type}`}
                                label={`default ${type}`}
                              />
                            </div>
                          ))}
                          {["checkbox"].map((type) => (
                            <div key={`default-${type}`} className="mb-3">
                              <Form.Check // prettier-ignore
                                type={type}
                                id={`default-${type}`}
                                label={`default ${type}`}
                              />
                            </div>
                          ))}
                        </Form>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>

                <div className="ratings-filter">
                  <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>rating</Accordion.Header>
                      <Accordion.Body>
                        <Form>
                          {["checkbox"].map((type) => (
                            <div key={`default-${type}`} className="mb-3">
                              <Form.Check // prettier-ignore
                                type={type}
                                id={`default-${type}`}
                                label={`default ${type}`}
                              />
                            </div>
                          ))}
                          {["checkbox"].map((type) => (
                            <div key={`default-${type}`} className="mb-3">
                              <Form.Check // prettier-ignore
                                type={type}
                                id={`default-${type}`}
                                label={`default ${type}`}
                              />
                            </div>
                          ))}
                          {["checkbox"].map((type) => (
                            <div key={`default-${type}`} className="mb-3">
                              <Form.Check // prettier-ignore
                                type={type}
                                id={`default-${type}`}
                                label={`default ${type}`}
                              />
                            </div>
                          ))}
                          {["checkbox"].map((type) => (
                            <div key={`default-${type}`} className="mb-3">
                              <Form.Check // prettier-ignore
                                type={type}
                                id={`default-${type}`}
                                label={`default ${type}`}
                              />
                            </div>
                          ))}
                          {["checkbox"].map((type) => (
                            <div key={`default-${type}`} className="mb-3">
                              <Form.Check // prettier-ignore
                                type={type}
                                id={`default-${type}`}
                                label={`default ${type}`}
                              />
                            </div>
                          ))}
                          {["checkbox"].map((type) => (
                            <div key={`default-${type}`} className="mb-3">
                              <Form.Check // prettier-ignore
                                type={type}
                                id={`default-${type}`}
                                label={`default ${type}`}
                              />
                            </div>
                          ))}
                        </Form>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </div>
            </Col>
            <Col md={9}>
              <div className="products my-3">
                <Row>
                  <Col md={4}>
                    <div className="pro-box">
                      <Image
                        src="/assets/images/special-products/2.png"
                        width={204}
                        height={147}
                        alt="sports shoes"
                      />
                      <h5 className="product-title text-start">
                        Nimbus Sneakers
                      </h5>
                      <div className="rating text-start">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <span>(10)</span>
                      </div>
                      <div className="price-discount">
                        <div className="price">$22.10</div>
                        <div className="discount">
                          <span className="price-discount">$22.10</span>
                          <span className="off">5% off</span>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="pro-box">
                      <Image
                        src="/assets/images/special-products/2.png"
                        width={204}
                        height={147}
                        alt="sports shoes"
                      />
                      <h5 className="product-title text-start">
                        Nimbus Sneakers
                      </h5>
                      <div className="rating text-start">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <span>(10)</span>
                      </div>
                      <div className="price-discount">
                        <div className="price">$22.10</div>
                        <div className="discount">
                          <span className="price-discount">$22.10</span>
                          <span className="off">5% off</span>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="pro-box">
                      <Image
                        src="/assets/images/special-products/3.png"
                        width={204}
                        height={147}
                        alt="sports shoes"
                      />
                      <h5 className="product-title text-start">
                        Nimbus Sneakers
                      </h5>
                      <div className="rating text-start">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <span>(10)</span>
                      </div>
                      <div className="price-discount">
                        <div className="price">$22.10</div>
                        <div className="discount">
                          <span className="price-discount">$22.10</span>
                          <span className="off">5% off</span>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="pro-box">
                      <Image
                        src="/assets/images/special-products/4.png"
                        width={204}
                        height={147}
                        alt="sports shoes"
                      />
                      <h5 className="product-title text-start">
                        Nimbus Sneakers
                      </h5>
                      <div className="rating text-start">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <span>(10)</span>
                      </div>
                      <div className="price-discount">
                        <div className="price">$22.10</div>
                        <div className="discount">
                          <span className="price-discount">$22.10</span>
                          <span className="off">5% off</span>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="pro-box">
                      <Image
                        src="/assets/images/special-products/1.png"
                        width={204}
                        height={147}
                        alt="sports shoes"
                      />
                      <h5 className="product-title text-start">
                        Nimbus Sneakers
                      </h5>
                      <div className="rating text-start">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <span>(10)</span>
                      </div>
                      <div className="price-discount">
                        <div className="price">$22.10</div>
                        <div className="discount">
                          <span className="price-discount">$22.10</span>
                          <span className="off">5% off</span>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="pro-box">
                      <Image
                        src="/assets/images/special-products/2.png"
                        width={204}
                        height={147}
                        alt="sports shoes"
                      />
                      <h5 className="product-title text-start">
                        Nimbus Sneakers
                      </h5>
                      <div className="rating text-start">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <span>(10)</span>
                      </div>
                      <div className="price-discount">
                        <div className="price">$22.10</div>
                        <div className="discount">
                          <span className="price-discount">$22.10</span>
                          <span className="off">5% off</span>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="pro-box">
                      <Image
                        src="/assets/images/special-products/3.png"
                        width={204}
                        height={147}
                        alt="sports shoes"
                      />
                      <h5 className="product-title text-start">
                        Nimbus Sneakers
                      </h5>
                      <div className="rating text-start">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <span>(10)</span>
                      </div>
                      <div className="price-discount">
                        <div className="price">$22.10</div>
                        <div className="discount">
                          <span className="price-discount">$22.10</span>
                          <span className="off">5% off</span>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="pro-box">
                      <Image
                        src="/assets/images/special-products/4.png"
                        width={204}
                        height={147}
                        alt="sports shoes"
                      />
                      <h5 className="product-title text-start">
                        Nimbus Sneakers
                      </h5>
                      <div className="rating text-start">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <span>(10)</span>
                      </div>
                      <div className="price-discount">
                        <div className="price">$22.10</div>
                        <div className="discount">
                          <span className="price-discount">$22.10</span>
                          <span className="off">5% off</span>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="pro-box">
                      <Image
                        src="/assets/images/special-products/1.png"
                        width={204}
                        height={147}
                        alt="sports shoes"
                      />
                      <h5 className="product-title text-start">
                        Nimbus Sneakers
                      </h5>
                      <div className="rating text-start">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <span>(10)</span>
                      </div>
                      <div className="price-discount">
                        <div className="price">$22.10</div>
                        <div className="discount">
                          <span className="price-discount">$22.10</span>
                          <span className="off">5% off</span>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
}

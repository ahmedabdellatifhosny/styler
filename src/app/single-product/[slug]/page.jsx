// @ts-nocheck
"use client";
import Image from "next/image";
import Header from "components/1-layout/Header";
import Footer from "components/1-layout/Footer";
import { Breadcrumb, Col, Container, Row } from "react-bootstrap";
import { useState, useEffect, useRef } from "react";
import Accordion from "react-bootstrap/Accordion";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import ProgressBar from "react-bootstrap/ProgressBar";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { useParams } from "next/navigation";

export default function Page() {
  const params = useParams();
  const { slug } = params;

  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const sliderRef1 = useRef(null);
  const sliderRef2 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1.current);
    setNav2(sliderRef2.current);
  }, []);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Header />
      <section className="single-product">
        <div className="single-product-header text-center">
          <h2 className="text-capitalize">Converse Shoes</h2>
          <Breadcrumb>
            <Breadcrumb.Item href="#" active>
              Home
            </Breadcrumb.Item>
            <Breadcrumb.Item href="#">Product</Breadcrumb.Item>
            <Breadcrumb.Item href="#">Converse Shoes</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="product-details">
          <Container>
            <Row>
              <Col md={8}>
                <Row>
                  <Col>
                    <div className="slider">
                      <div className="slider-container">
                        <Slider
                          asNavFor={nav2}
                          ref={sliderRef1}
                          arrows={true}
                          dots={false}
                        >
                          <div className="big-product-image">
                            <Image
                              src="/assets/images/special-products/1.png"
                              alt="prduct-image-1"
                              fill
                            />
                          </div>

                          <div className="big-product-image">
                            <Image
                              src="/assets/images/special-products/2.png"
                              alt="prduct-image-1"
                              fill
                            />
                          </div>
                          <div className="big-product-image">
                            <Image
                              src="/assets/images/special-products/3.png"
                              alt="prduct-image-1"
                              fill
                            />
                          </div>
                          <div className="big-product-image">
                            <Image
                              src="/assets/images/special-products/4.png"
                              alt="prduct-image-1"
                              fill
                            />
                          </div>
                        </Slider>
                        <h6 className="d-none">Second Slider</h6>
                        <Slider
                          asNavFor={nav1}
                          ref={sliderRef2}
                          slidesToShow={3}
                          swipeToSlide={true}
                          focusOnSelect={true}
                          arrows={false}
                          dots={false}
                        >
                          <div className="product-image">
                            <Image
                              src="/assets/images/special-products/1.png"
                              alt="prduct-image-1"
                              fill
                            />
                          </div>

                          <div className="product-image">
                            <Image
                              src="/assets/images/special-products/2.png"
                              alt="prduct-image-1"
                              fill
                            />
                          </div>
                          <div className="product-image">
                            <Image
                              src="/assets/images/special-products/3.png"
                              alt="prduct-image-1"
                              fill
                            />
                          </div>
                          <div className="product-image">
                            <Image
                              src="/assets/images/special-products/4.png"
                              alt="prduct-image-1"
                              fill
                            />
                          </div>
                        </Slider>
                      </div>
                    </div>
                  </Col>
                  <Col>
                    <div className="info">
                      <h2>Gym Coords Set (Brown)</h2>
                      <div className="review-count">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />|
                        <span>20 reviews</span>
                      </div>
                      <h3>mbr : $15.00</h3>
                      <span>Inclusive all the text</span>

                      <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                          <Accordion.Header>
                            product description
                          </Accordion.Header>
                          <Accordion.Body>
                            <p>
                              Gym Coords Set offers a complete workout ensemble
                              for the modern fitness enthusiast. This
                              coordinated set includes everything needed for a
                              stylish and functional gym session, from
                              moisture-wicking tops to supportive leggings,
                              ensuring both comfort and performance during
                              workouts.
                            </p>
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                          <Accordion.Header>information</Accordion.Header>
                          <Accordion.Body>
                            <h4>product Info</h4>
                            <Row>
                              <Col>
                                <ul>
                                  <li>SKU: SP18 (COPY)</li>
                                  <li>Weight: 150 Gms</li>
                                  <li>Quantity: 40 Items Left</li>
                                </ul>
                              </Col>
                              <Col>
                                <ul>
                                  <li>Unit: 1 Item</li>
                                  <li>Stock Status: In stock</li>
                                </ul>
                              </Col>
                            </Row>
                            <div className="delivery-details">
                              <ul className="list-unstyled">
                                <li>
                                  Your order is likely to reach you within 7
                                  days
                                </li>
                                <li> Hassle free returns within 7 Days.</li>
                              </ul>
                              <div className="payment-method">
                                Guaranteed Safe Checkout
                              </div>

                              <div className="secure-checkout">
                                Secure Checkout
                              </div>
                            </div>
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col md={4}>
                <div className="colour">
                  <h4 className="text-center my-3 ">colour</h4>
                  <Row>
                    <Col>
                      <div className="colour-image active">
                        <Image
                          src="/assets/images/special-products/1.png"
                          alt="prduct-image-1"
                          fill
                          className="image-thu"
                        />
                      </div>
                    </Col>
                    <Col>
                      <div className="colour-image">
                        <Image
                          src="/assets/images/special-products/2.png"
                          alt="prduct-image-1"
                          fill
                        />
                      </div>
                    </Col>
                    <Col>
                      <div className="colour-image">
                        <Image
                          src="/assets/images/special-products/3.png"
                          alt="prduct-image-1"
                          fill
                        />
                      </div>
                    </Col>
                  </Row>
                </div>

                <div className="counter d-flex justify-content-center align-items-center gap-1">
                  <button>
                    <FontAwesomeIcon icon={faChevronLeft} />
                  </button>
                  <div className="number">
                    <span>1</span>
                  </div>
                  <button>
                    <FontAwesomeIcon icon={faChevronRight} />
                  </button>
                </div>

                <div className="stock d-flex justify-content-center align-items-center gap-3">
                  <Button variant="primary">out of stock</Button>
                  <Button variant="primary">buy now</Button>
                </div>

                <div className="hurry-up my-4">
                  <h6 className="text-center mb-4">
                    Please Hurry Only 10 Left In Stock
                  </h6>
                  <div className="progress-bar">
                    <ProgressBar now={90} />
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="tabs">
          <Container>
            <Tabs
              defaultActiveKey="description"
              id="uncontrolled-tab-example"
              className="mb-3"
            >
              <Tab eventKey="description" title="Description" className="desc">
                <p>
                  The Model is wearing a white blouse from our stylists
                  collection, see the image for a mock-up of what the actual
                  blouse would look like.it has text written on it in a black
                  cursive language which looks great on a white color.
                </p>
                <h5>fabric:</h5>
                <p>
                  Art silk is manufactured by synthetic fibres like rayon. Its
                  light in weight and is soft on the skin for comfort in
                  summers.Art silk is manufactured by synthetic fibres like
                  rayon. Its light in weight and is soft on the skin for comfort
                  in summers.
                </p>
                <h5>size & fit:</h5>
                <p>The model (height 5,8) is wearing a size S</p>
                <h5>Material & Care:</h5>
                <ul className="list-unstyled">
                  <li>Top fabric: pure cotton</li>
                  <li>Bottom fabric: pure cotton</li>
                  <li>Hand-wash</li>
                </ul>
              </Tab>
              <Tab eventKey="review" title="Review" className="review">
                <Row>
                  <Col md={6}>
                    <div className="review-content">
                      <div className="review-header d-flex align-items-center">
                        <div className="rate me-3">
                          <span className="fs-4 fw-bold">4.00</span>
                        </div>
                        <div className="review-count">
                          <FontAwesomeIcon icon={faStar} />
                          <FontAwesomeIcon icon={faStar} />
                          <FontAwesomeIcon icon={faStar} />
                          <FontAwesomeIcon icon={faStar} />
                          <FontAwesomeIcon icon={faStar} />
                          <h6>Based on 25 Rating</h6>
                        </div>
                      </div>

                      <div className="review-product">
                        <h4>Review this product</h4>
                        <p>Let other customers know what you think</p>
                        <ul className="list-unstyled">
                          <li>
                            <div className="prog-line d-flex justify-content-between align-items-center">
                              <div className="rate-number">
                                <span>5</span>
                                <FontAwesomeIcon icon={faStar} />
                              </div>
                              <ProgressBar variant="success" now={90} />
                              <div>
                                <span>9</span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="prog-line d-flex justify-content-between align-items-center">
                              <div className="rate-number">
                                <span>4</span>
                                <FontAwesomeIcon icon={faStar} />
                              </div>

                              <ProgressBar variant="success" now={70} />

                              <div>
                                <span>7</span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="prog-line d-flex justify-content-between align-items-center">
                              <div className="rate-number">
                                <span>3</span>
                                <FontAwesomeIcon icon={faStar} />
                              </div>

                              <ProgressBar variant="success" now={50} />

                              <div>
                                <span>5</span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="prog-line d-flex justify-content-between align-items-center">
                              <div className="rate-number">
                                <span>2</span>
                                <FontAwesomeIcon icon={faStar} />
                              </div>

                              <ProgressBar variant="warning" now={30} />

                              <div>
                                <span>3</span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="prog-line d-flex justify-content-between align-items-center">
                              <div className="rate-number">
                                <span>1</span>
                                <FontAwesomeIcon icon={faStar} />
                              </div>
                              <ProgressBar variant="danger" now={10} />
                              <div>
                                <span>1</span>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="submit-review ">
                        <Button
                          onClick={handleShow}
                          className="text-capitalize fw-bold"
                          variant="primary"
                        >
                          write a review
                        </Button>

                        <div className="modal-review">
                          <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                              <Modal.Title>Write A Review</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                              <Container>
                                <div className="product-modal-review d-flex align-items-center ">
                                  <div className="product-review">
                                    <Image
                                      src="/assets/images/special-products/1.png"
                                      alt="review"
                                      fill
                                    />
                                  </div>
                                  <div className="info-rate ms- text-capitalize">
                                    <h4>Wide Leg Shorts</h4>
                                    <div className="rate">
                                      <span className="me-3">rating</span>
                                      <FontAwesomeIcon icon={faStar} />
                                      <FontAwesomeIcon icon={faStar} />
                                      <FontAwesomeIcon icon={faStar} />
                                      <FontAwesomeIcon icon={faStar} />
                                      <FontAwesomeIcon icon={faStar} />
                                    </div>
                                  </div>
                                </div>

                                <div className="single-info-rate my-3 text-capitalize">
                                  <div className="rate">
                                    <span className="me-3">rating</span>
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                  </div>
                                </div>

                                <div className="review-content">
                                  <h4>Review Content</h4>
                                  <FloatingLabel
                                    controlId="floatingTextarea"
                                    label="write your review"
                                    className="mb-3"
                                  >
                                    <Form.Control
                                      as="textarea"
                                      placeholder="Leave a comment here"
                                    />
                                  </FloatingLabel>
                                </div>
                              </Container>
                            </Modal.Body>
                            <Modal.Footer>
                              <Button variant="secondary" onClick={handleClose}>
                                cancel
                              </Button>
                              <Button variant="primary" onClick={handleClose}>
                                submit
                              </Button>
                            </Modal.Footer>
                          </Modal>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="rating-box-container my-5">
                      <div className="rating-box ">
                        <Row>
                          <Col md={2}>
                            <div className="capital-letter d-flex justify-content-center align-items-center">
                              <p>J</p>
                            </div>
                          </Col>
                          <Col md={10}>
                            <div className="rate-header d-flex justify-content-between ">
                              <div className="name">
                                <span className="me-3">John Due</span>
                                <span>10 Aug 2024 11:05:AM</span>
                              </div>

                              <div className="rate">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                              </div>
                            </div>

                            <div className="rating-cont">
                              <p>
                                Wow! This fashion product exceeded all my
                                expectations! From the moment I opened the
                                package, I could tell it was something special.
                                The quality of the materials is outstanding.
                              </p>
                            </div>
                          </Col>
                        </Row>
                      </div>

                      <div className="rating-box ">
                        <Row>
                          <Col md={2}>
                            <div className="capital-letter d-flex justify-content-center align-items-center">
                              <p>J</p>
                            </div>
                          </Col>
                          <Col md={10}>
                            <div className="rate-header d-flex justify-content-between ">
                              <div className="name">
                                <span className="me-3">John Due</span>
                                <span>10 Aug 2024 11:05:AM</span>
                              </div>

                              <div className="rate">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                              </div>
                            </div>

                            <div className="rating-cont">
                              <p>
                                Wow! This fashion product exceeded all my
                                expectations! From the moment I opened the
                                package, I could tell it was something special.
                                The quality of the materials is outstanding.
                              </p>
                            </div>
                          </Col>
                        </Row>
                      </div>

                      <div className="rating-box ">
                        <Row>
                          <Col md={2}>
                            <div className="capital-letter d-flex justify-content-center align-items-center">
                              <p>J</p>
                            </div>
                          </Col>
                          <Col md={10}>
                            <div className="rate-header d-flex justify-content-between ">
                              <div className="name">
                                <span className="me-3">John Due</span>
                                <span>10 Aug 2024 11:05:AM</span>
                              </div>

                              <div className="rate">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                              </div>
                            </div>

                            <div className="rating-cont">
                              <p>
                                Wow! This fashion product exceeded all my
                                expectations! From the moment I opened the
                                package, I could tell it was something special.
                                The quality of the materials is outstanding.
                              </p>
                            </div>
                          </Col>
                        </Row>
                      </div>

                      <div className="rating-box ">
                        <Row>
                          <Col md={2}>
                            <div className="capital-letter d-flex justify-content-center align-items-center">
                              <p>J</p>
                            </div>
                          </Col>
                          <Col md={10}>
                            <div className="rate-header d-flex justify-content-between ">
                              <div className="name">
                                <span className="me-3">John Due</span>
                                <span>10 Aug 2024 11:05:AM</span>
                              </div>

                              <div className="rate">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                              </div>
                            </div>

                            <div className="rating-cont">
                              <p>
                                Wow! This fashion product exceeded all my
                                expectations! From the moment I opened the
                                package, I could tell it was something special.
                                The quality of the materials is outstanding.
                              </p>
                            </div>
                          </Col>
                        </Row>
                      </div>

                      <div className="rating-box ">
                        <Row>
                          <Col md={2}>
                            <div className="capital-letter d-flex justify-content-center align-items-center">
                              <p>J</p>
                            </div>
                          </Col>
                          <Col md={10}>
                            <div className="rate-header d-flex justify-content-between ">
                              <div className="name">
                                <span className="me-3">John Due</span>
                                <span>10 Aug 2024 11:05:AM</span>
                              </div>

                              <div className="rate">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                              </div>
                            </div>

                            <div className="rating-cont">
                              <p>
                                Wow! This fashion product exceeded all my
                                expectations! From the moment I opened the
                                package, I could tell it was something special.
                                The quality of the materials is outstanding.
                              </p>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Tab>
            </Tabs>
            <hr />

            <div className="related-product text-capitalize">
              <h2>related product</h2>
              <Row>
                <Col md={3}>
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
                <Col md={3}>
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
                <Col md={3}>
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
                <Col md={3}>
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
              </Row>
            </div>
          </Container>
        </div>
      </section>
      <Footer />
    </>
  );
}

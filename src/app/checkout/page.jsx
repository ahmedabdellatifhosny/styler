"use client";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../../components/1-layout/Footer";
import Header from "../../components/1-layout/Header";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Button from "react-bootstrap/Button";
import Image from "next/image";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";

export default function Page() {


  const [showShippingAddress, setShowShippingAddress] = useState(false);
  const handleCloseShippingAddress = () => setShowShippingAddress(false);
  const handleShowShippingAddress = () => setShowShippingAddress(true);

  const [showBillingAddress, setShowBillingAddress] = useState(false);

  const handleShowBillingAddress = () => setShowBillingAddress(true);
  const handleCloseBillingAddress = () => setShowBillingAddress(false);

  const [showBillingSummary, setShowBillingSummary] = useState(false);

  const handleShowBillingSummary = () => setShowBillingSummary(true);
  const handleCloseBillingSummary = () => setShowBillingSummary(false);

  return (
    <>
      <Header />
      <section className="checkout text-capitalize ">
        <div className="checkout-header text-center">
          <h2 className="text-capitalize">check out</h2>
          <Breadcrumb>
            <Breadcrumb.Item href="/" active>
              Home
            </Breadcrumb.Item>
            <Breadcrumb.Item href="#">check out</Breadcrumb.Item>
          </Breadcrumb>
        </div>

        <div className="checkout-details">
          <Container>
            <Row>
              <Col md={6}>
                <div className="checkout-forms">
                  <div className="shipping-label d-flex justify-content-between align-items-center">
                    <div className="label">
                      <h4>Shipping Address</h4>
                    </div>
                    <div className="add-new">
                      <span onClick={handleShowShippingAddress}>+ add new</span>

                      <Modal
                        show={showShippingAddress}
                        onHide={handleCloseShippingAddress}
                      >
                        <Modal.Header closeButton>
                          <Modal.Title>Shipping Address</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <div className="add-new">
                            <Form>
                              <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlInput1"
                              >
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                  type="text"
                                  placeholder="name@example.com"
                                />
                              </Form.Group>
                              <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlInput1"
                              >
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                  type="text"
                                  placeholder="name@example.com"
                                />
                              </Form.Group>
                              <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlInput1"
                              >
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                  type="text"
                                  placeholder="name@example.com"
                                />
                              </Form.Group>
                              <div className="selected-box">
                                <Row>
                                  <Col md={6}>
                                  
                                    <Form.Select aria-label="Default select example">
                                      <option>Open this select menu</option>
                                      <option value="1">One</option>
                                      <option value="2">Two</option>
                                      <option value="3">Three</option>
                                    </Form.Select>
                                  </Col>
                                  <Col md={6}>
                                  
                                    <Form.Select aria-label="Default select example">
                                      <option>Open this select menu</option>
                                      <option value="1">One</option>
                                      <option value="2">Two</option>
                                      <option value="3">Three</option>
                                    </Form.Select>
                                  </Col>
                                  <Col md={6}>
                                  
                                    <Form.Group
                                      className="mb-3"
                                      controlId="exampleForm.ControlInput1"
                                    >
                                      <Form.Label>Email address</Form.Label>
                                      <Form.Control
                                        type="text"
                                        placeholder="name@example.com"
                                      />
                                    </Form.Group>
                                  </Col>
                                  <Col md={6}>
                                  
                                    <Form.Group
                                      className="mb-3"
                                      controlId="exampleForm.ControlInput1"
                                    >
                                      <Form.Label>Email address</Form.Label>
                                      <Form.Control
                                        type="text"
                                        placeholder="name@example.com"
                                      />
                                    </Form.Group>
                                  </Col>
                                </Row>
                              </div>
                            </Form>
                          </div>
                        </Modal.Body>
                        <Modal.Footer>
                          <Button
                            variant="secondary"
                            onClick={handleCloseShippingAddress}
                          >
                            cancel
                          </Button>
                          <Button
                            variant="primary"
                            onClick={handleCloseShippingAddress}
                          >
                            submit
                          </Button>
                        </Modal.Footer>
                      </Modal>
                    </div>
                  </div>
                  <div className="shipping-address">
                    <Form>
                      {["radio"].map((type) => (
                        <div key={`inline-${type}`} className="mb-3">
                          <Row>
                            <Col md={6}>
                              <div className="new-home">
                                <Form.Check
                                  inline
                                  label=" new home"
                                  name="group1"
                                  // @ts-ignore
                                  type={type}
                                  id={`inline-${type}-1`}
                                />
                                <div className="home-details">
                                  <ul className="list-unstyled">
                                    <li>
                                      Address : 26, Starts Hollow Colony,Denver,
                                      Colorado, United States
                                    </li>
                                    <li>Pin Code : 80014</li>
                                    <li>Phone : +1 5551855359</li>
                                  </ul>
                                </div>
                              </div>
                            </Col>
                            <Col md={6}>
                              <div className="old-home">
                                <Form.Check
                                  inline
                                  label=" old home"
                                  name="group1"
                                  // @ts-ignore
                                  type={type}
                                  id={`inline-${type}-2`}
                                />
                                <div className="old-home-details">
                                  <ul className="list-unstyled">
                                    <li>
                                      Address : 26, Starts Hollow Colony,Denver,
                                      Colorado, United States
                                    </li>
                                    <li>Pin Code : 80014</li>
                                    <li>Phone : +1 5551855359</li>
                                  </ul>
                                </div>
                              </div>
                            </Col>
                            <Col md={6}>
                              <div className="office">
                                <Form.Check
                                  inline
                                  label="office"
                                  name="group1"
                                  // @ts-ignore
                                  type={type}
                                  id={`inline-${type}-3`}
                                />
                                <div className="office-details">
                                  <ul className="list-unstyled">
                                    <li>
                                      Address : 26, Starts Hollow Colony,Denver,
                                      Colorado, United States
                                    </li>
                                    <li>Pin Code : 80014</li>
                                    <li>Phone : +1 5551855359</li>
                                  </ul>
                                </div>
                              </div>
                            </Col>
                          </Row>
                        </div>
                      ))}
                    </Form>
                  </div>
                </div>
                <div className="checkout-forms">
                  <div className="shipping-label d-flex justify-content-between align-items-center">
                    <div className="label">
                      <h4>Billing Address</h4>
                    </div>
                    <div className="add-new">
                      <span onClick={handleShowBillingAddress}>+ add new</span>
                      <Modal
                        show={showBillingAddress}
                        onHide={handleCloseBillingAddress}
                      >
                        <Modal.Header closeButton>
                          <Modal.Title>Billing Address</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <div className="add-new-billing">
                            <Form>
                              <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlInput1"
                              >
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                  type="text"
                                  placeholder="name@example.com"
                                />
                              </Form.Group>
                              <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlInput1"
                              >
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                  type="text"
                                  placeholder="name@example.com"
                                />
                              </Form.Group>
                              <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlInput1"
                              >
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                  type="text"
                                  placeholder="name@example.com"
                                />
                              </Form.Group>
                              <div className="selected-box">
                                <Row>
                                  <Col md={6}>
                                  
                                    <Form.Select aria-label="Default select example">
                                      <option>Open this select menu</option>
                                      <option value="1">One</option>
                                      <option value="2">Two</option>
                                      <option value="3">Three</option>
                                    </Form.Select>
                                  </Col>
                                  <Col md={6}>
                                  
                                    <Form.Select aria-label="Default select example">
                                      <option>Open this select menu</option>
                                      <option value="1">One</option>
                                      <option value="2">Two</option>
                                      <option value="3">Three</option>
                                    </Form.Select>
                                  </Col>
                                  <Col md={6}>
                                  
                                    <Form.Group
                                      className="mb-3"
                                      controlId="exampleForm.ControlInput1"
                                    >
                                      <Form.Label>Email address</Form.Label>
                                      <Form.Control
                                        type="text"
                                        placeholder="name@example.com"
                                      />
                                    </Form.Group>
                                  </Col>
                                  <Col md={6}>
                                  
                                    <Form.Group
                                      className="mb-3"
                                      controlId="exampleForm.ControlInput1"
                                    >
                                      <Form.Label>Email address</Form.Label>
                                      <Form.Control
                                        type="text"
                                        placeholder="name@example.com"
                                      />
                                    </Form.Group>
                                  </Col>
                                </Row>
                              </div>
                            </Form>
                          </div>
                        </Modal.Body>
                        <Modal.Footer>
                          <Button
                            variant="secondary"
                            onClick={handleCloseBillingAddress}
                          >
                            Close
                          </Button>
                          <Button
                            variant="primary"
                            onClick={handleCloseBillingAddress}
                          >
                            Save Changes
                          </Button>
                        </Modal.Footer>
                      </Modal>
                    </div>
                  </div>
                  <div className="shipping-address">
                    <Form>
                      {["radio"].map((type) => (
                        <div key={`inline-${type}`} className="mb-3">
                          <Row>
                            <Col md={6}>
                              <div className="new-home">
                                <Form.Check
                                  inline
                                  label=" new home"
                                  name="group1"
                                  // @ts-ignore
                                  type={type}
                                  id={`inline-${type}-1`}
                                />
                                <div className="home-details">
                                  <ul className="list-unstyled">
                                    <li>
                                      Address : 26, Starts Hollow Colony,Denver,
                                      Colorado, United States
                                    </li>
                                    <li>Pin Code : 80014</li>
                                    <li>Phone : +1 5551855359</li>
                                  </ul>
                                </div>
                              </div>
                            </Col>
                            <Col md={6}>
                              <div className="old-home">
                                <Form.Check
                                  inline
                                  label=" old home"
                                  name="group1"
                                  // @ts-ignore
                                  type={type}
                                  id={`inline-${type}-2`}
                                />
                                <div className="old-home-details">
                                  <ul className="list-unstyled">
                                    <li>
                                      Address : 26, Starts Hollow Colony,Denver,
                                      Colorado, United States
                                    </li>
                                    <li>Pin Code : 80014</li>
                                    <li>Phone : +1 5551855359</li>
                                  </ul>
                                </div>
                              </div>
                            </Col>
                            <Col md={6}>
                              <div className="office">
                                <Form.Check
                                  inline
                                  label="office"
                                  name="group1"
                                  // @ts-ignore
                                  type={type}
                                  id={`inline-${type}-3`}
                                />
                                <div className="office-details">
                                  <ul className="list-unstyled">
                                    <li>
                                      Address : 26, Starts Hollow Colony,Denver,
                                      Colorado, United States
                                    </li>
                                    <li>Pin Code : 80014</li>
                                    <li>Phone : +1 5551855359</li>
                                  </ul>
                                </div>
                              </div>
                            </Col>
                          </Row>
                        </div>
                      ))}
                    </Form>
                  </div>
                </div>
                <div className="checkout-forms">
                  <div className="shipping-label d-flex justify-content-between align-items-center">
                    <div className="label">
                      <h4>Delivery Options</h4>
                    </div>
                  </div>
                  <div className="shipping-address">
                    <Form>
                      {["radio"].map((type) => (
                        <div key={`inline-${type}`} className="mb-3">
                          <Row>
                            <Col md={6}>
                              <div className="standard-delivery">
                                <Form.Check
                                  inline
                                  label=" Standard Delivery | Approx 5 to 7 Days"
                                  name="group1"
                                  // @ts-ignore
                                  type={type}
                                  id={`inline-${type}-1`}
                                />
                              </div>
                            </Col>
                            <Col md={6}>
                              <div className="express-delivery">
                                <Form.Check
                                  inline
                                  label=" Express Delivery | Schedule"
                                  name="group1"
                                  // @ts-ignore
                                  type={type}
                                  id={`inline-${type}-2`}
                                />
                              </div>
                            </Col>
                            <Col md={6}></Col>
                          </Row>
                        </div>
                      ))}
                    </Form>
                  </div>
                </div>
                <div className="checkout-forms">
                  <div className="shipping-label d-flex justify-content-between align-items-center">
                    <div className="label">
                      <h4>Payment Options</h4>
                    </div>
                  </div>
                  <div className="shipping-address">
                    <Form>
                      {["radio"].map((type) => (
                        <div key={`inline-${type}`} className="mb-3">
                          <Row>
                            <Col md={6}>
                              <ul className="list-unstyled">
                                <li>
                                  <div className="old-home">
                                    <Form.Check
                                      inline
                                      label=" CASH ON DELIVERY"
                                      name="group1"
                                      // @ts-ignore
                                      type={type}
                                      id={`inline-${type}-2`}
                                    />
                                  </div>
                                </li>
                                <li>
                                  <div className="old-home">
                                    <Form.Check
                                      inline
                                      label="STRIPE"
                                      name="group1"
                                      // @ts-ignore
                                      type={type}
                                      id={`inline-${type}-2`}
                                    />
                                  </div>
                                </li>
                                <li>
                                  <div className="old-home">
                                    <Form.Check
                                      inline
                                      label=" FLUTTERWAVE"
                                      name="group1"
                                      // @ts-ignore
                                      type={type}
                                      id={`inline-${type}-2`}
                                    />
                                  </div>
                                </li>
                                <li>
                                  <div className="old-home">
                                    <Form.Check
                                      inline
                                      label="MOLLIE"
                                      name="group1"
                                      // @ts-ignore
                                      type={type}
                                      id={`inline-${type}-2`}
                                    />
                                  </div>
                                </li>
                                <li>
                                  <div className="old-home">
                                    <Form.Check
                                      inline
                                      label="BKASH"
                                      name="group1"
                                      // @ts-ignore
                                      type={type}
                                      id={`inline-${type}-2`}
                                    />
                                  </div>
                                </li>
                                <li>
                                  <div className="old-home">
                                    <Form.Check
                                      inline
                                      label="PHONEPE"
                                      name="group1"
                                      // @ts-ignore
                                      type={type}
                                      id={`inline-${type}-2`}
                                    />
                                  </div>
                                </li>
                              </ul>
                            </Col>
                            <Col md={6}>
                              <ul className="list-unstyled">
                                <li>
                                  <div className="old-home">
                                    <Form.Check
                                      inline
                                      label="PAYPAL"
                                      name="group1"
                                      // @ts-ignore
                                      type={type}
                                      id={`inline-${type}-2`}
                                    />
                                  </div>
                                </li>
                                <li>
                                  <div className="old-home">
                                    <Form.Check
                                      inline
                                      label="SSLCOMMERZ"
                                      name="group1"
                                      // @ts-ignore
                                      type={type}
                                      id={`inline-${type}-2`}
                                    />
                                  </div>
                                </li>
                                <li>
                                  <div className="old-home">
                                    <Form.Check
                                      inline
                                      label="PAYSTACK"
                                      name="group1"
                                      // @ts-ignore
                                      type={type}
                                      id={`inline-${type}-2`}
                                    />
                                  </div>
                                </li>
                                <li>
                                  <div className="old-home">
                                    <Form.Check
                                      inline
                                      label="BANK TRANSFER"
                                      name="group1"
                                      // @ts-ignore
                                      type={type}
                                      id={`inline-${type}-2`}
                                    />
                                  </div>
                                </li>
                                <li>
                                  <div className="old-home">
                                    <Form.Check
                                      inline
                                      label="CCAVENUE"
                                      name="group1"
                                      // @ts-ignore
                                      type={type}
                                      id={`inline-${type}-2`}
                                    />
                                  </div>
                                </li>
                                <li>
                                  <div className="old-home">
                                    <Form.Check
                                      inline
                                      label="INSTAMOJO"
                                      name="group1"
                                      // @ts-ignore
                                      type={type}
                                      id={`inline-${type}-2`}
                                    />
                                  </div>
                                </li>
                              </ul>
                            </Col>
                          </Row>
                        </div>
                      ))}
                    </Form>
                  </div>
                </div>
              </Col>
              <Col md={6}>
                <div className="summary-order">
                  <div className="summary-order-header">
                    <h4 className="fw-bold">Summary Order</h4>
                    <p>
                      For a better experience, verify your goods and choose your
                      shipping option.
                    </p>
                  </div>

                  <div className="summary-order-body row align-items-center py-3 border-bottom">
                    <div className="left-side-summery col-8 d-flex align-items-center gap-3">
                      <div className="body-image position-relative">
                        <Image
                          src="/assets/images/shoes-slider/1.jpg"
                          fill
                          alt="summary image"
                        />
                      </div>
                      <div className="order-details">
                        <h4 className="m-0 fs-6 fw-bold">
                          Gym Coords Set (Brown)
                        </h4>
                        <h5 className="m-0 fs-6 text-muted">$15.00 X 1</h5>
                      </div>
                    </div>
                    <div className="order-price col-4 text-end">
                      <span className="fs-5 fw-bold text-dark">$15.00</span>
                    </div>
                  </div>
                  <div className="summary-order-body row align-items-center py-3 border-bottom">
                    <div className="left-side-summery col-8 d-flex align-items-center gap-3">
                      <div className="body-image position-relative">
                        <Image
                          src="/assets/images/shoes-slider/2.jpg"
                          fill
                          alt="summary image"
                        />
                      </div>
                      <div className="order-details">
                        <h4 className="m-0 fs-6 fw-bold">
                          Gym Coords Set (Brown)
                        </h4>
                        <h5 className="m-0 fs-6 text-muted">$15.00 X 1</h5>
                      </div>
                    </div>
                    <div className="order-price col-4 text-end">
                      <span className="fs-5 fw-bold text-dark">$15.00</span>
                    </div>
                  </div>
                  <div className="summary-order-body row align-items-center py-3 border-bottom">
                    <div className="left-side-summery col-8 d-flex align-items-center gap-3">
                      <div className="body-image position-relative">
                        <Image
                          src="/assets/images/shoes-slider/3.jpg"
                          fill
                          alt="summary image"
                        />
                      </div>
                      <div className="order-details">
                        <h4 className="m-0 fs-6 fw-bold">
                          Gym Coords Set (Brown)
                        </h4>
                        <h5 className="m-0 fs-6 text-muted">$15.00 X 1</h5>
                      </div>
                    </div>
                    <div className="order-price col-4 text-end">
                      <span className="fs-5 fw-bold text-dark">$15.00</span>
                    </div>
                  </div>
                </div>

                <div className="billing-summary">
                  <h4 className="fw-bold">Billing Summary</h4>
                  <div className="promo ">
                    <div className="labels">
                      <Row>
                        <Col>
                          <span className="fw-bold">Promo Code</span>
                        </Col>
                        <Col className="text-end">
                          <span
                            className=" view-all fw-bold"
                            onClick={handleShowBillingSummary}
                          >
                            view all
                          </span>
                          <Modal
                            show={showBillingSummary}
                            onHide={handleCloseBillingSummary}
                          >
                            <Modal.Header closeButton>
                              <Modal.Title>Apply Coupon</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                              <Container>
                                <Row>
                                  <Col md={6}>
                                    <div className="box">
                                      <h6>Holiday Savings </h6>
                                      <p>
                                        Save 40% on holiday gifts and
                                        decorations.
                                      </p>
                                      <div className="code-text  d-flex justify-content-between align-items-center">
                                        <div className="code">
                                          <p>#HOLIDAY40</p>
                                        </div>
                                        <div className="copy-code">
                                          <p>copy code</p>
                                        </div>
                                      </div>
                                    </div>
                                  </Col>

                                  <Col md={6}>
                                    <div className="box">
                                      <h6>Free Shipping</h6>
                                      <p>Free shipping on orders over $50</p>
                                      <div className="code-text d-flex justify-content-between align-items-center">
                                        <div className="code">
                                          <p>#HOLIDAY40</p>
                                        </div>
                                        <div className="copy-code">
                                          <p>copy code</p>
                                        </div>
                                      </div>
                                    </div>
                                  </Col>
                                  <Col md={6}>
                                    <div className="box">
                                      <h6>Welcome Offer</h6>
                                      <p>
                                        Welcome to our store! Take 15% off on
                                        your first order.
                                      </p>
                                      <div className="code-text d-flex justify-content-between align-items-center">
                                        <div className="code">
                                          <p>#HOLIDAY40</p>
                                        </div>
                                        <div className="copy-code">
                                          <p>copy code</p>
                                        </div>
                                      </div>
                                    </div>
                                  </Col>
                                  <Col md={6}>
                                    <div className="box">
                                      <h6>New Year Discount</h6>
                                      <p>
                                        Enjoy 25% off on your New Year
                                        purchases.
                                      </p>
                                      <div className="code-text d-flex justify-content-between align-items-center">
                                        <div className="code">
                                          <p>#HOLIDAY40</p>
                                        </div>
                                        <div className="copy-code">
                                          <p>copy code</p>
                                        </div>
                                      </div>
                                    </div>
                                  </Col>
                                  <Col md={6}>
                                    <div className="box">
                                      <h6>Summer Sale</h6>
                                      <p>
                                        Get 20% off on all summer collections.
                                      </p>
                                      <div className="code-text d-flex justify-content-between align-items-center">
                                        <div className="code">
                                          <p>#HOLIDAY40</p>
                                        </div>
                                        <div className="copy-code">
                                          <p>copy code</p>
                                        </div>
                                      </div>
                                    </div>
                                  </Col>
                                  <Col md={6}>
                                    <div className="box">
                                      <h6>Special Alert Saving 10% Off</h6>
                                      <p>
                                        Apply code SPECIAL10 at checkout and
                                        enjoy a generous $10 discount on orders
                                        of $40 or more.
                                      </p>
                                      <div className="code-text d-flex justify-content-between align-items-center">
                                        <div className="code">
                                          <p>#HOLIDAY40</p>
                                        </div>
                                        <div className="copy-code">
                                          <p>copy code</p>
                                        </div>
                                      </div>
                                    </div>
                                  </Col>
                                </Row>
                              </Container>
                            </Modal.Body>
                            <Modal.Footer>
                              <Button
                                variant="secondary"
                                onClick={handleCloseBillingSummary}
                              >
                                Close
                              </Button>
                              <Button
                                variant="primary"
                                onClick={handleCloseBillingSummary}
                              >
                                Save Changes
                              </Button>
                            </Modal.Footer>
                          </Modal>
                        </Col>
                      </Row>
                    </div>
                    <div className="saving  mt-3">
                      <Row>
                        <Col>
                          <div className="box">
                            <h6>Holiday Savings </h6>
                            <div className="code-text  d-flex justify-content-between align-items-center">
                              <div className="code">
                                <p>#HOLIDAY40</p>
                              </div>
                              <div className="copy-code">
                                <p>copy code</p>
                              </div>
                            </div>
                          </div>
                        </Col>

                        <Col>
                          <div className="box">
                            <h6>Holiday Savings </h6>
                            <div className="code-text d-flex justify-content-between align-items-center">
                              <div className="code">
                                <p>#HOLIDAY40</p>
                              </div>
                              <div className="copy-code">
                                <p>copy code</p>
                              </div>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </div>

                    <div className="apply mt-3 d-flex justify-content-between align-items-center text-capitalize ">
                      <Form.Control
                        type="text"
                        placeholder="Enter your coupon Code Here ..."
                      />
                      <Button
                        className="text-capitalize "
                        variant="outline-warning"
                      >
                        apply now
                      </Button>
                    </div>

                    <div className="billing-details">
                      <ul className="list-unstyled">
                        <li>
                          <div className="sub-total d-flex justify-content-between align-items-center mt-3">
                            <span className="title">Sub Total</span>
                            <span className="price">$29.25</span>
                          </div>
                        </li>
                        <li>
                          <div className="shipping d-flex justify-content-between align-items-center mt-3">
                            <span className="title">shipping</span>
                            <span className="price">$29.25</span>
                          </div>
                        </li>
                        <li>
                          <div className="tax d-flex justify-content-between align-items-center mt-3">
                            <span className="title">tax</span>
                            <span className="price">$29.25</span>
                          </div>
                        </li>
                        <li>
                          <div className="Points d-flex justify-content-between align-items-center mt-3">
                            <span className="title">Points</span>
                            <span className="price">$29.25</span>
                          </div>
                        </li>
                        <li>
                          <div className="wallet-balance d-flex justify-content-between align-items-center mt-3">
                            <span className="title">wallet-balance</span>
                            <span className="price">$29.25</span>
                          </div>
                        </li>
                        <li>
                          <div className="total d-flex justify-content-between align-items-center mt-3">
                            <span className="title">total</span>
                            <span className="price">$29.25</span>
                          </div>
                        </li>
                      </ul>

                      <div className="place-order mt-3 ">
                        <Button variant="primary" className="text-capitalize">
                          place order
                        </Button>
                      </div>
                    </div>
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

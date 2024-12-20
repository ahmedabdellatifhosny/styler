"use client";

import dynamic from "next/dynamic";
import Header from "components/1-layout/Header";
import Footer from "components/1-layout/Footer";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

import successAnimation from "./../../../public/assets/animation/Animation - 1734358131097.json";
import { Col, Container, Row, Table } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
export default function Page() {
  return (
    <>
      <Header />
      <section className="order-success">
        <div className="lotti-animation-container">
          <Lottie
            animationData={successAnimation}
            style={{ width: "300px", height: "300px" }}
          />
          <div className="payment-info text-center">
            <h2>Thank you</h2>
            <h5>
              Payment is successfully processed and your order is on the way
            </h5>
            <h5>Transaction ID: 267676GHERT105467</h5>
          </div>
        </div>

        <div className="orders text-capitalize">
          <Container>
            <Row>
              <Col md={6}>
                <div className="table-orders">
                  <Table bordered responsive>
                    <thead>
                      <tr>
                        <th>product image</th>
                        <th>product Name</th>
                        <th>quantity</th>
                        <th>price</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className="product-img ">
                            <Image
                              src="/assets/images/special-products/1.png"
                              alt="product"
                              fill
                            />
                          </div>
                        </td>
                        <td className="text-center align-middle">
                          converse blue
                        </td>
                        <td className="text-center align-middle">2</td>
                        <td className="text-center align-middle">$10.69</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="product-img ">
                            <Image
                              src="/assets/images/special-products/2.png"
                              alt="product"
                              fill
                            />
                          </div>
                        </td>
                        <td className="text-center align-middle">
                          converse blue
                        </td>
                        <td className="text-center align-middle">3</td>
                        <td className="text-center align-middle">$10.69</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="product-img ">
                            <Image
                              src="/assets/images/special-products/2.png"
                              alt="product"
                              fill
                            />
                          </div>
                        </td>
                        <td className="text-center align-middle">
                          converse blue
                        </td>
                        <td className="text-center align-middle">1</td>
                        <td className="text-center align-middle">$10.69</td>
                      </tr>
                    </tbody>
                  </Table>

                  <div className="order-details">
                    <ul className="list-unstyled">
                      <li>
                        <div className="subtotal d-flex justify-content-between align-items-center">
                          <div className="title">
                            <h5>subtotal</h5>
                          </div>
                          <div className="price">
                            <span>$55.00</span>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="shipping d-flex justify-content-between align-items-center">
                          <div className="title">
                            <h5>shipping</h5>
                          </div>
                          <div className="price">
                            <span>$55.00</span>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="tax d-flex justify-content-between align-items-center">
                          <div className="title">
                            <h5>tax(GST) </h5>
                          </div>
                          <div className="price">
                            <span>$55.00</span>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="total d-flex justify-content-between align-items-center">
                          <div className="title">
                            <h5>total</h5>
                          </div>
                          <div className="price">
                            <span>$55.00</span>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
              <Col md={6}>
                <div className="summery">
                  <Container>
                    <Row>
                      <Col>
                        <h4>summery</h4>
                        <ul className="list-unstyled ">
                          <li>order ID: 5563853658932</li>
                          <li>Order Date: October 22, 2018</li>
                          <li>Order Total: $907.28</li>
                        </ul>
                      </Col>
                      <Col>
                        <h4>shipping address</h4>
                        <ul className="list-unstyled ">
                          <li>gerg harvell</li>
                          <li>568, suite ave.</li>
                          <li>Austrlia, 235153</li>
                          <li>Contact No. 987456321</li>
                        </ul>
                      </Col>
                    </Row>
                  
                    <div className="payment-methods">
                      <h4>payment method</h4>
                      <p>
                        Pay on Delivery (Cash/Card). Cash on delivery (COD)
                        available. Card/Net banking acceptance subject to device
                        availability.
                      </p>
                      <p>
                        expected date of delivery:<span className="delivery-date"> october 22, 2018</span>
                      </p>
                      <Link href="/track-order">track order</Link>
                    </div>
                  </Container>
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

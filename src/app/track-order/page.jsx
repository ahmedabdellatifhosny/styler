"use client";
import Footer from "components/1-layout/Footer";
import Header from "components/1-layout/Header";
import { Breadcrumb, Col, Container, Row } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import Image from "next/image";

export default function page() {
  return (
    <>
      <Header />
      <section className="track-order text-capitalize">
        <div className="track-order-header text-center">
          <h2 className="text-capitalize">order tracking</h2>
          <Breadcrumb>
            <Breadcrumb.Item href="/" active>
              Home
            </Breadcrumb.Item>
            <Breadcrumb.Item href="#">order tracking</Breadcrumb.Item>
          </Breadcrumb>
        </div>

        <div className="order-tracking-table">
          <Container>
            <div className="title my-3 ms-1">
              <h5> Order Number: #1021</h5>
            </div>
            <Table bordered responsive className="text-center">
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
                  <td className="text-center align-middle">converse blue</td>
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
                  <td className="text-center align-middle">converse blue</td>
                  <td className="text-center align-middle">3</td>
                  <td className="text-center align-middle">$10.69</td>
                </tr>
                <tr>
                  <td>
                    <div className="product-img ">
                      <Image
                        src="/assets/images/special-products/3.png"
                        alt="product"
                        fill
                      />
                    </div>
                  </td>
                  <td className="text-center align-middle">converse blue</td>
                  <td className="text-center align-middle">1</td>
                  <td className="text-center align-middle">$10.69</td>
                </tr>
              </tbody>
            </Table>
            <div className="order-details">
              <h5>Summary</h5>
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
            <div className="consumer-details text-capitalize">
              <h5>consumer details</h5>
              <Row>
                <Col>
                  <div className="bill-adds">
                    <h5>Billing Address:</h5>
                    <ul className="list-unstyled">
                      <li>
                        26, Starts Hollow Colony Denver Colorado United States
                        80014
                      </li>
                      <li>Phone : +1 5551855359</li>
                    </ul>
                  </div>
                  <div className="delivery-slot">
                    <h5>Delivery Slot:</h5>
                    <ul className="list-unstyled">
                      <li>Standard Delivery | Approx 5 to 7 Days</li>
                    </ul>
                  </div>
                </Col>
                <Col>
                  <div className="shipping-adds">
                    <h5>Shipping Address:</h5>
                    <ul className="list-unstyled">
                      <li>
                        26, Starts Hollow Colony Denver Colorado United States
                        80014
                      </li>
                      <li>Phone : +1 5551855359</li>
                    </ul>
                  </div>
                  <div className="pays">
                    <Row>
                      <Col>
                        <h5>payment method:</h5>
                        <p>paypal</p>
                      </Col>
                      <Col>
                        <h5>payment status:</h5>
                        <p>completed</p>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </div>

            <div className="table-orders text-center">
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Order Number </th>
                    <th>Date</th>
                    <th>Amount</th>
                    <th>Payment Status </th>
                    <th>Payment Method </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>#1020</td>
                    <td>06 Jul 2024 03:51:PM </td>
                    <td>$61.73 </td>
                    <td>
                      <p>pending</p>
                    </td>
                    <td>COD</td>
                  </tr>
                  <tr>
                    <td>#1020</td>
                    <td>06 Jul 2024 03:51:PM </td>
                    <td>$61.73 </td>
                    <td>
                      <p>pending</p>
                    </td>
                    <td>COD</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Container>
        </div>
      </section>
      <Footer />
    </>
  );
}

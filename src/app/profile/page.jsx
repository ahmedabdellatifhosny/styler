"use client";
import Footer from "components/1-layout/Footer";
import Header from "components/1-layout/Header";
import { Breadcrumb, Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
export default function page() {
  return (
    <>
      <Header />
      <section className="profile text-capitalize">
        <div className="profile-header text-center">
          <h2 className="text-capitalize">profile</h2>
          <Breadcrumb>
            <Breadcrumb.Item href="/" active>
              Home
            </Breadcrumb.Item>
            <Breadcrumb.Item href="#">profile</Breadcrumb.Item>
          </Breadcrumb>
        </div>

        <div className="personal-details">
          <Container>
            <h3 className="text-uppercase fw-bold mb-4">personal details</h3>
            <Form>
              <Row>
                <Col md={6}>
                  <Form.Label>first name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Your First Name"
                  />
                  <Form.Label>phone number</Form.Label>
                  <Form.Control type="text" placeholder="Enter Your Number" />
                </Col>
                <Col md={6}>
                  <Form.Label>last name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Your Last Name"
                  />
                  <Form.Label>email</Form.Label>
                  <Form.Control type="email" placeholder="Email" />
                </Col>
              </Row>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>write your message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Write Your Message"
                />
              </Form.Group>
            </Form>
          </Container>
        </div>
        <div className="shipping-addr">
          <Container>
            <h3 className="text-uppercase fw-bold mb-4">shipping address</h3>
            <Form>
              <Row>
                <Col md={6}>
                  <Form.Label>flat / plot</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Your First Name"
                  />
                  <Form.Label>Zip Code *</Form.Label>
                  <Form.Control type="text" placeholder="Zip-Code" />
                  <Form.Label>City *</Form.Label>
                  <Form.Control type="email" placeholder="City" />
                </Col>
                <Col md={6}>
                  <Form.Label>Address *</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Your Last Name"
                  />
                  <Form.Label>Country *</Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    className="text-capitalize"
                  >
                    {/* <option>Open this select menu</option> */}
                    <option value="1">egypt</option>
                    <option value="2">ksa</option>
                    <option value="3">usa</option>
                  </Form.Select>
                  <Form.Label>Region/State *</Form.Label>
                  <Form.Control type="email" placeholder="Region/State" />
                </Col>
              </Row>
              <Button variant="primary">save setting</Button>
            </Form>
          </Container>
        </div>
      </section>
      <Footer />
    </>
  );
}

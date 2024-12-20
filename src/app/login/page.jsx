"use client";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../../components/1-layout/Footer";
import Header from "../../components/1-layout/Header";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Link from "next/link";

export default function Login() {
  return (
    <>
      <Header />

      <section className="login text-capitalize ">
        <div className="login-header py-3 my-3 d-flex justify-content-center align-items-center flex-column text-capitalize">
          <h3>Customers login</h3>
          <Breadcrumb className="text-center" aria-label="breadcrumb">
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            <Breadcrumb.Item active>Customers login</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="login-form  py-3 my-3">
          <Container>
            <Row>
              <Col md={6}>
                <h3 className="py-3 my-3">login</h3>
                <div className="login-inside">
                  <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button
                      variant="primary"
                      type="submit"
                      className="text-capitalize"
                    >
                      login
                    </Button>
                  </Form>
                </div>
              </Col>
              <Col md={6}>
                <h3 className="py-3 my-3">New Customer</h3>
                <div className="create-account">
                  <div className="new-customer">
                    <h4>Create A Account</h4>
                    <p>
                      Sign up for a free account at our store. Registration is
                      quick and easy. It allows you to be able to order from our
                      shop. To start shopping click register.
                    </p>
                    <Link className="text-white" href={"/register"}>
                      <Button variant="primary" type="submit">
                        Create An Account
                      </Button>
                    </Link>
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

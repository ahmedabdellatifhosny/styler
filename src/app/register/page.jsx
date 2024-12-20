"use client";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Header from "../../components/1-layout/Header";
import Footer from "../../components/1-layout/Footer";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Container } from "react-bootstrap";
export default function Register() {
  return (
    <>
      <Header />
      <section className="register text-capitalize">
        <div className="register-header py-3 my-3 d-flex justify-content-center align-items-center flex-column text-capitalize">
          <h3>Create account</h3>
          <Breadcrumb className="text-center" aria-label="breadcrumb">
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            <Breadcrumb.Item active>Create account</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <Container>
          <div className="title mt-5 mb-4">
            <h4 className="fw-bold">Create account</h4>
          </div>

          <div className="sub-form">
            <Form>
              <Row>
                <Col>
                  <label>first name</label>
                  <Form.Control placeholder="First name" />
                  <label>last name</label>
                  <Form.Control placeholder="Last name" />
                </Col>
                <Col>
                  <label>email</label>
                  <Form.Control placeholder="Email" />
                  <label>password</label>
                  <Form.Control placeholder="Password" />
                </Col>
              </Row>
              <Button variant="primary" type="submit">
                Create account
              </Button>
            </Form>
          </div>
        </Container>
      </section>
      <Footer />
    </>
  );
}

"use client";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Header from "../../components/1-layout/Header";
import Footer from "../../components/1-layout/Footer";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Container } from "react-bootstrap";
import { useState } from "react";
import { register } from "../../services/homeApis";


export default function Register() {
  const [RegForm, setRegForm] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState(""); 
  const [success, setSuccess] = useState(""); 

  async function submitBtn(e) {
    e.preventDefault();


    if (
      !RegForm.name ||
      !RegForm.email ||
      !RegForm.password ||
      !RegForm.confirmPassword
    ) {
      setError("All fields are required.");
      return; 
    }

  
    if (RegForm.password !== RegForm.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
     const res= await register(RegForm.name, RegForm.email, RegForm.password);  

   
     if(res.status === true){
      setSuccess(res.message + ", Hello :"+res.data.user.name);
      setError('');
     }else{
      setError(res.message);
      setSuccess('');

     }
      
    } catch (error) {
      if (error.response) {
        // في حال وجود استجابة من السيرفر
        if (error.response.status === 422) {
          setError("Validation error: Please check the input fields.");
        } else {
          setError("An error occurred during registration.");
        }
      } else {
        setError("Network error: Please check your connection.");
      }
    }
  }

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
          {error && <div className="alert alert-danger">{error}</div>} {/* عرض رسالة الخطأ */}
          {success && <div className="alert alert-success">{success}</div>} {/* عرض رسالة الخطأ */}

            <Form>
              <Row>
                <Col>
                  <label>First name</label>
                  <Form.Control
                    placeholder="First name"
                    value={RegForm.name}
                    onChange={(e) =>
                      setRegForm({ ...RegForm, name: e.target.value })
                    }
                    required
                  />
                  <label>Password</label>
                  <Form.Control
                    placeholder="Enter your password"
                    type="password"
                    value={RegForm.password}
                    onChange={(e) =>
                      setRegForm({ ...RegForm, password: e.target.value })
                    }
                    required
                  />
                </Col>
                <Col>
                  <label>Email</label>
                  <Form.Control
                    placeholder="Email"
                    value={RegForm.email}
                    onChange={(e) =>
                      setRegForm({ ...RegForm, email: e.target.value })
                    }
                    required
                  />
                  <label>Confirm password</label>
                  <Form.Control
                    placeholder="Confirm your password"
                    type="password"
                    value={RegForm.confirmPassword}
                    onChange={(e) =>
                      setRegForm({ ...RegForm, confirmPassword: e.target.value })
                    }
                    required
                  />
                </Col>
              </Row>
              <Button variant="primary" type="submit" onClick={submitBtn}>
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

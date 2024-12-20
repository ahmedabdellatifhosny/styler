"use client";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";

export default function Feature() {
  return (
    <section className="features">
      <Container>
        <Row>
          <Col md={4}>
            <div className="free-shipping">
              <div className="feature-image">
                <Image
                  src="/assets/images/shipping/1.svg"
                  alt="feature"
                  fill
                  className=" object-fit-contain"
                />
              </div>
              <div className="feature-image">
                <h4>free shipping</h4>
                <p>free shipping world wide</p>
              </div>
            </div>
          </Col>
          <Col md={4}>
           
            <div className="services">
              <div className="feature-image">
                <Image
                  src="/assets/images/shipping/2.svg"
                  alt="feature"
                  fill
                  className=" object-fit-contain"
                />
              </div>
              <div className="feature-image">
                <h4>free shipping</h4>
                <p>free shipping world wide</p>
              </div>
            </div>
          </Col>
          <Col md={4}>
            
            <div className="festival-offers">
              <div className="feature-image">
                <Image
                  src="/assets/images/shipping/3.svg"
                  alt="feature"
                  fill
                  className=" object-fit-contain"
                />
              </div>
              <div className="feature-image">
                <h4>free shipping</h4>
                <p>free shipping world wide</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

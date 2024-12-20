"use client";

import { Carousel, Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import { useEffect, useState } from "react";
import getHomeSlider from "services/homeApis";

export default function Hero() {
  const [slides, setSlides] = useState([]);
  useEffect(() => {
    async function getSlides() {
      const slides = await getHomeSlider();
      setSlides(slides);
    }
    getSlides();
  }, []);
  return (
    <div className="hero">
      <Carousel>
        {slides.map((slide, index) => (
          <Carousel.Item key={index}>
            <div className="slider">
              <Container>
                <Row>
                  <Col>
                    <Image
                      src={slide.photo_url}
                      alt={slide.title}
                      fill
                      quality={100}
                    />
                  </Col>
                </Row>
              </Container>
            </div>
          </Carousel.Item>
        ))}
        {/* <Carousel.Item interval={3000}>
          <div className="slider">
            <Container>
              <Row>
                <Col>
                  <Image
                    src="/assets/images/slider/slider1.png"
                    alt="First slide"
                    fill
                    quality={100}
                  />
                </Col>
              </Row>
            </Container>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <div className="slider">
            <Container>
              <Row>
                <Col>
                  <Image
                    src="/assets/images/slider/slider2.png"
                    alt="First slide"
                    fill
                    quality={100}
                  />
                </Col>
              </Row>
            </Container>
          </div>
        </Carousel.Item>{" "}
        <Carousel.Item interval={3000}>
          <div className="slider">
            <Container>
              <Row>
                <Col>
                  <Image
                    src="/assets/images/slider/slider3.png"
                    alt="First slide"
                    fill
                    quality={100}
                  />
                </Col>
              </Row>
            </Container>
          </div>
        </Carousel.Item> */}
      </Carousel>
    </div>
  );
}

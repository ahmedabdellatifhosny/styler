"use client";

import { Carousel, Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import { useEffect, useState } from "react";
import {getHomeSlider} from "services/homeApis";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Hero() {
  const [slides, setSlides] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function getSlides() {
      const slides = await getHomeSlider();
      setSlides(slides);
      setLoading(false);
    }
    getSlides();
  }, []);
  return (
    <div className="hero">
      <Carousel>
        {loading ? (
          <Carousel.Item>
            <div className="slider">
              <Container>
                <Row>
                  <Col>
                    <Skeleton
                      height={500}
                      count={5}
                      baseColor="#ddd"
                      highlightColor="#eee"
                    />
                  </Col>
                </Row>
              </Container>
            </div>
          </Carousel.Item>
        ) : (
          slides.map((slide, index) => (
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
          ))
        )}
      </Carousel>
    </div>
  );
}

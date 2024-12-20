"use client";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import Image from "next/image";

export default function AdditionalProduct() {
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          autoPlay : true,
          speed: 1000,
          autoplaySpeed: 1000,
          cssEase: "linear",
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="additional text-center">
      <Container>
        <div className="additional-header">
          <h6>our collection</h6>
          <h3>special products</h3>
          <div className="line">
            <ul className="d-flex list-unstyled justify-content-center align-items-center gap-1">
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
        <div className="slider-container">
          <Slider {...settings}>
            <div className="special-pro">
              <div className="special-pro-img">
                <Image
                  src="/assets/images/collection/1.png"
                  alt="product"
                  fill
                />
              </div>
              <h4 className="date">25 January 2018</h4>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Repudiandae, ipsum.
              </p>
              <h6>by: John Dio , 2 Comment</h6>
            </div>
            <div className="special-pro">
              <div className="special-pro-img">
                <Image
                  src="/assets/images/collection/2.png"
                  alt="product"
                  fill
                />
              </div>
              <h4 className="date">25 January 2018</h4>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Repudiandae, ipsum.
              </p>
              <h6>by: John Dio , 2 Comment</h6>
            </div>
            <div className="special-pro">
              <div className="special-pro-img">
                <Image
                  src="/assets/images/collection/3.png"
                  alt="product"
                  fill
                />
              </div>
              <h4 className="date">25 January 2018</h4>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Repudiandae, ipsum.
              </p>
              <h6>by: John Dio , 2 Comment</h6>
            </div>
          </Slider>
        </div>
      </Container>
    </section>
  );
}

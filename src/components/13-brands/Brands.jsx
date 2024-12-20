// @ts-nocheck
"use client";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import Image from "next/image";

export default function Brands() {
  let settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true, // تم التعديل
          speed: 1000,
          autoplaySpeed: 2000, // سرعة التمرير التلقائي (بالميلي ثانية)
          cssEase: "linear",
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          autoplay: true, // إضافة autoplay هنا إذا لزم
          autoplaySpeed: 3000,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true, // إضافة autoplay هنا إذا لزم
          autoplaySpeed: 3000,
        },
      },
    ],
  };

  return (
    <section className="brands">
      <Container>
        <div className="slider-container text-center">
          <Slider Slider  {...settings}>
            <div className="item">
              <div className="slider-items">
                <Image src="/assets/images/brands/1.png" alt="brand" fill />
              </div>
              <div className="brand-name">
                <p>addidas</p>
              </div>
            </div>
            <div className="item">
              <div className="slider-items">
                <Image src="/assets/images/brands/2.png" alt="brand" fill />
              </div>
              <div className="brand-name">
                <p>balenciaga </p>
              </div>
            </div>
            <div className="item">
              <div className="slider-items">
                <Image src="/assets/images/brands/3.png" alt="brand" fill />
              </div>
              <div className="brand-name">
                <p>nike</p>
              </div>
            </div>
          </Slider>
        </div>
      </Container>
    </section>
  );
}

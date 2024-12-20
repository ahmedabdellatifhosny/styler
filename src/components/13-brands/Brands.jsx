// @ts-nocheck
"use client";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import Image from "next/image";
import { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import {getHomeBrands} from "services/homeApis";
export default function Brands() {
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function getBrands() {
      const brands = await getHomeBrands();
      console.log(brands);
      setBrands(brands);
      setLoading(false);
    }
    getBrands();
  }, []);
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
          autoplay: true,
          speed: 1000,
          autoplaySpeed: 2000,
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
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },
    ],
  };

  return (
    <section className="brands">
      <Container>
        <div className="slider-container text-center">
          <Slider Slider {...settings}>
            {loading ? (
              <Skeleton
                height={500}
                count={5}
                baseColor="#ddd"
                highlightColor="#eee"
              />
            ) : (
              brands.map((brand, index) => (
                <div className="item" key={index}>
                  <div className="slider-items">
                    <Image src={brand.featured_image_url} alt={brand.name} fill />
                  </div>
                  <div className="brand-name">
                    <p>{brand.name}</p>
                  </div>
                </div>
              ))
            )}
          </Slider>
        </div>
      </Container>
    </section>
  );
}

{
  /* <div className="item" key={index}>
<div className="slider-items">
  <Image src={brand.image} alt="brand" fill />
</div>
<div className="brand-name">
  <p>{brand.featured_image_url}</p>
</div>
</div> */
}

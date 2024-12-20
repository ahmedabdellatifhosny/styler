"use client";
import dynamic from "next/dynamic";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container } from "react-bootstrap";
import { getHomeSpecialProduct } from "../../services/homeApis";
import { useEffect, useState } from "react";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";


// @ts-ignore
const Slider = dynamic(() => import("react-slick"), { ssr: false });

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Skeleton from "react-loading-skeleton";

export default function SpecialProduct() {
  const [specialProduct, setSpecialProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getSpecialProduct() {
      const specialProduct = await getHomeSpecialProduct();
      setSpecialProduct(specialProduct);
      setLoading(false);
    }
    getSpecialProduct();
  }, []);
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <section className="special-products text-center">
      <Container>
        <div className="special-product-header">
          <h6>our collection</h6>
          <h2>Special Product</h2>
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
            {loading ? (
              <Skeleton
                height={500}
                count={5}
                baseColor="#ddd"
                highlightColor="#eee"
              />
            ) : (
              specialProduct.map((product, index) => (
                <div className="pro-box" key={index}>
                  <Image
                    src={product.featured_image_url}
                    width={204}
                    height={147}
                    alt={product.name}
                  />
                  <h5 className="product-title text-start">{product.name}</h5>
                  <div className="rating text-start">
                    {[...Array(5)].map((_, index) => (
                      <FontAwesomeIcon
                        key={index}
                        icon={index < product.stars ? solidStar : emptyStar}
                      />
                    ))}
                    <span>({product.stars})</span>
                  </div>
                  <div className="price-discount">
                    <div className="price">{product.sell_price}</div>
                    <div className="discount">
                      <span className="price-discount">{product.discount}</span>
                      {/* <span className="off">5% off</span> */}
                    </div>
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

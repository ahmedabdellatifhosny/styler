"use client";
import dynamic from "next/dynamic";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Container } from "react-bootstrap";


// @ts-ignore
const Slider = dynamic(() => import("react-slick"), { ssr: false });


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SpecialProduct() {

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
            <div className="pro-box">
              <Image
                src="/assets/images/special-products/1.png"
                width={204}
                height={147}
                alt="sports shoes"
              />
              <h5 className="product-title text-start">Nimbus Sneakers</h5>
              <div className="rating text-start">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <span>(10)</span>
              </div>
              <div className="price-discount">
                <div className="price">$22.10</div>
                <div className="discount">
                  <span className="price-discount">$22.10</span>
                  <span className="off">5% off</span>
                </div>
              </div>
            </div>

          
            <div className="pro-box">
              <Image
                src="/assets/images/special-products/2.png"
                width={204}
                height={147}
                alt="sports shoes"
              />
              <h5 className="product-title text-start">Nimbus Sneakers</h5>
              <div className="rating text-start">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <span>(10)</span>
              </div>
              <div className="price-discount">
                <div className="price">$22.10</div>
                <div className="discount">
                  <span className="price-discount">$22.10</span>
                  <span className="off">5% off</span>
                </div>
              </div>
            </div>

    
            <div className="pro-box">
              <Image
                src="/assets/images/special-products/3.png"
                width={204}
                height={147}
                alt="sports shoes"
              />
              <h5 className="product-title text-start">Nimbus Sneakers</h5>
              <div className="rating text-start">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <span>(10)</span>
              </div>
              <div className="price-discount">
                <div className="price">$22.10</div>
                <div className="discount">
                  <span className="price-discount">$22.10</span>
                  <span className="off">5% off</span>
                </div>
              </div>
            </div>

        
            <div className="pro-box">
              <Image
                src="/assets/images/special-products/4.png"
                width={204}
                height={147}
                alt="sports shoes"
              />
              <h5 className="product-title text-start">Nimbus Sneakers</h5>
              <div className="rating text-start">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <span>(10)</span>
              </div>
              <div className="price-discount">
                <div className="price">$22.10</div>
                <div className="discount">
                  <span className="price-discount">$22.10</span>
                  <span className="off">5% off</span>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </Container>
    </section>
  );
}

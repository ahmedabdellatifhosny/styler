"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Row, Col, Container } from "react-bootstrap";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function ShoesSlider() {
  const settings = {
    slidesToShow: 1,
    speed: 1100,
    rows: 4,
    slidesPerRow: 1,
    arrows: true,
  };

  return (
    <section className="text-start shoes-slider">
      <Container>
        <Row>
          <Col md={3}>
            <div className="slider-container">
              <div className="slide-title">
                <h5>new product</h5>
              </div>

              <Slider {...settings}>
                <div className="slider-items">
                  <div className="box-slider">
                    <div className="box-img">
                      <Image
                        src={"/assets/images/shoes-slider/1.jpg"}
                        fill
                        alt="shoes"
                      />
                    </div>
                    <div className="box-details text-start">
                      <div className="rating">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                      </div>
                      <div className="pro-details">
                        <div>solid black</div>
                        <div>sports</div>
                        <div>shoes</div>
                      </div>
                      <div className="pro-price">
                        <span>$110.00</span>
                        <span>$120.00</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="slider-items">
                  <div className="box-slider">
                    <div className="box-img">
                      <Image
                        src={"/assets/images/shoes-slider/2.jpg"}
                        fill
                        alt="shoes"
                      />
                    </div>
                    <div className="box-details text-start">
                      <div className="rating">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                      </div>
                      <div className="pro-details">
                        <div>solid black</div>
                        <div>sports</div>
                        <div>shoes</div>
                      </div>
                      <div className="pro-price">
                        <span>$110.00</span>
                        <span>$120.00</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slider-items">
                  <div className="box-slider">
                    <div className="box-img">
                      <Image
                        src={"/assets/images/shoes-slider/3.jpg"}
                        fill
                        alt="shoes"
                      />
                    </div>
                    <div className="box-details text-start">
                      <div className="rating">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                      </div>
                      <div className="pro-details">
                        <div>solid black</div>
                        <div>sports</div>
                        <div>shoes</div>
                      </div>
                      <div className="pro-price">
                        <span>$110.00</span>
                        <span>$120.00</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slider-items">
                  <div className="box-slider">
                    <div className="box-img">
                      <Image
                        src={"/assets/images/shoes-slider/4.jpg"}
                        fill
                        alt="shoes"
                      />
                    </div>
                    <div className="box-details text-start">
                      <div className="rating">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                      </div>
                      <div className="pro-details">
                        <div>solid black</div>
                        <div>sports</div>
                        <div>shoes</div>
                      </div>
                      <div className="pro-price">
                        <span>$110.00</span>
                        <span>$120.00</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slider-items">
                  <div className="box-slider">
                    <div className="box-img">
                      <Image
                        src={"/assets/images/shoes-slider/5.jpg"}
                        fill
                        alt="shoes"
                      />
                    </div>
                    <div className="box-details text-start">
                      <div className="rating">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                      </div>
                      <div className="pro-details">
                        <div>solid black</div>
                        <div>sports</div>
                        <div>shoes</div>
                      </div>
                      <div className="pro-price">
                        <span>$110.00</span>
                        <span>$120.00</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slider-items">
                  <div className="box-slider">
                    <div className="box-img">
                      <Image
                        src={"/assets/images/shoes-slider/6.jpg"}
                        fill
                        alt="shoes"
                      />
                    </div>
                    <div className="box-details text-start">
                      <div className="rating">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                      </div>
                      <div className="pro-details">
                        <div>solid black</div>
                        <div>sports</div>
                        <div>shoes</div>
                      </div>
                      <div className="pro-price">
                        <span>$110.00</span>
                        <span>$120.00</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slider-items">
                  <div className="box-slider">
                    <div className="box-img">
                      <Image
                        src={"/assets/images/shoes-slider/7.jpg"}
                        fill
                        alt="shoes"
                      />
                    </div>
                    <div className="box-details text-start">
                      <div className="rating">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                      </div>
                      <div className="pro-details">
                        <div>solid black</div>
                        <div>sports</div>
                        <div>shoes</div>
                      </div>
                      <div className="pro-price">
                        <span>$110.00</span>
                        <span>$120.00</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slider-items">
                  <div className="box-slider">
                    <div className="box-img">
                      <Image
                        src={"/assets/images/shoes-slider/8.jpg"}
                        fill
                        alt="shoes"
                      />
                    </div>
                    <div className="box-details text-start">
                      <div className="rating">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                      </div>
                      <div className="pro-details">
                        <div>solid black</div>
                        <div>sports</div>
                        <div>shoes</div>
                      </div>
                      <div className="pro-price">
                        <span>$110.00</span>
                        <span>$120.00</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slider-items">
                  <div className="box-slider">
                    <div className="box-img">
                      <Image
                        src={"/assets/images/shoes-slider/9.jpg"}
                        fill
                        alt="shoes"
                      />
                    </div>
                    <div className="box-details text-start">
                      <div className="rating">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                      </div>
                      <div className="pro-details">
                        <div>solid black</div>
                        <div>sports</div>
                        <div>shoes</div>
                      </div>
                      <div className="pro-price">
                        <span>$110.00</span>
                        <span>$120.00</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slider-items">
                  <div className="box-slider">
                    <div className="box-img">
                      <Image
                        src={"/assets/images/shoes-slider/10.jpg"}
                        fill
                        alt="shoes"
                      />
                    </div>
                    <div className="box-details text-start">
                      <div className="rating">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                      </div>
                      <div className="pro-details">
                        <div>solid black</div>
                        <div>sports</div>
                        <div>shoes</div>
                      </div>
                      <div className="pro-price">
                        <span>$110.00</span>
                        <span>$120.00</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slider-items">
                  <div className="box-slider">
                    <div className="box-img">
                      <Image
                        src={"/assets/images/shoes-slider/11.jpg"}
                        fill
                        alt="shoes"
                      />
                    </div>
                    <div className="box-details text-start">
                      <div className="rating">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                      </div>
                      <div className="pro-details">
                        <div>solid black</div>
                        <div>sports</div>
                        <div>shoes</div>
                      </div>
                      <div className="pro-price">
                        <span>$110.00</span>
                        <span>$120.00</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slider-items">
                  <div className="box-slider">
                    <div className="box-img">
                      <Image
                        src={"/assets/images/shoes-slider/12.jpg"}
                        fill
                        alt="shoes"
                      />
                    </div>
                    <div className="box-details text-start">
                      <div className="rating">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                      </div>
                      <div className="pro-details">
                        <div>solid black</div>
                        <div>sports</div>
                        <div>shoes</div>
                      </div>
                      <div className="pro-price">
                        <span>$110.00</span>
                        <span>$120.00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </Col>
          <Col md={3}>
            <div className="slider-container">
              <div className="slide-title">
                <h5>feature product </h5>
              </div>
              <Slider {...settings}>
                <div className="slider-items">
                  <div className="box-slider">
                    <div className="box-img">
                      <Image
                        src={"/assets/images/shoes-slider/1.jpg"}
                        fill
                        alt="shoes"
                      />
                    </div>
                    <div className="box-details text-start">
                      <div className="rating">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                      </div>
                      <div className="pro-details">
                        <div>solid black</div>
                        <div>sports</div>
                        <div>shoes</div>
                      </div>
                      <div className="pro-price">
                        <span>$110.00</span>
                        <span>$120.00</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="slider-items">
                  <div className="box-slider">
                    <div className="box-img">
                      <Image
                        src={"/assets/images/shoes-slider/2.jpg"}
                        fill
                        alt="shoes"
                      />
                    </div>
                    <div className="box-details text-start">
                      <div className="rating">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                      </div>
                      <div className="pro-details">
                        <div>solid black</div>
                        <div>sports</div>
                        <div>shoes</div>
                      </div>
                      <div className="pro-price">
                        <span>$110.00</span>
                        <span>$120.00</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slider-items">
                  <div className="box-slider">
                    <div className="box-img">
                      <Image
                        src={"/assets/images/shoes-slider/3.jpg"}
                        fill
                        alt="shoes"
                      />
                    </div>
                    <div className="box-details text-start">
                      <div className="rating">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                      </div>
                      <div className="pro-details">
                        <div>solid black</div>
                        <div>sports</div>
                        <div>shoes</div>
                      </div>
                      <div className="pro-price">
                        <span>$110.00</span>
                        <span>$120.00</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slider-items">
                  <div className="box-slider">
                    <div className="box-img">
                      <Image
                        src={"/assets/images/shoes-slider/4.jpg"}
                        fill
                        alt="shoes"
                      />
                    </div>
                    <div className="box-details text-start">
                      <div className="rating">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                      </div>
                      <div className="pro-details">
                        <div>solid black</div>
                        <div>sports</div>
                        <div>shoes</div>
                      </div>
                      <div className="pro-price">
                        <span>$110.00</span>
                        <span>$120.00</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slider-items">
                  <div className="box-slider">
                    <div className="box-img">
                      <Image
                        src={"/assets/images/shoes-slider/5.jpg"}
                        fill
                        alt="shoes"
                      />
                    </div>
                    <div className="box-details text-start">
                      <div className="rating">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                      </div>
                      <div className="pro-details">
                        <div>solid black</div>
                        <div>sports</div>
                        <div>shoes</div>
                      </div>
                      <div className="pro-price">
                        <span>$110.00</span>
                        <span>$120.00</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slider-items">
                  <div className="box-slider">
                    <div className="box-img">
                      <Image
                        src={"/assets/images/shoes-slider/6.jpg"}
                        fill
                        alt="shoes"
                      />
                    </div>
                    <div className="box-details text-start">
                      <div className="rating">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                      </div>
                      <div className="pro-details">
                        <div>solid black</div>
                        <div>sports</div>
                        <div>shoes</div>
                      </div>
                      <div className="pro-price">
                        <span>$110.00</span>
                        <span>$120.00</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slider-items">
                  <div className="box-slider">
                    <div className="box-img">
                      <Image
                        src={"/assets/images/shoes-slider/7.jpg"}
                        fill
                        alt="shoes"
                      />
                    </div>
                    <div className="box-details text-start">
                      <div className="rating">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                      </div>
                      <div className="pro-details">
                        <div>solid black</div>
                        <div>sports</div>
                        <div>shoes</div>
                      </div>
                      <div className="pro-price">
                        <span>$110.00</span>
                        <span>$120.00</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slider-items">
                  <div className="box-slider">
                    <div className="box-img">
                      <Image
                        src={"/assets/images/shoes-slider/8.jpg"}
                        fill
                        alt="shoes"
                      />
                    </div>
                    <div className="box-details text-start">
                      <div className="rating">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                      </div>
                      <div className="pro-details">
                        <div>solid black</div>
                        <div>sports</div>
                        <div>shoes</div>
                      </div>
                      <div className="pro-price">
                        <span>$110.00</span>
                        <span>$120.00</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slider-items">
                  <div className="box-slider">
                    <div className="box-img">
                      <Image
                        src={"/assets/images/shoes-slider/9.jpg"}
                        fill
                        alt="shoes"
                      />
                    </div>
                    <div className="box-details text-start">
                      <div className="rating">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                      </div>
                      <div className="pro-details">
                        <div>solid black</div>
                        <div>sports</div>
                        <div>shoes</div>
                      </div>
                      <div className="pro-price">
                        <span>$110.00</span>
                        <span>$120.00</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slider-items">
                  <div className="box-slider">
                    <div className="box-img">
                      <Image
                        src={"/assets/images/shoes-slider/10.jpg"}
                        fill
                        alt="shoes"
                      />
                    </div>
                    <div className="box-details text-start">
                      <div className="rating">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                      </div>
                      <div className="pro-details">
                        <div>solid black</div>
                        <div>sports</div>
                        <div>shoes</div>
                      </div>
                      <div className="pro-price">
                        <span>$110.00</span>
                        <span>$120.00</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slider-items">
                  <div className="box-slider">
                    <div className="box-img">
                      <Image
                        src={"/assets/images/shoes-slider/11.jpg"}
                        fill
                        alt="shoes"
                      />
                    </div>
                    <div className="box-details text-start">
                      <div className="rating">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                      </div>
                      <div className="pro-details">
                        <div>solid black</div>
                        <div>sports</div>
                        <div>shoes</div>
                      </div>
                      <div className="pro-price">
                        <span>$110.00</span>
                        <span>$120.00</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slider-items">
                  <div className="box-slider">
                    <div className="box-img">
                      <Image
                        src={"/assets/images/shoes-slider/12.jpg"}
                        fill
                        alt="shoes"
                      />
                    </div>
                    <div className="box-details text-start">
                      <div className="rating">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                      </div>
                      <div className="pro-details">
                        <div>solid black</div>
                        <div>sports</div>
                        <div>shoes</div>
                      </div>
                      <div className="pro-price">
                        <span>$110.00</span>
                        <span>$120.00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </Col>
          <Col md={3}>
            <div className="slider-container">
              <div className="slide-title">
                <h5>best seller</h5>
              </div>
              <Slider {...settings}>
                <div className="slider-items">
                  <div className="box-slider">
                    <div className="box-img">
                      <Image
                        src={"/assets/images/shoes-slider/1.jpg"}
                        fill
                        alt="shoes"
                      />
                    </div>
                    <div className="box-details text-start">
                      <div className="rating">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                      </div>
                      <div className="pro-details">
                        <div>solid black</div>
                        <div>sports</div>
                        <div>shoes</div>
                      </div>
                      <div className="pro-price">
                        <span>$110.00</span>
                        <span>$120.00</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="slider-items">
                  <div className="box-slider">
                    <div className="box-img">
                      <Image
                        src={"/assets/images/shoes-slider/2.jpg"}
                        fill
                        alt="shoes"
                      />
                    </div>
                    <div className="box-details text-start">
                      <div className="rating">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                      </div>
                      <div className="pro-details">
                        <div>solid black</div>
                        <div>sports</div>
                        <div>shoes</div>
                      </div>
                      <div className="pro-price">
                        <span>$110.00</span>
                        <span>$120.00</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slider-items">
                  <div className="box-slider">
                    <div className="box-img">
                      <Image
                        src={"/assets/images/shoes-slider/3.jpg"}
                        fill
                        alt="shoes"
                      />
                    </div>
                    <div className="box-details text-start">
                      <div className="rating">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                      </div>
                      <div className="pro-details">
                        <div>solid black</div>
                        <div>sports</div>
                        <div>shoes</div>
                      </div>
                      <div className="pro-price">
                        <span>$110.00</span>
                        <span>$120.00</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slider-items">
                  <div className="box-slider">
                    <div className="box-img">
                      <Image
                        src={"/assets/images/shoes-slider/4.jpg"}
                        fill
                        alt="shoes"
                      />
                    </div>
                    <div className="box-details text-start">
                      <div className="rating">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                      </div>
                      <div className="pro-details">
                        <div>solid black</div>
                        <div>sports</div>
                        <div>shoes</div>
                      </div>
                      <div className="pro-price">
                        <span>$110.00</span>
                        <span>$120.00</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slider-items">
                  <div className="box-slider">
                    <div className="box-img">
                      <Image
                        src={"/assets/images/shoes-slider/5.jpg"}
                        fill
                        alt="shoes"
                      />
                    </div>
                    <div className="box-details text-start">
                      <div className="rating">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                      </div>
                      <div className="pro-details">
                        <div>solid black</div>
                        <div>sports</div>
                        <div>shoes</div>
                      </div>
                      <div className="pro-price">
                        <span>$110.00</span>
                        <span>$120.00</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slider-items">
                  <div className="box-slider">
                    <div className="box-img">
                      <Image
                        src={"/assets/images/shoes-slider/6.jpg"}
                        fill
                        alt="shoes"
                      />
                    </div>
                    <div className="box-details text-start">
                      <div className="rating">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                      </div>
                      <div className="pro-details">
                        <div>solid black</div>
                        <div>sports</div>
                        <div>shoes</div>
                      </div>
                      <div className="pro-price">
                        <span>$110.00</span>
                        <span>$120.00</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slider-items">
                  <div className="box-slider">
                    <div className="box-img">
                      <Image
                        src={"/assets/images/shoes-slider/7.jpg"}
                        fill
                        alt="shoes"
                      />
                    </div>
                    <div className="box-details text-start">
                      <div className="rating">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                      </div>
                      <div className="pro-details">
                        <div>solid black</div>
                        <div>sports</div>
                        <div>shoes</div>
                      </div>
                      <div className="pro-price">
                        <span>$110.00</span>
                        <span>$120.00</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slider-items">
                  <div className="box-slider">
                    <div className="box-img">
                      <Image
                        src={"/assets/images/shoes-slider/8.jpg"}
                        fill
                        alt="shoes"
                      />
                    </div>
                    <div className="box-details text-start">
                      <div className="rating">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                      </div>
                      <div className="pro-details">
                        <div>solid black</div>
                        <div>sports</div>
                        <div>shoes</div>
                      </div>
                      <div className="pro-price">
                        <span>$110.00</span>
                        <span>$120.00</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slider-items">
                  <div className="box-slider">
                    <div className="box-img">
                      <Image
                        src={"/assets/images/shoes-slider/9.jpg"}
                        fill
                        alt="shoes"
                      />
                    </div>
                    <div className="box-details text-start">
                      <div className="rating">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                      </div>
                      <div className="pro-details">
                        <div>solid black</div>
                        <div>sports</div>
                        <div>shoes</div>
                      </div>
                      <div className="pro-price">
                        <span>$110.00</span>
                        <span>$120.00</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slider-items">
                  <div className="box-slider">
                    <div className="box-img">
                      <Image
                        src={"/assets/images/shoes-slider/10.jpg"}
                        fill
                        alt="shoes"
                      />
                    </div>
                    <div className="box-details text-start">
                      <div className="rating">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                      </div>
                      <div className="pro-details">
                        <div>solid black</div>
                        <div>sports</div>
                        <div>shoes</div>
                      </div>
                      <div className="pro-price">
                        <span>$110.00</span>
                        <span>$120.00</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slider-items">
                  <div className="box-slider">
                    <div className="box-img">
                      <Image
                        src={"/assets/images/shoes-slider/11.jpg"}
                        fill
                        alt="shoes"
                      />
                    </div>
                    <div className="box-details text-start">
                      <div className="rating">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                      </div>
                      <div className="pro-details">
                        <div>solid black</div>
                        <div>sports</div>
                        <div>shoes</div>
                      </div>
                      <div className="pro-price">
                        <span>$110.00</span>
                        <span>$120.00</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slider-items">
                  <div className="box-slider">
                    <div className="box-img">
                      <Image
                        src={"/assets/images/shoes-slider/12.jpg"}
                        fill
                        alt="shoes"
                      />
                    </div>
                    <div className="box-details text-start">
                      <div className="rating">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                      </div>
                      <div className="pro-details">
                        <div>solid black</div>
                        <div>sports</div>
                        <div>shoes</div>
                      </div>
                      <div className="pro-price">
                        <span>$110.00</span>
                        <span>$120.00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </Col>
          <Col md={3}>
            <div className="slider-container">
              <div className="slide-title">
                <h5>on sell</h5>
              </div>
              <Slider {...settings}>
                <div className="slider-items">
                  <div className="box-slider">
                    <div className="box-img">
                      <Image
                        src={"/assets/images/shoes-slider/1.jpg"}
                        fill
                        alt="shoes"
                      />
                    </div>
                    <div className="box-details text-start">
                      <div className="rating">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                      </div>
                      <div className="pro-details">
                        <div>solid black</div>
                        <div>sports</div>
                        <div>shoes</div>
                      </div>
                      <div className="pro-price">
                        <span>$110.00</span>
                        <span>$120.00</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="slider-items">
                  <div className="box-slider">
                    <div className="box-img">
                      <Image
                        src={"/assets/images/shoes-slider/2.jpg"}
                        fill
                        alt="shoes"
                      />
                    </div>
                    <div className="box-details text-start">
                      <div className="rating">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                      </div>
                      <div className="pro-details">
                        <div>solid black</div>
                        <div>sports</div>
                        <div>shoes</div>
                      </div>
                      <div className="pro-price">
                        <span>$110.00</span>
                        <span>$120.00</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slider-items">
                  <div className="box-slider">
                    <div className="box-img">
                      <Image
                        src={"/assets/images/shoes-slider/3.jpg"}
                        fill
                        alt="shoes"
                      />
                    </div>
                    <div className="box-details text-start">
                      <div className="rating">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                      </div>
                      <div className="pro-details">
                        <div>solid black</div>
                        <div>sports</div>
                        <div>shoes</div>
                      </div>
                      <div className="pro-price">
                        <span>$110.00</span>
                        <span>$120.00</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slider-items">
                  <div className="box-slider">
                    <div className="box-img">
                      <Image
                        src={"/assets/images/shoes-slider/4.jpg"}
                        fill
                        alt="shoes"
                      />
                    </div>
                    <div className="box-details text-start">
                      <div className="rating">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                      </div>
                      <div className="pro-details">
                        <div>solid black</div>
                        <div>sports</div>
                        <div>shoes</div>
                      </div>
                      <div className="pro-price">
                        <span>$110.00</span>
                        <span>$120.00</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slider-items">
                  <div className="box-slider">
                    <div className="box-img">
                      <Image
                        src={"/assets/images/shoes-slider/5.jpg"}
                        fill
                        alt="shoes"
                      />
                    </div>
                    <div className="box-details text-start">
                      <div className="rating">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                      </div>
                      <div className="pro-details">
                        <div>solid black</div>
                        <div>sports</div>
                        <div>shoes</div>
                      </div>
                      <div className="pro-price">
                        <span>$110.00</span>
                        <span>$120.00</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slider-items">
                  <div className="box-slider">
                    <div className="box-img">
                      <Image
                        src={"/assets/images/shoes-slider/6.jpg"}
                        fill
                        alt="shoes"
                      />
                    </div>
                    <div className="box-details text-start">
                      <div className="rating">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                      </div>
                      <div className="pro-details">
                        <div>solid black</div>
                        <div>sports</div>
                        <div>shoes</div>
                      </div>
                      <div className="pro-price">
                        <span>$110.00</span>
                        <span>$120.00</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="slider-items">
                  <div className="box-slider">
                    <div className="box-img">
                      <Image
                        src={"/assets/images/shoes-slider/7.jpg"}
                        fill
                        alt="shoes"
                      />
                    </div>
                    <div className="box-details text-start">
                      <div className="rating">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                      </div>
                      <div className="pro-details">
                        <div>solid black</div>
                        <div>sports</div>
                        <div>shoes</div>
                      </div>
                      <div className="pro-price">
                        <span>$110.00</span>
                        <span>$120.00</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slider-items">
                  <div className="box-slider">
                    <div className="box-img">
                      <Image
                        src={"/assets/images/shoes-slider/8.jpg"}
                        fill
                        alt="shoes"
                      />
                    </div>
                    <div className="box-details text-start">
                      <div className="rating">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                      </div>
                      <div className="pro-details">
                        <div>solid black</div>
                        <div>sports</div>
                        <div>shoes</div>
                      </div>
                      <div className="pro-price">
                        <span>$110.00</span>
                        <span>$120.00</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slider-items">
                  <div className="box-slider">
                    <div className="box-img">
                      <Image
                        src={"/assets/images/shoes-slider/9.jpg"}
                        fill
                        alt="shoes"
                      />
                    </div>
                    <div className="box-details text-start">
                      <div className="rating">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                      </div>
                      <div className="pro-details">
                        <div>solid black</div>
                        <div>sports</div>
                        <div>shoes</div>
                      </div>
                      <div className="pro-price">
                        <span>$110.00</span>
                        <span>$120.00</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slider-items">
                  <div className="box-slider">
                    <div className="box-img">
                      <Image
                        src={"/assets/images/shoes-slider/10.jpg"}
                        fill
                        alt="shoes"
                      />
                    </div>
                    <div className="box-details text-start">
                      <div className="rating">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                      </div>
                      <div className="pro-details">
                        <div>solid black</div>
                        <div>sports</div>
                        <div>shoes</div>
                      </div>
                      <div className="pro-price">
                        <span>$110.00</span>
                        <span>$120.00</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slider-items">
                  <div className="box-slider">
                    <div className="box-img">
                      <Image
                        src={"/assets/images/shoes-slider/11.jpg"}
                        fill
                        alt="shoes"
                      />
                    </div>
                    <div className="box-details text-start">
                      <div className="rating">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                      </div>
                      <div className="pro-details">
                        <div>solid black</div>
                        <div>sports</div>
                        <div>shoes</div>
                      </div>
                      <div className="pro-price">
                        <span>$110.00</span>
                        <span>$120.00</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slider-items">
                  <div className="box-slider">
                    <div className="box-img">
                      <Image
                        src={"/assets/images/shoes-slider/12.jpg"}
                        fill
                        alt="shoes"
                      />
                    </div>
                    <div className="box-details text-start">
                      <div className="rating">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                      </div>
                      <div className="pro-details">
                        <div>solid black</div>
                        <div>sports</div>
                        <div>shoes</div>
                      </div>
                      <div className="pro-price">
                        <span>$110.00</span>
                        <span>$120.00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

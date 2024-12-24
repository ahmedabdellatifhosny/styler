// @ts-nocheck
"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Row, Col, Container } from "react-bootstrap";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { getHomeFeatureProduct } from "services/homeApis";
import { useEffect, useState } from "react";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";

import Skeleton from "react-loading-skeleton";
export default function ShoesSlider() {
  const settings = {
    slidesToShow: 1,
    speed: 1100,
    rows: 4,
    slidesPerRow: 1,
    arrows: true,
  };

  const [featuredloading, setFeaturedloading] = useState(true);
  const [featureProducts, setFeatureProducts] = useState([]);

  useEffect(() => {
    async function getFeatureProduct() {
      const res = await getHomeFeatureProduct();
      setFeatureProducts(res);
      setFeaturedloading(false);
    }
    getFeatureProduct();
  }, []);

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
                {featuredloading ? (
                  <Skeleton height={300} />
                ) : (
                  featureProducts.map((featureProduct, index) => (
                    <div className="slider-items" key={index}>
                      <div className="box-slider">
                        <div className="box-img">
                          <Image
                            src={featureProduct.featured_image_url}
                            fill
                            alt={featureProduct.name}
                          />
                        </div>
                        <div className="box-details text-start">
                          <div className="rating">
                            {[...Array(5)].map((_, index) => (
                              <FontAwesomeIcon
                                key={index}
                                icon={
                                  index < featureProduct.stars
                                    ? solidStar
                                    : emptyStar
                                }
                              />
                            ))}
                          </div>
                          <div className="pro-details">
                            <div>{featureProduct.name}</div>
                            <div>sports</div>
                            <div>shoes</div>
                          </div>
                          <div className="pro-price">
                            <span>{featureProduct.sell_price}</span>
                            <span>{featureProduct.discount}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </Slider>
            </div>
          </Col>
          <Col md={3}>
            <div className="slider-container">
              <div className="slide-title">
                <h5>feature product </h5>
              </div>
              <Slider {...settings}>
                {featuredloading ? (
                  <Skeleton height={300} />
                ) : (
                  featureProducts.map((featureProduct, index) => (
                    <div className="slider-items" key={index}>
                      <div className="box-slider">
                        <div className="box-img">
                          <Image
                            src={featureProduct.featured_image_url}
                            fill
                            alt={featureProduct.name}
                          />
                        </div>
                        <div className="box-details text-start">
                          <div className="rating">
                            {[...Array(5)].map((_, index) => (
                              <FontAwesomeIcon
                                key={index}
                                icon={
                                  index < featureProduct.stars
                                    ? solidStar
                                    : emptyStar
                                }
                              />
                            ))}
                          </div>
                          <div className="pro-details">
                            <div>{featureProduct.name}</div>
                            <div>sports</div>
                            <div>shoes</div>
                          </div>
                          <div className="pro-price">
                            <span>{featureProduct.sell_price}</span>
                            <span>{featureProduct.discount}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </Slider>
            </div>
          </Col>
          <Col md={3}>
            <div className="slider-container">
              <div className="slide-title">
                <h5>best seller</h5>
              </div>
              <Slider {...settings}>
                {featuredloading ? (
                  <Skeleton height={300} />
                ) : (
                  featureProducts.map((featureProduct, index) => (
                    <div className="slider-items" key={index}>
                      <div className="box-slider">
                        <div className="box-img">
                          <Image
                            src={featureProduct.featured_image_url}
                            fill
                            alt={featureProduct.name}
                          />
                        </div>
                        <div className="box-details text-start">
                          <div className="rating">
                            {[...Array(5)].map((_, index) => (
                              <FontAwesomeIcon
                                key={index}
                                icon={
                                  index < featureProduct.stars
                                    ? solidStar
                                    : emptyStar
                                }
                              />
                            ))}
                          </div>
                          <div className="pro-details">
                            <div>{featureProduct.name}</div>
                            <div>sports</div>
                            <div>shoes</div>
                          </div>
                          <div className="pro-price">
                            <span>{featureProduct.sell_price}</span>
                            <span>{featureProduct.discount}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </Slider>
            </div>
          </Col>
          <Col md={3}>
            <div className="slider-container">
              <div className="slide-title">
                <h5>on sell</h5>
              </div>
              <Slider {...settings}>
                {featuredloading ? (
                  <Skeleton height={300} />
                ) : (
                  featureProducts.map((featureProduct, index) => (
                    <div className="slider-items" key={index}>
                      <div className="box-slider">
                        <div className="box-img">
                          <Image
                            src={featureProduct.featured_image_url}
                            fill
                            alt={featureProduct.name}
                          />
                        </div>
                        <div className="box-details text-start">
                          <div className="rating">
                            {[...Array(5)].map((_, index) => (
                              <FontAwesomeIcon
                                key={index}
                                icon={
                                  index < featureProduct.stars
                                    ? solidStar
                                    : emptyStar
                                }
                              />
                            ))}
                          </div>
                          <div className="pro-details">
                            <div>{featureProduct.name}</div>
                            <div>sports</div>
                            <div>shoes</div>
                          </div>
                          <div className="pro-price">
                            <span>{featureProduct.sell_price}</span>
                            <span>{featureProduct.discount}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </Slider>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

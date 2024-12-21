"use client";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getCategories } from "services/homeApis";
import Link from "next/link";
export default function AdditionalProduct() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      async function getCats() {
        const cats = await getCategories();
        setCategories(cats);
        setLoading(false);
      }
      getCats();
    } catch (error) {
      console.log(error);
    }
  }, []);

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
          autoPlay: true,
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
            {loading ? (
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
            ) : (
              categories.map((category, index) => {
                return (
                  <Link href={`/products/category/${category.slug}`} key={index}>
                  <div className="special-pro" key={index}>
                    <div className="special-pro-img">
                      <Image
                        src={category.featured_image_url}
                        alt={category.name}
                        fill
                      />
                    </div>
                    <h4 className="date">{category.created_at}</h4>
                    <p>
                    {category.description}
                    </p>
                    <h6>by: {category.updated_at} , 2 Comment</h6>
                  </div>
                  </Link>
                );
              })
            )}
          </Slider>
        </div>
      </Container>
    </section>
  );
}

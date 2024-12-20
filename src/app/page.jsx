"use client";
import Header from "../components/1-layout/Header";
import Hero from "../components/2-hero/Hero";
import About from "../components/4-about/About";
import SpecialProduct from "../components/5-SpecialProduct/SpecialProduct";
import ShoesSlider from "../components/8-shoes-slider/ShoesSlider";
import AdditionalProduct from "../components/10-additional-product/AdditionalProduct";
import Feature from "../components/12-feature/Feature";
import Instagram from "../components/14-instagram/Instagram";
import Brands from "../components/13-brands/Brands";
import Newsletter from "../components/16-newsletter/Newsletter";
import Myaccount from "../components/15-myaccount/Myaccount";
import Footer from "../components/1-layout/Footer";
import ScrollToTop from "../components/scroll/ScrollToTop";
import "../app/styles/styles.css";
import Loader from "../components/loader/Loader";
import { useState, useEffect } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000); 
  }, []);

  return (
    <>
      {loading ? (
        <Loader /> 
      ) : (
        <>
          <Header />
          <Hero />
          <Brands />
          {/* <About /> */}
          <SpecialProduct />
          <ShoesSlider />
          <AdditionalProduct />
          <Feature />
          <Instagram />
          <Newsletter />
          <Myaccount />
          <Footer />
          <ScrollToTop />
        </>
      )}
    </>
  );
}

"use client";
import Header from "../../components/1-layout/Header";
import Footer from "../../components/1-layout/Footer";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Container } from "react-bootstrap";
import Image from "next/image";
import Table from "react-bootstrap/Table";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import Link from "next/link";

export default function Cart() {
  const initialProducts = [
    {
      id: 1,
      name: "converse blue",
      price: 15.0,
      image: "/assets/images/special-products/1.png",
    },
    {
      id: 2,
      name: "converse green",
      price: 20.0,
      image: "/assets/images/special-products/2.png",
    },
    {
      id: 3,
      name: "converse brown",
      price: 30.0,
      image: "/assets/images/special-products/3.png",
    },
  ];

  const [products, setProducts] = useState(initialProducts);
  const [counters, setCounters] = useState(initialProducts.map(() => 1));

  function incrementCounter(index) {
    const updatedCounters = [...counters];
    updatedCounters[index] += 1;
    setCounters(updatedCounters);
  }

  function decrementCounter(index) {
    const updatedCounters = [...counters];
    if (updatedCounters[index] > 1) {
      updatedCounters[index] -= 1;
      setCounters(updatedCounters);
    }
  }

  function deleteRow(index) {
    const updatedProducts = products.filter((_, i) => i !== index);
    const updatedCounters = counters.filter((_, i) => i !== index);
    setProducts(updatedProducts);
    setCounters(updatedCounters);
  }

  const grandTotal = products.reduce((acc, product, index) => {
    return acc + product.price * counters[index];
  }, 0);

  return (
    <>
      <Header />

      <section className="cart text-center">
        <div className="cart-header">
          <h2 className="text-capitalize">cart</h2>
          <Breadcrumb>
            <Breadcrumb.Item href="#" active>
              Home
            </Breadcrumb.Item>
            <Breadcrumb.Item href="#">cart</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <Container>
          <div className="table-cart">
            <Table className="table-responsive">
              <thead>
                <tr>
                  <th>image</th>
                  <th>product name</th>
                  <th>price</th>
                  <th>quantity</th>
                  <th>total</th>
                  <th>action</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, index) => (
                  <tr key={product.id}>
                    <td>
                      <div className="td-image">
                        <Image src={product.image} alt={product.name} fill />
                      </div>
                    </td>
                    <td>{product.name}</td>
                    <td>{product.price.toFixed(2)} EGP</td>
                    <td>
                      <div className="counter">
                        <span
                          className="minus"
                          onClick={() => decrementCounter(index)}
                        >
                          <FontAwesomeIcon icon={faChevronLeft} />
                        </span>
                        <span className="num">{counters[index]}</span>
                        <span
                          className="plus"
                          onClick={() => incrementCounter(index)}
                        >
                          <FontAwesomeIcon icon={faChevronRight} />
                        </span>
                      </div>
                    </td>
                    <td>{(counters[index] * product.price).toFixed(2)} EGP</td>
                    <td>
                      <FontAwesomeIcon
                        icon={faXmark}
                        onClick={() => deleteRow(index)}
                      />
                    </td>
                  </tr>
                ))}

                {products.length > 0 && (
                  <tr>
                    <td
                      // @ts-ignore
                      colSpan="4"
                      style={{
                        textAlign: "center",
                        fontWeight: "bold",
                        padding: "20px 0",
                      }}
                    >
                      Total price:
                    </td>
                    <td style={{ fontWeight: "bold" }}>
                      {grandTotal.toFixed(2)} EGP
                    </td>
                    <td></td>
                  </tr>
                )}
              </tbody>
            </Table>
          </div>
          <div className="footer-table-nav">
            <Link href="/products">
              <Button variant="primary">continue shopping</Button>
            </Link>
            <Link href="/checkout">
              <Button variant="primary">check out</Button>
            </Link>
          </div>
        </Container>
      </section>
      <Footer />
    </>
  );
}

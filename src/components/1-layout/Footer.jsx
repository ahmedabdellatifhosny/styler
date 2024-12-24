import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Link from "next/link";
import { useState } from "react";
export default function Footer() {
  const [mewsletter, setMewsletter] = useState({
    email: "",
  });
  function handleNewsLetter(e) {
    e.preventDefault();
  }
  return (
    <footer className=" footer ">
      <Container>
        <div className="multi-footer">
          <Row>
            <Col>
              <div className="store-information">
                <div className="logo">
                  <p>styler store</p>
                </div>
                <p>
                  Discover the latest trends and enjoy seamless shopping with
                  our exclusive collections.
                </p>
                <ul className="list-unstyled">
                  <li>Multikart Demo Store, Demo Store India 345-659</li>
                  <li>123-456-7898</li>
                  <li>Support@Multikart.com</li>
                </ul>
              </div>
            </Col>
            <Col>
              <div className="footer-cat">
                <h3>categories</h3>
                <ul className="list-unstyled">
                  <Link href={"/products/brand/nike"}>
                    <li>nike</li>
                  </Link>

                  <Link href={"/products/brand/adidas"}>
                    <li>addidas</li>
                  </Link>
                  <Link href={"/products/brand/balenciaga"}>
                    <li>belansiaga</li>
                  </Link>
                </ul>
              </div>
            </Col>
            <Col>
              <div className="useful-links">
                <h3>useful links</h3>
                <ul className="list-unstyled">
                  <Link href={"#"}>
                    <li>home</li>
                  </Link>
                  <Link href={"#"}>
                    <li>collections</li>
                  </Link>
                  <Link href={"#"}>
                    <li>offers</li>
                  </Link>
                </ul>
              </div>
            </Col>
            <Col>
              <h3>help center</h3>
              <ul className="list-unstyled">
                <Link href={"/my-orders"}>
                  <li>my orders</li>
                </Link>
                <Link href={"/track-order"}>
                  <li>track order</li>
                </Link>
                <Link href={"/faq"}>
                  <li>faq</li>
                </Link>
                <Link href={"/contact-us"}>
                  <li>contact us</li>
                </Link>
              </ul>
            </Col>
            <Col>
              <h3>follow us</h3>
              <p>
                Never Miss Anything From Store By Signing Up To Our Newsletter.
              </p>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Enter email" value={mewsletter.email} onChange={(e) => setMewsletter({ ...mewsletter, email: e.target.value })} />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={handleNewsLetter}>
                  Submit
                </Button>
              </Form>
              <ul className="list-unstyled d-flex gap-2">
                <Link href={"#"}>
                  <li>facebook</li>
                </Link>
                <Link href={"#"}>
                  <li>youtube</li>
                </Link>
                <Link href={"#"}>
                  <li>instagram</li>
                </Link>
                <Link href={"#"}>
                  <li>tiktok</li>
                </Link>
              </ul>
            </Col>
          </Row>
        </div>
        <div className="copyright text-center mt-5">
          <Row>
            <Col md={6}>
              all right receved &copy;
              <a href={"#"} className="text-danger">
                develogs 2024
              </a>{" "}
            </Col>
            <Col md={6}>
              <Image
                src={"/assets/images/payment/payment.png"}
                width={450}
                height={41}
                alt="payment methods"
                priority
                quality={100}
              />
            </Col>
          </Row>
        </div>
      </Container>
    </footer>
  );
}

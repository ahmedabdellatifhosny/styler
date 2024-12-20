import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";

export default function About() {
  return (
    <section className="about text-center">
      <Container>
        <h6>about us</h6>
        <h2>welcome to styler store</h2>

        <div className="line">
          <ul className=" d-flex list-unstyled justify-content-center align-items-center gap-1">
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>

        <Row>
          <Col md={6}>
            <Image
              src={"/assets/images/banner/banner1.png"}
              width={500}
              height={200}
              alt="about banner"
              quality={100}
              loading="lazy"
            />
          </Col>
          <Col md={6}>
            <Image
              src={"/assets/images/banner/banner2.png"}
              width={500}
              height={200}
              alt="about banner"
              quality={100}
              loading="lazy"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

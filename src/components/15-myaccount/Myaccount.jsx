import { Container } from "react-bootstrap";

export default function Myaccount() {
  return (
    <section className="my-account text-center text-uppercase ">
      <Container>
        <h5 className="mb-3 fw-bold">my account</h5>
        <ul className="list-unstyled d-flex justify-content-center gap-3 flex-wrap ">
          <li>cart</li>
          <li>my order</li>
          <li>faq</li>
          <li>new product</li>
          <li>featured product</li>
        </ul>
      </Container>
    </section>
  );
}

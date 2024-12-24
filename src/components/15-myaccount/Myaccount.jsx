import Link from "next/link";
import { Container } from "react-bootstrap";

export default function Myaccount() {
  return (
    <section className="my-account text-center text-uppercase ">
      <Container>
        <h5 className="mb-3 fw-bold">my account</h5>
        <ul className="list-unstyled d-flex justify-content-center gap-3 flex-wrap ">
          <li>
            <Link href="/cart">cart</Link>
          </li>
          <Link href="/my-orders">my orders</Link>
          <Link href="/faq">faq</Link>
        </ul>
      </Container>
    </section>
  );
}

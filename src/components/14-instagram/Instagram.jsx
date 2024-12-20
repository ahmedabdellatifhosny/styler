"use client";
import { Col, Container, Row } from 'react-bootstrap';
import Image from 'next/image';

export default function Instagram() {
  return (
    <section className='instagram text-center'>
      {/* <h3># instagram</h3> */}
      <Container>
       <Row>
        <Col md={3}>
        <div className="insta-image">
        <Image src="/assets/images/instagram/1.png"  alt="instagram" fill />
        </div>
        
        </Col>
        <Col md={3}>
        <div className="insta-image">
        <Image src="/assets/images/instagram/2.png"  alt="instagram" fill />
        </div>
        </Col>
        <Col md={3}>
        <div className="insta-image">
        <Image src="/assets/images/instagram/3.png"  alt="instagram" fill />
        </div>
        </Col>
        <Col md={3}>
        <div className="insta-image">
        <Image src="/assets/images/instagram/4.png"  alt="instagram" fill />
        </div>
        </Col>
       </Row>
      </Container>
    </section>
  )
}

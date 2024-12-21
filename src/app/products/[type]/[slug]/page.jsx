"use client";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "components/1-layout/Footer";
import Header from "components/1-layout/Header";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import Form from "react-bootstrap/Form";
import Accordion from "react-bootstrap/Accordion";
import { useParams } from "next/navigation";
import { getProducts } from "services/homeApis";
import { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";

export default function Page() {
  const params = useParams();
  const { type } = params;
  const { slug } = params;

  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      try {
        const data = await getProducts(type, slug);
        console.log(data);
        setProducts(data);
        setLoading(false);
      } catch (err) {
        setError(`error : ${type} not found`);
        // console.error(err);
      }
    }
    getData();
  }, [slug , type]);

  return (
    <>
      <Header />
      <section className="products">
        <Container>
          <Row>
            <Col md={3}>
              <div className="filters">
                <div className="categories-filter">
                  <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Categories</Accordion.Header>
                      <Accordion.Body>
                        <Form>
                          {["checkbox"].map((type) => (
                            <div key={`default-${type}`} className="mb-3">
                              <Form.Check
                                type={type}
                                id={`default-${type}`}
                                label={`default ${type}`}
                              />
                            </div>
                          ))}
                          {["checkbox"].map((type) => (
                            <div key={`default-${type}`} className="mb-3">
                              <Form.Check
                                type={type}
                                id={`default-${type}`}
                                label={`default ${type}`}
                              />
                            </div>
                          ))}
                          {["checkbox"].map((type) => (
                            <div key={`default-${type}`} className="mb-3">
                              <Form.Check
                                type={type}
                                id={`default-${type}`}
                                label={`default ${type}`}
                              />
                            </div>
                          ))}
                          {["checkbox"].map((type) => (
                            <div key={`default-${type}`} className="mb-3">
                              <Form.Check
                                type={type}
                                id={`default-${type}`}
                                label={`default ${type}`}
                              />
                            </div>
                          ))}
                          {["checkbox"].map((type) => (
                            <div key={`default-${type}`} className="mb-3">
                              <Form.Check
                                type={type}
                                id={`default-${type}`}
                                label={`default ${type}`}
                              />
                            </div>
                          ))}
                          {["checkbox"].map((type) => (
                            <div key={`default-${type}`} className="mb-3">
                              <Form.Check
                                type={type}
                                id={`default-${type}`}
                                label={`default ${type}`}
                              />
                            </div>
                          ))}
                        </Form>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>

                <div className="brands-filter">
                  <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>brands</Accordion.Header>
                      <Accordion.Body>
                        <Form>
                          {["checkbox"].map((type) => (
                            <div key={`default-${type}`} className="mb-3">
                              <Form.Check
                                type={type}
                                id={`default-${type}`}
                                label={`default ${type}`}
                              />
                            </div>
                          ))}
                          {["checkbox"].map((type) => (
                            <div key={`default-${type}`} className="mb-3">
                              <Form.Check
                                type={type}
                                id={`default-${type}`}
                                label={`default ${type}`}
                              />
                            </div>
                          ))}
                          {["checkbox"].map((type) => (
                            <div key={`default-${type}`} className="mb-3">
                              <Form.Check
                                type={type}
                                id={`default-${type}`}
                                label={`default ${type}`}
                              />
                            </div>
                          ))}
                          {["checkbox"].map((type) => (
                            <div key={`default-${type}`} className="mb-3">
                              <Form.Check
                                type={type}
                                id={`default-${type}`}
                                label={`default ${type}`}
                              />
                            </div>
                          ))}
                          {["checkbox"].map((type) => (
                            <div key={`default-${type}`} className="mb-3">
                              <Form.Check
                                type={type}
                                id={`default-${type}`}
                                label={`default ${type}`}
                              />
                            </div>
                          ))}
                          {["checkbox"].map((type) => (
                            <div key={`default-${type}`} className="mb-3">
                              <Form.Check
                                type={type}
                                id={`default-${type}`}
                                label={`default ${type}`}
                              />
                            </div>
                          ))}
                        </Form>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>

                <div className="colours-filter">
                  <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>colours</Accordion.Header>
                      <Accordion.Body>
                        <Form>
                          {["checkbox"].map((type) => (
                            <div key={`default-${type}`} className="mb-3">
                              <Form.Check
                                type={type}
                                id={`default-${type}`}
                                label={`default ${type}`}
                              />
                            </div>
                          ))}
                          {["checkbox"].map((type) => (
                            <div key={`default-${type}`} className="mb-3">
                              <Form.Check
                                type={type}
                                id={`default-${type}`}
                                label={`default ${type}`}
                              />
                            </div>
                          ))}
                          {["checkbox"].map((type) => (
                            <div key={`default-${type}`} className="mb-3">
                              <Form.Check
                                type={type}
                                id={`default-${type}`}
                                label={`default ${type}`}
                              />
                            </div>
                          ))}
                          {["checkbox"].map((type) => (
                            <div key={`default-${type}`} className="mb-3">
                              <Form.Check
                                type={type}
                                id={`default-${type}`}
                                label={`default ${type}`}
                              />
                            </div>
                          ))}
                          {["checkbox"].map((type) => (
                            <div key={`default-${type}`} className="mb-3">
                              <Form.Check
                                type={type}
                                id={`default-${type}`}
                                label={`default ${type}`}
                              />
                            </div>
                          ))}
                          {["checkbox"].map((type) => (
                            <div key={`default-${type}`} className="mb-3">
                              <Form.Check
                                type={type}
                                id={`default-${type}`}
                                label={`default ${type}`}
                              />
                            </div>
                          ))}
                        </Form>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>

                <div className="ratings-filter">
                  <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>rating</Accordion.Header>
                      <Accordion.Body>
                        <Form>
                          {["checkbox"].map((type) => (
                            <div key={`default-${type}`} className="mb-3">
                              <Form.Check
                                type={type}
                                id={`default-${type}`}
                                label={`default ${type}`}
                              />
                            </div>
                          ))}
                          {["checkbox"].map((type) => (
                            <div key={`default-${type}`} className="mb-3">
                              <Form.Check
                                type={type}
                                id={`default-${type}`}
                                label={`default ${type}`}
                              />
                            </div>
                          ))}
                          {["checkbox"].map((type) => (
                            <div key={`default-${type}`} className="mb-3">
                              <Form.Check
                                type={type}
                                id={`default-${type}`}
                                label={`default ${type}`}
                              />
                            </div>
                          ))}
                          {["checkbox"].map((type) => (
                            <div key={`default-${type}`} className="mb-3">
                              <Form.Check
                                type={type}
                                id={`default-${type}`}
                                label={`default ${type}`}
                              />
                            </div>
                          ))}
                          {["checkbox"].map((type) => (
                            <div key={`default-${type}`} className="mb-3">
                              <Form.Check
                                type={type}
                                id={`default-${type}`}
                                label={`default ${type}`}
                              />
                            </div>
                          ))}
                          {["checkbox"].map((type) => (
                            <div key={`default-${type}`} className="mb-3">
                              <Form.Check
                                type={type}
                                id={`default-${type}`}
                                label={`default ${type}`}
                              />
                            </div>
                          ))}
                        </Form>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </div>
            </Col>
            <Col md={9}>
              {error ? (
                <div className="alert bg-danger text-white">{error}</div>
              ) : (
                <></>
              )}
              <div className="products my-3">
                <Row>
                  {loading
                    ? Array.from({ length: 6 }).map((_, index) => (
                        <Col md={4} key={index}>
                          <div className="pro-box">
                            <Skeleton
                              height={147}
                              baseColor="#e0e0e0" // لون الخلفية
                              highlightColor="#c0c0c0" // لون الوميض
                            />
                            <h5 className="product-title text-start">
                              <Skeleton
                                width={"100%"}
                                baseColor="#d6d6d6"
                                highlightColor="#b3b3b3"
                              />
                            </h5>
                            <div className="rating text-start">
                              <Skeleton
                                baseColor="#d6d6d6"
                                highlightColor="#b3b3b3"
                              />
                            </div>
                            <div className="price-discount">
                              <Skeleton
                                baseColor="#d6d6d6"
                                highlightColor="#b3b3b3"
                              />
                              <div className="discount">
                                <span className="price-discount">
                                  <Skeleton
                                    baseColor="#d6d6d6"
                                    highlightColor="#b3b3b3"
                                  />
                                </span>
                                <span className="off">
                                  <Skeleton
                                    baseColor="#d6d6d6"
                                    highlightColor="#b3b3b3"
                                  />
                                </span>
                              </div>
                            </div>
                          </div>
                        </Col>
                      ))
                    : products.map((product, index) => (
                        <Col md={4} key={index}>
                          <div className="pro-box">
                            <Image
                              src={product.featured_image_url}
                              width={204}
                              height={147}
                              alt={product.name}
                            />
                            <h5 className="product-title text-start">
                              {product.name}
                            </h5>
                            <div className="rating text-start">
                              <FontAwesomeIcon icon={faStar} />
                              <FontAwesomeIcon icon={faStar} />
                              <FontAwesomeIcon icon={faStar} />
                              <FontAwesomeIcon icon={faStar} />
                              <FontAwesomeIcon icon={faStar} />
                              <span>(10)</span>
                            </div>
                            <div className="price-discount">
                              <div className="price">{product.sell_price}</div>
                              <div className="discount">
                                <span className="price-discount">
                                  {product.discount}
                                </span>
                                {/* <span className="off">5% off</span> */}
                              </div>
                            </div>
                          </div>
                        </Col>
                      ))}
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
}

"use client";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar ,
  faMagnifyingGlass,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import Modal from "react-bootstrap/Modal";
import Link from "next/link";
import {useState } from "react";
import Image from "next/image";
export default function Menu() {
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <section className="menu">
      <Container>
        <Row>
          <Col>
            <div className="logo text-start">
              <Link href="/">
                <p className="fs-5">styler</p>
              </Link>
            </div>
          </Col>
          <Col>
            <div className="menu-icons text-end">
              <Link href="/cart">
                <FontAwesomeIcon icon={faCartShopping} /> <span>1</span>
              </Link>
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                onClick={handleShowModal}
              />
            </div>
          </Col>
        </Row>
      </Container>

      <div className="modal-search">
        <Modal show={showModal} onHide={handleCloseModal} centered>
          <Modal.Header closeButton>
            <Modal.Title>Search in store</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="search-box-modal">
              <input
                type="text"
                placeholder="Search with brands and categories..."
                className="form-control"
                aria-label="Search"
              />
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                onClick={handleShowModal}
              />
            </div>
            <div className="top-search d-flex justify-content-center align-items-center mt-2">
              <ul className="list-unstyled d-flex gap-2">
                <span>Top search :</span>
                <li>Baby</li>
                <li>Essentials</li>
                <li>Bag</li>
                
              </ul>
            </div>
            <div className="products">
              <Row>
                <Col>
                  
                  <div className="pro-box">
                    <Image
                      src="/assets/images/special-products/1.png"
                      width={204}
                      height={147}
                      alt="sports shoes"
                    />
                    <h5 className="product-title text-start">
                      Nimbus Sneakers
                    </h5>
                    <h6>converse blue</h6>
                    <div className="rating text-start">
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <span>(10)</span>
                    </div>
                    <div className="price-discount">
                      <div className="price">$22.10</div>
                      <div className="discount">
                        <span className="price-discount">$22.10</span>
                        <span className="off">5% off</span>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col>
                  
                  <div className="pro-box">
                    <Image
                      src="/assets/images/special-products/2.png"
                      width={204}
                      height={147}
                      alt="sports shoes"
                    />
                    <h5 className="product-title text-start">
                      Nimbus Sneakers
                    </h5>
                    <h6>converse blue</h6>
                    <div className="rating text-start">
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <span>(10)</span>
                    </div>
                    <div className="price-discount">
                      <div className="price">$22.10</div>
                      <div className="discount">
                        <span className="price-discount">$22.10</span>
                        <span className="off">5% off</span>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col>
               
                  <div className="pro-box">
                    <Image
                      src="/assets/images/special-products/3.png"
                      width={204}
                      height={147}
                      alt="sports shoes"
                    />
                    <h5 className="product-title text-start">
                      Nimbus Sneakers
                    </h5>
                    <h6>converse blue</h6>
                    <div className="rating text-start">
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <span>(10)</span>
                    </div>
                    <div className="price-discount">
                      <div className="price">$22.10</div>
                      <div className="discount">
                        <span className="price-discount">$22.10</span>
                        <span className="off">5% off</span>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col>
                  
                  <div className="pro-box">
                    <Image
                      src="/assets/images/special-products/4.png"
                      width={204}
                      height={147}
                      alt="sports shoes"
                    />
                    <h5 className="product-title text-start">
                      Nimbus Sneakers
                    </h5>
                    <h6>converse blue</h6>
                    <div className="rating text-start">
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <span>(10)</span>
                    </div>
                    <div className="price-discount">
                      <div className="price">$22.10</div>
                      <div className="discount">
                        <span className="price-discount">$22.10</span>
                        <span className="off">5% off</span>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col>
                  
                  <div className="pro-box">
                    <Image
                      src="/assets/images/special-products/4.png"
                      width={204}
                      height={147}
                      alt="sports shoes"
                    />
                    <h5 className="product-title text-start">
                      Nimbus Sneakers
                    </h5>
                    <h6>converse blue</h6>
                    <div className="rating text-start">
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <span>(10)</span>
                    </div>
                    <div className="price-discount">
                      <div className="price">$22.10</div>
                      <div className="discount">
                        <span className="price-discount">$22.10</span>
                        <span className="off">5% off</span>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col>
                  
                  <div className="pro-box">
                    <Image
                      src="/assets/images/special-products/4.png"
                      width={204}
                      height={147}
                      alt="sports shoes"
                    />
                    <h5 className="product-title text-start">
                      Nimbus Sneakers
                    </h5>
                    <h6>converse blue</h6>
                    <div className="rating text-start">
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <span>(10)</span>
                    </div>
                    <div className="price-discount">
                      <div className="price">$22.10</div>
                      <div className="discount">
                        <span className="price-discount">$22.10</span>
                        <span className="off">5% off</span>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </section>
  );
}

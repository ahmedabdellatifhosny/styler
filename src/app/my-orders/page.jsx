"use client";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Header from "../../components/1-layout/Header";
import Footer from "../../components/1-layout/Footer";
import Table from "react-bootstrap/Table";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import Pagination from "react-bootstrap/Pagination";
export default function MyOrders() {
  return (
    <>
      <Header />
      
        <div className="my-orders-header py-3 my-3 d-flex justify-content-center align-items-center flex-column text-capitalize">
          <h3>My Orders</h3>
          <Breadcrumb className="text-center" aria-label="breadcrumb">
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item active>My Orders</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <Container>
        <div className="my-orders">
          <div className="order-details text-center">
            <div className="table-header">
              <h5 className="text-start my-4">My Orders</h5>
            </div>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Order Number </th>
                  <th>Date</th>
                  <th>Amount</th>
                  <th>Payment Status </th>
                  <th>Payment Method </th>
                  <th>Option</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>#1020</td>
                  <td>06 Jul 2024 03:51:PM </td>
                  <td>$61.73 </td>
                  <td>
                    <Button variant="outline-warning">pending</Button>
                  </td>
                  <td>COD</td>
                  <td>
                    <FontAwesomeIcon icon={faEye} />
                  </td>
                </tr>
                <tr>
                  <td>#1020</td>
                  <td>06 Jul 2024 03:51:PM </td>
                  <td>$61.73 </td>
                  <td>
                    <Button variant="outline-warning">pending</Button>
                  </td>
                  <td>COD</td>
                  <td>
                    <FontAwesomeIcon icon={faEye} />
                  </td>
                </tr>
                <tr>
                  <td>#1020</td>
                  <td>06 Jul 2024 03:51:PM </td>
                  <td>$61.73 </td>
                  <td>
                    <Button variant="outline-warning">pending</Button>
                  </td>
                  <td>COD</td>
                  <td>
                    <FontAwesomeIcon icon={faEye} />
                  </td>
                </tr>
                <tr>
                  <td>#1020</td>
                  <td>06 Jul 2024 03:51:PM </td>
                  <td>$61.73 </td>
                  <td>
                    <Button variant="outline-warning">pending</Button>
                  </td>
                  <td>COD</td>
                  <td>
                    <FontAwesomeIcon icon={faEye} />
                  </td>
                </tr>
                <tr>
                  <td>#1020</td>
                  <td>06 Jul 2024 03:51:PM </td>
                  <td>$61.73 </td>
                  <td>
                    <Button variant="outline-warning">pending</Button>
                  </td>
                  <td>COD</td>
                  <td>
                    <FontAwesomeIcon icon={faEye} />
                  </td>
                </tr>
                <tr>
                  <td>#1020</td>
                  <td>06 Jul 2024 03:51:PM </td>
                  <td>$61.73 </td>
                  <td>
                    <Button variant="outline-warning">pending</Button>
                  </td>
                  <td>COD</td>
                  <td>
                    <FontAwesomeIcon icon={faEye} />
                  </td>
                </tr>
                <tr>
                  <td>#1020</td>
                  <td>06 Jul 2024 03:51:PM </td>
                  <td>$61.73 </td>
                  <td>
                    <Button variant="outline-warning">pending</Button>
                  </td>
                  <td>COD</td>
                  <td>
                    <FontAwesomeIcon icon={faEye} />
                  </td>
                </tr>
                <tr>
                  <td>#1020</td>
                  <td>06 Jul 2024 03:51:PM </td>
                  <td>$61.73 </td>
                  <td>
                    <Button variant="outline-warning">pending</Button>
                  </td>
                  <td>COD</td>
                  <td>
                    <FontAwesomeIcon icon={faEye} />
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
        <div className="pagination d-flix justify-content-center">
          <Pagination>
            <Pagination.Prev />
            <Pagination.Item>{1}</Pagination.Item>

            <Pagination.Item>{2}</Pagination.Item>
            <Pagination.Item>{3}</Pagination.Item>
            <Pagination.Item active>{4}</Pagination.Item>
            <Pagination.Item>{5}</Pagination.Item>

            <Pagination.Item>{6}</Pagination.Item>
            <Pagination.Next />
          </Pagination>
        </div>
      </Container>
      <Footer />
    </>
  );
}

"use client";
import Footer from "components/1-layout/Footer";
import Header from "components/1-layout/Header";
import { Breadcrumb, Container } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
export default function page() {
  return (
    <>
      <Header />
      <section className="faq">
        <div className="faq-header text-center">
          <h2 className="text-uppercase">faq</h2>
          <Breadcrumb>
            <Breadcrumb.Item href="#" active>
              Home
            </Breadcrumb.Item>
            <Breadcrumb.Item href="#" className="text-uppercase">
              faq
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <Container>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                How do I protect my personal information when shopping online?
              </Accordion.Header>
              <Accordion.Body>
                Use secure websites (look for https in the URL), avoid public
                Wi-Fi for sensitive transactions, regularly update passwords,
                and be cautious about sharing unnecessary personal information.
                Additionally, consider using a virtual private network (VPN) for
                added security, and monitor your financial statements regularly
                for any unauthorized transactions. Staying vigilant and adopting
                secure online practices is key to protecting your personal
                information.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                What is the difference between refurbished and new
              </Accordion.Header>
              <Accordion.Body>
                Refurbished products have been repaired and tested to ensure
                functionality. They may show slight wear but are generally more
                affordable than new items. New products are unused and come in
                original packaging. When purchasing refurbished items, look for
                those certified by the manufacturer or a reputable third party
                to ensure quality and reliability.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                How can I find out about product recalls?
              </Accordion.Header>
              <Accordion.Body>
                Check the products official website, the manufacturers
                website, or government websites for recalls. You can also sign
                up for email alerts from consumer protection organizations.
                Additionally, following the manufacturer and relevant product
                safety organizations on social media can provide timely updates
                on recalls and safety concerns.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>
                Can I cancel an order after it has been placed?
              </Accordion.Header>
              <Accordion.Body>
                It depends on the retailer and the stage of processing. Quickly
                contact customer service to inquire about cancellation
                possibilities. Some retailers have a short window for order
                cancellations, especially if the order has already been
                processed or shipped. Being proactive in reaching out can
                increase the chances of a successful cancellation
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>
                What should I do if a product arrives damaged?
              </Accordion.Header>
              <Accordion.Body>
                Contact the retailers customer service immediately. Most
                retailers have a process for handling damaged or defective items
                and may offer a replacement or refund. Take clear photos of the
                damage and provide detailed information to expedite the
                resolution process. Many retailers prioritize customer
                satisfaction and will work to resolve the issue promptly.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
              <Accordion.Header>
                How can I extend the lifespan of electronic devices?
              </Accordion.Header>
              <Accordion.Body>
                Keep devices in a cool and dry place, install software updates
                regularly, use protective cases, and follow manufacturer
                recommendations for charging. Avoid exposing devices to extreme
                temperatures, and consider investing in surge protectors to
                safeguard against electrical issues.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="6">
              <Accordion.Header>
                Are online reviews reliable for making purchasing decisions?
              </Accordion.Header>
              <Accordion.Body>
                Online reviews can be helpful, but its essential to consider
                the overall sentiment and read multiple reviews. Look for
                detailed reviews that discuss both positive and negative aspects
                of the product. Consider the credibility of the source, and be
                aware that some reviews may be influenced by factors like
                personal preferences or sponsored content.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="7">
              <Accordion.Header>
                How do I find the best deals and discounts when shopping
              </Accordion.Header>
              <Accordion.Body>
                Subscribe to newsletters, follow retailers on social media, and
                use price comparison tools. Many retailers also offer discounts
                for first-time shoppers or during seasonal sales. Additionally,
                consider browser extensions that automatically apply coupon
                codes at checkout, maximizing your savings.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="8">
              <Accordion.Header>
                What is the return policy for most products?
              </Accordion.Header>
              <Accordion.Body>
                Return policies vary by retailer. Typically, there is a
                specified window (e.g., 30 days) for returns. Check the
                retailers website or contact customer service for specific
                details. Some retailers may offer free returns, while others may
                deduct return shipping costs from your refund. Its crucial to
                review the policy before making a purchase to ensure youre
                comfortable with the terms.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="9">
              <Accordion.Header>
                How can I track my online order?
              </Accordion.Header>
              <Accordion.Body>
                Most online retailers provide a tracking number in your order
                confirmation email. You can use this number on the carriers
                website to track the status and location of your package.
                Additionally, some carriers offer detailed tracking information,
                including estimated delivery times and real-time updates on the
                packages journey.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Container>
      </section>
      <Footer />
    </>
  );
}

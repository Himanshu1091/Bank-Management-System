import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaBuilding, FaChartLine, FaHandshake, FaCreditCard, FaPiggyBank, FaCoins } from "react-icons/fa";
import "./BusinessAccountPage.css";
import bs from '../Images/bs1.png';

const Business = () => {
  return (
    <div>
      {/* Section 1: Business Account Overview */}
      <section className="business-section-1">
        <Container>
          {/* <h1 className="text-center text-dark bg-light p-2"><b>Business Account Overview</b></h1> */}
          <Row className="align-items-end" style={{ minHeight: "100vh" }}>
            <Col md={6}>
              <Row>
                {[
                  { icon: <FaBuilding size={30} />, title: "Business Loans", text: "Get loans tailored for your business needs." },
                  { icon: <FaChartLine size={30} />, title: "Investment Plans", text: "Grow your business with smart investments." },
                  { icon: <FaHandshake size={30} />, title: "Partnerships", text: "Explore partnership opportunities." },
                  { icon: <FaCreditCard size={30} />, title: "Business Credit Cards", text: "Exclusive credit cards for businesses." },
                  { icon: <FaPiggyBank size={30} />, title: "Savings Accounts", text: "High-interest savings for businesses." },
                  { icon: <FaCoins size={30} />, title: "Forex Services", text: "Manage international transactions easily." },
                ].map((item, index) => (
                  <Col md={6} key={index} className="mb-4">
                    <Card className="h-100">
                      <Card.Body>
                        <div className="text-center">
                          {item.icon}
                          <h5>{item.title}</h5>
                          <p>{item.text}</p>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Col>
            <Col md={6} className="text-center">
              <Card className="business-deals-box " id="bdc">
                <Card.Body>
                  <h3>Exclusive Business Deals</h3>
                  <p>Get access to exclusive offers and discounts for your business.</p>
                  <Button variant="primary">Explore Deals</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Section 2: Business Account Details */}
      <section className="business-section-2">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <img
                src={bs}
                alt="Business Account"
                className="img-fluid"
              />
            </Col>
            <Col md={6}>
              <h2>Business Account Details</h2>
              <p>
                Our Business Accounts are designed to help you manage your finances efficiently. Here’s what you get:
              </p>
              <ul>
                <li>Zero balance account for startups.</li>
                <li>Dedicated relationship manager.</li>
                <li>Customized loan solutions.</li>
                <li>Access to international banking services.</li>
                <li>24/7 customer support.</li>
              </ul>
              <Button variant="success">Open Account</Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Section 3: Offers and Credit Cards */}
      <section className="business-section-3">
        <Container>
          <h2 className="text-center mb-4">Exclusive Offers and Credit Cards</h2>
          <Row>
            {[
              { title: "Business Credit Card", text: "Get up to 5% cashback on all business expenses.", icon: <FaCreditCard size={50} /> },
              { title: "Startup Offers", text: "Special discounts for startups and SMEs.", icon: <FaHandshake size={50} /> },
              { title: "Forex Offers", text: "Low forex rates for international transactions.", icon: <FaCoins size={50} /> },
            ].map((item, index) => (
              <Col md={4} key={index} className="mb-4">
                <Card className="h-100 text-center">
                  <Card.Body>
                    {item.icon}
                    <h5>{item.title}</h5>
                    <p>{item.text }</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Business;
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './NRIAccountPage.css'; // Import custom CSS for styling
import nri from '../Images/nri2.png';


const NRI = () => {
  return (
    <div>
      {/* First Section */}
      <div className="first-section">
        <Container>
          <Row className="align-items-end" style={{ minHeight: '70vh' }}>
            {/* 6 Cards */}
            <Col md={6}>
              <Row>
                <Col md={6}>
                  <Card className="service-card">
                    <Card.Body>
                      <Card.Title>NRI Loan</Card.Title>
                      <Card.Text>Get the best loan options for NRIs.</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6}>
                  <Card className="service-card">
                    <Card.Body>
                      <Card.Title>NRI Savings</Card.Title>
                      <Card.Text>Open a savings account with attractive interest rates.</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6}>
                  <Card className="service-card">
                    <Card.Body>
                      <Card.Title>NRI Investments</Card.Title>
                      <Card.Text>Explore investment opportunities tailored for NRIs.</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6}>
                  <Card className="service-card">
                    <Card.Body>
                      <Card.Title>NRI Insurance</Card.Title>
                      <Card.Text>Secure your future with our insurance plans.</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6}>
                  <Card className="service-card">
                    <Card.Body>
                      <Card.Title>NRI Tax Services</Card.Title>
                      <Card.Text>Get expert advice on tax planning.</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6}>
                  <Card className="service-card">
                    <Card.Body>
                      <Card.Title>NRI Deals</Card.Title>
                      <Card.Text>Exclusive deals for NRI customers.</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
            {/* NRI Deals Box */}
            <Col md={6} className="d-flex justify-content-end">
              <Card className="nri-deals-box">
                <Card.Body>
                  <Card.Title>NRI Deals</Card.Title>
                  <Card.Text>Check out our latest offers and deals for NRIs.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Second Section */}
      <div className="second-section">
        <Container>
          <Row className="align-items-center">
            {/* Image */}
            <Col md={6}>
              <img
                src={nri}
                alt="NRI Services"
                className="img-fluid"
              />
            </Col>
            {/* Details */}
            <Col md={6}>
              <h2>NRI Account Benefits</h2>
              <p>As an NRI, you can enjoy various benefits such as:</p>
              <ul>
                <li>Tax exemptions on interest earned in NRE accounts.</li>
                <li>Easy repatriation of funds.</li>
                <li>Access to a wide range of financial products.</li>
                <li>Dedicated relationship manager for personalized service.</li>
              </ul>
              <p>
                Our NRI account services are designed to provide you with a seamless
                banking experience, no matter where you are in the world.
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Third Section */}
      <div className="third-section">
        <Container>
          <h2 className="text-center mb-4">Exclusive Offers for NRIs</h2>
          <Row>
            {/* Offer Cards */}
            <Col md={4}>
              <Card className="offer-card">
                <Card.Body>
                  <Card.Title>Special Offers</Card.Title>
                  <Card.Text>Avail exclusive discounts on NRI services.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="offer-card">
                <Card.Body>
                  <Card.Title>Credit Cards</Card.Title>
                  <Card.Text>Get premium credit cards with no annual fees.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="offer-card">
                <Card.Body>
                  <Card.Title>Debit Cards</Card.Title>
                  <Card.Text>Enjoy cash withdrawals and online shopping with our NRI debit cards.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default NRI;
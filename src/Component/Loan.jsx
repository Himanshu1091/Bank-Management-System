import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./LoanPage.css"; // Import the CSS file for styles

const LoanPage = () => {
  return (
    <div>
      <Container fluid style={{ backgroundColor: "wheat", padding: "20px 0" }}>
        <Container>
          <h1 className="text-center mb-4">Loans</h1>
          {/* Highlighted Notice Bar */}
          <div className="notice-bar">
            <p>✨ Attractive Loan Offers! Interest Rates Starting from 8.5% p.a. ✨</p>
          </div>
          <Row>
            <Col md={4} className="mb-4">
              <Card className="loan-card">
                <Card.Body>
                  <Card.Title>Personal Loan</Card.Title>
                  <Card.Text>
                    Get a personal loan up to ₹5 lakhs with interest rates starting from 10.99% p.a.
                  </Card.Text>
                  <Link to="/form1" variant="primary" className="btn border btn-padding">
                    Apply Now
                  </Link>
                  <Button variant="secondary" className="btn-padding">Know More</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="loan-card">
                <Card.Body>
                  <Card.Title>Home Loan</Card.Title>
                  <Card.Text>
                    Get a home loan up to ₹5 crores with interest rates starting from 8.5% p.a.
                  </Card.Text>
                  <Button variant="primary" className="btn-padding">Apply Now</Button>
                  <Button variant="secondary" className="btn-padding">Know More</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="loan-card">
                <Card.Body>
                  <Card.Title>Car Loan</Card.Title>
                  <Card.Text>
                    Get a car loan up to ₹50 lakhs with interest rates starting from 9.5% p.a.
                  </Card.Text>
                  <Button variant="primary" className="btn-padding">Apply Now</Button>
                  <Button variant="secondary" className="btn-padding">Know More</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md={4} className="mb-4">
              <Card className="loan-card">
                <Card.Body>
                  <Card.Title>Education Loan</Card.Title>
                  <Card.Text>
                    Get an education loan up to ₹20 lakhs with interest rates starting from 10.5% p.a.
                  </Card.Text>
                  <Button variant="primary" className="btn-padding">Apply Now</Button>
                  <Button variant="secondary" className="btn-padding">Know More</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="loan-card">
                <Card.Body>
                  <Card.Title>Business Loan</Card.Title>
                  <Card.Text>
                    Get a business loan up to ₹50 lakhs with interest rates starting from 12% p.a.
                  </Card.Text>
                  <Button variant="primary" className="btn-padding">Apply Now</Button>
                  <Button variant="secondary" className="btn-padding">Know More</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="loan-card">
                <Card.Body>
                  <Card.Title>Gold Loan</Card.Title>
                  <Card.Text>
                    Get a gold loan up to ₹5 lakhs with interest rates starting from 9% p.a.
                  </Card.Text>
                  <Button variant="primary" className="btn-padding">Apply Now</Button>
                  <Button variant="secondary" className="btn-padding">Know More</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
};

export default LoanPage;
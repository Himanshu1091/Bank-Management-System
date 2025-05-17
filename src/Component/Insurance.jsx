import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import {
  FaHeartbeat,
  FaCar,
  FaPlane,
  FaHome,
  FaShieldAlt,
  FaUser, 
  } from "react-icons/fa"; // Import icons from react-icons

const InsurancePage = () => {
  return (
    <div style={{ backgroundColor: "#FFE4B5", padding: "20px 0" }}>
      <Container>
        <h1 className="text-center mb-4">Insurance</h1>
        <Row>
          <Col md={4} className="mb-4">
            <Card style={{ marginBottom: 20, padding: 20, border: "1px solid #007bff", borderRadius: 10, boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
              <Card.Body>
                <Card.Title>
                  <FaUser size={24} style={{ marginRight: 8 }} /> Life Insurance
                </Card.Title>
                <Card.Text>
                  Protect your loved ones with our life insurance plans, starting from ₹500/month.
                </Card.Text>
                <Button variant="primary" style={{ padding: "10px 20px", marginRight: 8,marginBottom: 10 }}>Buy Now</Button>
                <Button variant="secondary" style={{ padding: "10px 20px" }}>Know More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card style={{ marginBottom: 20, padding: 20, border: "1px solid #007bff", borderRadius: 10, boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
              <Card.Body>
                <Card.Title>
                  <FaHeartbeat size={24} style={{ marginRight: 8 }} /> Health Insurance
                </Card.Title>
                <Card.Text>
                  Get comprehensive health insurance coverage, starting from ₹1,000/month.
                </Card.Text>
                <Button variant="primary" style={{ padding: "10px 20px", marginRight: 8, marginBottom: 10 }}>Buy Now</Button>
                <Button variant="secondary" style={{ padding: "10px 20px" }}>Know More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card style={{ marginBottom: 20, padding: 20, border: "1px solid #007bff", borderRadius: 10, boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
              <Card.Body>
                <Card.Title>
                  <FaCar size={24} style={{ marginRight: 8 }} /> Motor Insurance
                </Card.Title>
                <Card.Text>
                  Insure your vehicle with our motor insurance plans, starting from ₹2,000/year.
                </Card.Text>
                <Button variant="primary" style={{ padding: "10px 20px", marginRight: 8, marginBottom: 10 }}>Buy Now</Button>
                <Button variant="secondary" style={{ padding: "10px 20px" }}>Know More</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md={4} className="mb-4">
            <Card style={{ marginBottom: 20, padding: 20, border: "1px solid #007bff", borderRadius: 10, boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
              <Card.Body>
                <Card.Title>
                  <FaPlane size={24} style={{ marginRight: 8 }} /> Travel Insurance
                </Card.Title>
                <Card.Text>
                  Get protected while traveling with our travel insurance plans, starting from ₹500/trip.
                </Card.Text>
                <Button variant="primary" style={{ padding: "10px 20px", marginRight: 8,  marginBottom: 10 }}>Buy Now</Button>
                <Button variant="secondary" style={{ padding: "10px 20px" }}>Know More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card style={{ marginBottom: 20, padding: 20, border: "1px solid #007bff", borderRadius: 10, boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
              <Card.Body>
                <Card.Title>
                  <FaHome size={24} style={{ marginRight: 8 }} /> Home Insurance
                </Card.Title>
                <Card.Text>
                  Protect your home with our home insurance plans, starting from ₹1,000/year.
                </Card.Text>
                <Button variant="primary" style={{ padding: "10px 20px", marginRight: 8 ,marginBottom: 10 }}>Buy Now</Button>
                <Button variant="secondary" style={{ padding: "10px 20px" }}>Know More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card style={{ marginBottom: 20, padding: 20, border: "1px solid #007bff", borderRadius: 10, boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
              <Card.Body>
                <Card.Title>
                  <FaShieldAlt size={24} style={{ marginRight: 8 }} /> Term Insurance
                </Card.Title>
                <Card.Text>
                  Get term insurance coverage, starting from ₹500/month.
                </Card.Text>
                <Button variant="primary" style={{ padding: "10px 20px", marginRight: 8, marginBottom: 10 }}>Buy Now</Button>
                <Button variant="secondary" style={{ padding: "10px 20px" }}>Know More</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default InsurancePage;
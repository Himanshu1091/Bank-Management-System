import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";


const Form1 = () => {
  return (
    <div className="banking-page">
      <Container>
        <h1 className="text-center mb-5">Exploring Banking Services</h1>
        <Row className="gy-4">
          {/* Digital Banking Card */}
          <Col md={6} lg={3}>
            <Card className="banking-card animate-card">
              <Card.Body>
                <Card.Title>Digital Banking</Card.Title>
                <Card.Text>
                  Manage your finances seamlessly with our digital banking platform. Transfer funds, pay bills, and much more—all at your fingertips.
                </Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Net Banking Card */}
          <Col md={6} lg={3}>
            <Card className="banking-card animate-card">
              <Card.Body>
                <Card.Title>Net Banking</Card.Title>
                <Card.Text>
                  Enjoy the convenience of accessing your bank account online. View statements, initiate transactions, and secure your money with ease.
                </Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Mobile Banking Card */}
          <Col md={6} lg={3}>
            <Card className="banking-card animate-card">
              <Card.Body>
                <Card.Title>Mobile Banking</Card.Title>
                <Card.Text>
                  Your bank in your pocket. Use our mobile app to check balances, transfer money, and much more on the go.
                </Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>

          {/* WhatsApp Banking Card */}
          <Col md={6} lg={3}>
            <Card className="banking-card animate-card">
              <Card.Body>
                <Card.Title>WhatsApp Banking</Card.Title>
                <Card.Text>
                  Chat your way to convenience. Check balances, request services, and get support directly via WhatsApp.
                </Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Form1;

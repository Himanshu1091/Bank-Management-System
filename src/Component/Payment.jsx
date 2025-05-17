import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import credit from '../Images/card1.jpg';
import debit from '../Images/card2.jpg';
import netbanking from '../Images/netbanking.png';
import upi from '../Images/upi.png';
import wallet from '../Images/wallet.jpg';

const PaymentsPage = () => {
  return (
    <div>
      <Container fluid style={{backgroundColor:"wheat"}}>
        <h1 className="text-center mb-5">Payments</h1>
        <Row className="mb-4">
          <Col md={6} className="d-flex align-items-center justify-content-center">
            <Image src={credit} alt="Credit Card" width={300} height={200} className="rounded shadow" />
          </Col>
          <Col md={6}>
            <Card className="h-100 p-3 shadow">
              <Card.Body>
                <Card.Title className="mb-3">Credit Card</Card.Title>
                <Card.Text className="mb-3">
                  Pay with your credit card and enjoy rewards and cashback.
                </Card.Text>
                <ul>
                  <li>Easy and secure payment method</li>
                  <li>Get rewards and cashback on your purchases</li>
                  <li>Wide acceptance at online and offline stores</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="mb-4">
          <Col md={6} className="d-flex align-items-center justify-content-center">
            <Image src={debit} alt="Debit Card" width={300} height={200} className="rounded shadow" />
          </Col>
          <Col md={6}>
            <Card className="h-100 p-3 shadow">
              <Card.Body>
                <Card.Title className="mb-3">Debit Card</Card.Title>
                <Card.Text className="mb-3">
                  Pay with your debit card and enjoy easy and secure transactions.
                </Card.Text>
                <ul>
                  <li>Easy and secure payment method</li>
                  <li>No interest charges or fees</li>
                  <li>Wide acceptance at online and offline stores</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="mb-4">
          <Col md={6} className="d-flex align-items-center justify-content-center">
            <Image src={netbanking} alt="Net Banking" width={300} height={200} className="rounded shadow" />
          </Col>
          <Col md={6}>
            <Card className="h-100 p-3 shadow">
              <Card.Body>
                <Card.Title className="mb-3">Net Banking</Card.Title>
                <Card.Text className="mb-3">
                  Pay with your net banking account and enjoy easy and secure transactions.
                </Card.Text>
                <ul>
                  <li>Easy and secure payment method</li>
                  <li>No interest charges or fees</li>
                  <li>Wide acceptance at online and offline stores</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="mb-4">
          <Col md={6} className="d-flex align-items-center justify-content-center">
            <Image src={upi} alt="UPI" width={300} height={200} className="rounded shadow" />
          </Col>
          <Col md={6}>
            <Card className="h-100 p-3 shadow">
              <Card.Body>
                <Card.Title className="mb-3">UPI</Card.Title>
                <Card.Text className="mb-3">
                  Pay with your UPI account and enjoy easy and secure transactions.
                </Card.Text>
                <ul>
                  <li>Easy and secure payment method</li>
                  <li>No interest charges or fees</li>
                  <li>Wide acceptance at online and offline stores</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="mb-4">
          <Col md={6} className="d-flex align-items-center justify-content-center">
            <Image src={wallet} alt="Wallet" width={300} height={200} className="rounded shadow " />
          </Col>
          <Col md={6}>
            <Card className="h-100 p-3 shadow">
              <Card.Body>
                <Card.Title className="mb-3">Wallet</Card.Title>
                <Card.Text className="mb-3">
                  Pay with your wallet and enjoy easy and secure transactions.
                </Card.Text>
                <ul>
                  <li>Easy and secure payment method</li>
                  <li>No interest charges or fees</li>
                  <li>Wide acceptance at online and offline stores</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PaymentsPage;
import React from 'react';
import { Container, Card, Row, Col, Button } from 'react-bootstrap';
import { FaUser  , FaCreditCard, FaMoneyBillAlt, FaPlus, FaExchangeAlt, FaHistory } from 'react-icons/fa';
import Bgimg from '../Images/personal.jpg'; // Ensure the path is correct

const Personal = () => {
  const backgroundStyle = {
    backgroundImage: `url(${Bgimg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    padding: '20px',
  };

  const cardStyle = {
    width: '800px', // Fixed width for the card
    height: '600px', // Fixed height for the card
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: '20px',
    overflowY: 'auto', // Add scroll if content overflows
  };

  const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '10px', // Add padding between buttons
  };

  return (
    <div style={backgroundStyle}>
      <Container>
        <h1 className="text-center text-white mb-4">Personal Account</h1>
        <Row className="justify-content-center">
          <Col md={8}>
            <Card className="shadow-lg" style={cardStyle}>
              <Card.Body>
                <h3 className="text-primary"><FaUser   /> Account Details</h3>
                <p><strong>Account Holder:</strong> Akriti Ranade</p>
                <p><strong>Account Number:</strong> 1234567890</p>
                <p><strong>Balance:</strong> Rs.100,000,563</p>
                <hr />
                <h3 className="text-success"><FaCreditCard /> Banking Information</h3>
                <p><strong>Card Number:</strong> **** **** **** 1234</p>
                <p><strong>Expiry Date:</strong> 12/25</p>
                <p><strong>CVV:</strong> ***</p>
                <hr />
                <h3 className="text-warning"><FaMoneyBillAlt /> Recent Transactions</h3>
                <ul>
                  <li>Paid Rs. 100 for groceries</li>
                  <li>Received Rs. 500 from Raemshi</li>
                </ul>
                <hr />
                <div style={buttonContainerStyle}>
                  <Button variant="primary" className="d-flex align-items-center">
                    <FaPlus className="me-2" /> Add Money
                  </Button>
                  <Button variant="success" className="d-flex align-items-center">
                    <FaExchangeAlt className="me-2" /> Transfer
                  </Button>
                  <Button variant="info" className="d-flex align-items-center">
                    <FaHistory className="me-2" /> Transaction History
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Personal;
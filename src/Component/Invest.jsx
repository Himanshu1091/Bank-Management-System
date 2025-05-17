import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaChartLine, FaHandHoldingUsd, FaCoins, FaBuilding, FaOilCan } from "react-icons/fa"; // Import icons from react-icons

const InvestmentPage = () => {
  return (
    <div style={{ backgroundColor: "#FFE4B5", padding: "20px 0" }}> {/* Faint saffron background */}
      <Container>
        <h1 className="text-center mb-4">Investments</h1>
        <Row className="mb-4">
          <Col md={6} className="d-flex align-items-center justify-content-center">
            <FaChartLine size={150} color="#007bff" /> {/* Stocks icon */}
          </Col>
          <Col md={6}>
            <Card className="investment-card">
              <Card.Body>
                <Card.Title className="text-primary">Stocks</Card.Title>
                <Card.Text>
                  Invest in stocks and enjoy potential long-term growth.
                </Card.Text>
                <ul>
                  <li>Potential for long-term growth</li>
                  <li>Liquidity and flexibility</li>
                  <li>Diversification opportunities</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="mb-4">
          <Col md={6} className="d-flex align-items-center justify-content-center">
            <FaHandHoldingUsd size={150} color="#007bff" /> {/* Bonds icon */}
          </Col>
          <Col md={6}>
            <Card className="investment-card">
              <Card.Body>
                <Card.Title className="text-primary">Bonds</Card.Title>
                <Card.Text>
                  Invest in bonds and enjoy regular income and relatively low risk.
                </Card.Text>
                <ul>
                  <li>Regular income and relatively low risk</li>
                  <li>Fixed returns and predictable income</li>
                  <li>Low volatility and stability</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="mb-4">
          <Col md={6} className="d-flex align-items-center justify-content-center">
            <FaCoins size={150} color="#007bff" /> {/* Mutual Funds icon */}
          </Col>
          <Col md={6}>
            <Card className="investment-card">
              <Card.Body>
                <Card.Title className="text-primary">Mutual Funds</Card.Title>
                <Card.Text>
                  Invest in mutual funds and enjoy diversification and professional management.
                </Card.Text>
                <ul>
                  <li>Diversification and reduced risk</li>
                  <li>Professional management and expertise</li>
                  <li>Convenience and ease of investment</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="mb-4">
          <Col md={6} className="d-flex align-items-center justify-content-center">
            <FaBuilding size={150} color="#007bff" /> {/* Real Estate icon */}
          </Col>
          <Col md={6}>
            <Card className="investment-card">
              <Card.Body>
                <Card.Title className="text-primary">Real Estate</Card.Title>
                <Card.Text>
                  Invest in real estate and enjoy potential long-term growth and rental income.
                </Card.Text>
                <ul>
                  <li>Potential for long-term growth and appreciation</li>
                  <li>Rental income and cash flow</li>
                  <li>Tangible asset and physical property</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="mb-4">
          <Col md={6} className="d-flex align-items-center justify-content-center">
            <FaOilCan size={150} color="#007bff" /> {/* Commodities icon */}
          </Col>
          <Col md={6}>
            <Card className="investment-card">
              <Card.Body>
                <Card.Title className="text-primary">Commodities</Card.Title>
                <Card.Text>
                  Invest in commodities and enjoy potential for long-term growth and diversification.
                </Card.Text>
                <ul>
                  <li>Potential for long-term growth and appreciation</li>
                  <li>Diversification and reduced risk</li>
                  <li>Tangible asset and physical property</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default InvestmentPage;

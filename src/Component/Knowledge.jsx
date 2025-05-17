import React, { useState } from "react";
import { Container, Row, Col, Card, Carousel, Button } from "react-bootstrap";
import img1 from "../Images/wallet.jpg"; // Adjust the path to your images
import img2 from "../Images/k2.jpg";
import img3 from "../Images/k3.jpg";

const KnowledgeHubPage = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div style={{ backgroundColor: "#f5f5dc", padding: "20px 0" }}>
      <Container>
        <h1 className="text-center mb-4 fw-bold text-uppercase">Knowledge Hub</h1>
        <Row className="mb-4">
          <Col md={6}>
            <Carousel activeIndex={index} onSelect={handleSelect}>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={img1}
                  alt="First slide"
                  style={{ height: "400px", objectFit: "cover" }} // Fixed height and aspect ratio
                />
                <Carousel.Caption style={{ position: "absolute", top: "50%", left: "30%", transform: "translate(-50%, -50%)", textAlign: "left" }}>
                  <h3 className="text-info">Important About Savings..</h3>
                  <p className="text-light">
                    Saving money is crucial for financial security and stability. It helps you achieve your goals, prepare for emergencies, and provides peace of mind by ensuring you have funds available when needed.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={img2}
                  alt="Second slide"
                  style={{ height: "400px", objectFit: "cover" }}
                />
                <Carousel.Caption style={{ position: "absolute", top: "50%", left: "30%", transform: "translate(-50%, -50%)", textAlign: "left" }}>
                  <h3 className="text-info">Security Issues While Handling Online Banking..</h3>
                  <p className="text-warning">
                    Security in online banking is essential to protect sensitive financial information from threats like identity theft, fraud, and cyberattacks. Robust security measures, such as encryption and authentication protocols, ensure safe transactions and maintain customer trust in the banking system.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={img3}
                  alt="Third slide"
                  style={{ height: "400px", objectFit: "cover" }}
                />
                <Carousel.Caption style={{ position: "absolute", top: "50%", left: "30%", transform: "translate(-50%, -50%)", textAlign: "left" }}>
                  <h3 className="text-info">Upgrade Your Investment Growth..</h3>
                  <p className="text-light">
                    Bank investments drive future growth by funding businesses, infrastructure, and innovation, fostering economic development. Strategic investments in technology and sustainable projects ensure long-term profitability and stability.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col md={6}>
            <Card style={{ height: "100%" }}>
              <Card.Body>
                <Card.Title>Important Card Details</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="mb-4">
          <Col md={6}>
            <Card style={{ height: "100%" }}>
              <Card.Body>
                <Card.Title>Digital Security</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card style={{ height: "100%" }}>
              <Card.Body>
                <Card.Title>Threats</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <Card>
              <Card.Body>
                <Card.Title>Suggestion Box</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default KnowledgeHubPage;
import React, { useState } from "react";
import { Button, Typography, Box } from "@mui/material";
import { FaBell, FaCoins, FaLink, FaStar } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "react-bootstrap/Carousel";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, } from 'react-bootstrap';
import { AccountBalance, EmojiPeople, MonetizationOn, Business } from '@mui/icons-material';
import c1 from "../Images/home.png";
import c2 from "../Images/car.png";
import c3 from "../Images/edu.png";
import c4 from "../Images/fest.png";
import c5 from "../Images/bussi.png";
import c6 from "../Images/trav.png";
import myVideo from '../Images/vdo.mp4';


const DataSection = () => {
  const [currentContent, setCurrentContent] = useState("carousel");

  const cardData = [
    { id: 1, title: "Home Loan", description: "This is the first card.", image: c1 },
    { id: 2, title: "Car Loan", description: "This is the second card.", image: c2 },
    { id: 3, title: "Edu. Loan", description: "This is the third card.", image: c3 },
    { id: 4, title: "Fest. Offer", description: "This is the fourth card.", image: c4 },
    { id: 5, title: "Busi. Loan", description: "This is the fifth card.", image: c5 },
    { id: 6, title: "Travels Offer", description: "This is the sixth card.", image: c6 },
  ];

  const renderContent = () => {
    if (currentContent === "carousel") {
      return (
        <div className="container mt-5" style={{ backgroundColor:'beige' }}>
          <Carousel>
            {[0, 1].map((groupIndex) => (
              <Carousel.Item key={groupIndex}>
                <div className="d-flex justify-content-center">
                  {cardData
                    .slice(groupIndex * 3, groupIndex * 3 + 3)
                    .map((card) => (
                      <Card
                        key={card.id}
                        style={{
                          width: "18rem",
                          margin: "0 18px",
                          transition: "transform 0.3s, box-shadow 0.3s",
                          cursor: "pointer",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = "scale(1.05)";
                          e.currentTarget.style.boxShadow =
                            "0px 8px 16px rgba(0, 0, 0, 0.2)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = "scale(1)";
                          e.currentTarget.style.boxShadow = "none";
                        }}
                      >
                        <CardMedia
                          component="img"
                          height="140"
                          image={card.image}
                          alt={card.title}
                        />
                        <CardContent>
                          <Typography
                            variant="h5"
                            component="div"
                            className="d-flex align-items-center"
                          >
                            <FaStar
                              style={{ marginRight: "10px", color: "gold" }}
                            />
                            {card.title}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {card.description}
                          </Typography>
                          <Button
                            variant="contained"
                            color="primary"
                            style={{ marginTop: "10px" }}
                          >
                            Learn More
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      );
    } else if (currentContent === "newContent") {
      return (
        <Container>
      <Row className="my-5">
        {/* Video Section */}
        <Col xs={12} md={6} className="mb-4">
      <Card className="video-box">
        <div className="video-content">
          <video
            width="100%"
            height="auto"
            controls
            autoPlay
            muted
          >
            <source src={myVideo} type="video/mp4" />
          </video>
        </div>
        <Button variant="primary" className="w-100">
          Watch Video
        </Button>
      </Card>
    </Col>

        {/* Collection Investments Section */}
        <Col xs={12} md={6}>
          <Row>
            <Col xs={6} md={4} className="mb-4">
              <Card className="icon-box">
                <AccountBalance style={{ fontSize: '40px', color: '#4caf50' }} />
                <h5>Fixed Deposit</h5>
              </Card>
            </Col>
            <Col xs={6} md={4} className="mb-4">
              <Card className="icon-box">
                <MonetizationOn style={{ fontSize: '40px', color: '#ff9800' }} />
                <h5>Mutual Fund</h5>
              </Card>
            </Col>
            <Col xs={6} md={4} className="mb-4">
              <Card className="icon-box">
                <EmojiPeople style={{ fontSize: '40px', color: '#2196f3' }} />
                <h5>LIC</h5>
              </Card>
            </Col>
            <Col xs={6} md={4} className="mb-4">
              <Card className="icon-box">
                <Business style={{ fontSize: '40px', color: '#9c27b0' }} />
                <h5>Invest Stocks</h5>
              </Card>
            </Col>
            <Col xs={6} md={4} className="mb-4">
              <Card className="icon-box">
                <AccountBalance style={{ fontSize: '40px', color: '#8bc34a' }} />
                <h5>Retire Planning</h5>
              </Card>
            </Col>
            <Col xs={6} md={4} className="mb-4">
              <Card className="icon-box">
                <FaCoins style={{ fontSize: '40px', color: 'gold' }} />
                <h5>Gold Planning</h5>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>

      {/* Quick Calculator Section
      <Row className="my-5">
        <Col xs={12}>
          <Card className="calcy-box">
            <h4>Quick Calculator</h4>
            <p>Enter your investment details to calculate returns.</p>
            <Button variant="primary">Calculate</Button>
          </Card>
        </Col>
      </Row> */}
    </Container>
      );
    }
  };

  return (
    <div className="data-section-container"  style={{ backgroundColor: '  beige' }}>
      {/* Notification Bar */}
      <div className="notification-bar text-light bg-info">
        <Typography variant="h6" className="notification-title">
          Important Notice: ₹2,000 Denomination Banknotes – Withdrawn from
          Circulation Reserve Bank
        </Typography>
        <Box className="notification-links">
          <Button startIcon={<FaBell />} className="text-light">
            Notification 1
          </Button>
          <Button startIcon={<FaLink />} className="text-light">
            Notification 2
          </Button>
        </Box>
      </div>
      <div className="container">
        <p className="text-warning text-center mt-3 fw-bold text-uppercase">--------------Loans & Offers By Bank--------------</p>
        <h2 className="fw-bold text-center text-uppercase">Great Offers for <span className="fw-light"> & Experiences Low Interest</span> </h2>
      </div>

      <div className="container  mt-4 " id="loan">
        <Button
          variant="contained"
          color="primary"
          style={{ marginRight: "0px" }}
          onClick={() => setCurrentContent("carousel")}
        >
          Loan /Offers
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => setCurrentContent("newContent")}
        >
          Investment /Card
        </Button>
      </div>

      {/* Conditional Content Rendering */}
      {renderContent()}
    </div>
  );
};

export default DataSection;

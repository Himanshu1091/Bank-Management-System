// Import required libraries
import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { FaStar } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const CarouselCard = () => {
  // Sample data for cards
  const cardData = [
    { id: 1, title: "Card 1", description: "This is the first card.", image: "https://via.placeholder.com/150" },
    { id: 2, title: "Card 2", description: "This is the second card.", image: "https://via.placeholder.com/150" },
    { id: 3, title: "Card 3", description: "This is the third card.", image: "https://via.placeholder.com/150" },
    { id: 4, title: "Card 4", description: "This is the fourth card.", image: "https://via.placeholder.com/150" },
    { id: 5, title: "Card 5", description: "This is the fifth card.", image: "https://via.placeholder.com/150" },
    { id: 6, title: "Card 6", description: "This is the sixth card.", image: "https://via.placeholder.com/150" },
  ];

  return (
    <div className="container mt-5">
      <Carousel>
        {/* Split the cards into groups of three */}
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
                      margin: "0 12px", 
                      transition: "transform 0.3s, box-shadow 0.3s", 
                      cursor: "pointer" 
                      
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "scale(1.05)";
                      e.currentTarget.style.boxShadow = "0px 8px 16px rgba(0, 0, 0, 0.2)";
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
                        <FaStar style={{ marginRight: "10px", color: "gold" }} />
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
};

export default CarouselCard;

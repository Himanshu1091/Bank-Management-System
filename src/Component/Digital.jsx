import React, { useState, useEffect, useRef } from "react";
import { Button, Grid, Typography } from "@mui/material";
import { FaMobile, FaInternetExplorer, FaWhatsapp, FaCriticalRole, FaPaypal,  FaAmazonPay, FaCreditCard, FaTimesCircle, FaWhatsappSquare, FaTree, } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Javascript
import image1 from "../Images/mob.png";
import image2 from "../Images/net.png";
import image3 from "../Images/whats.png";
import grn from "../Images/green.jpg";
import QRCode from "qrcode";
import {Link} from 'react-router-dom';

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Images for the carousel
  const images = [image1, image2, image3];
  const buttons = ["Mobile Banking", "Net Banking", "WhatsApp Banking"];
  const canvasRef = useRef(null);
  
    useEffect(() => {
      const generateQRCode = async () => {
        try {
          const url = "J.Pruthveeraj"; // Replace with your desired URL
          const canvas = canvasRef.current;
          await QRCode.toCanvas(canvas, url, {
            width: 180,
            margin: 2,
          });
        } catch (error) {
          console.error("Failed to generate QR Code", error);
        }
      };
  
      generateQRCode();
    }, []);

  // Change image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Handle button click to show the corresponding image
  const handleButtonClick = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="hero-container" style={{backgroundColor:'rgba(214, 169, 169, 0.38)'}}>
      {/* Hero Content */}
      <div className="hero-content">
        <Grid container spacing={3} alignItems="center">
          {/* Left Content */}
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom className="fw-bold text-top">
              DIGITAL BANKING
              <br />
              <p className="text-secondary fw-bold fs-5">Advance. Innovative. Instant</p>
            </Typography>
            <div className="pill-buttons mt-4">
              {buttons.map((label, index) => (
                <Button
                  key={index}
                  variant={currentImageIndex === index ? "contained" : "outlined"}
                  startIcon={
                    index === 0 ? <FaMobile /> : index === 1 ? <FaInternetExplorer /> : <FaWhatsapp />
                  }
                  className={`pbtn badge rounded-pill mx-2 ${
                    currentImageIndex === index ? "active-button" : ""
                  }`}
                  onClick={() => handleButtonClick(index)}
                >
                  {label}
                </Button>
              ))}
            </div>
            <div className="mt-4">
              <Button
                variant="contained"
                startIcon={<FaCriticalRole />}
                className="pbtn badge rounded-pill bg-warning text-white"
              >
                <Link to="/explor" className=" text-decoration-none text-dark">
                EXPLORE DIGITAL BANKING</Link>
              </Button>
            </div>
          </Grid>

          {/* Right Content with Fixed Image Box */}
          <Grid item xs={12} md={6}>
            <div className="image-container" style={{ maxwidth: "200px", height: "500px", position: "relative" }}>
              <img
                src={images[currentImageIndex]}
                alt="Hero"
                className="hero-image"
                style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "10px" }}
              />
            </div>
          </Grid>

          {/* Horizontal Block Section */}
          <div className="card mb-3 w-100 border-0">
            <div className="row g-0 align-items-center">
              {/* <div className="col-2">
                <img
                  src={grn}
                  className="img-fluid rounded p-3"
                  alt="Thumbnail"
                  style={{ maxWidth: "180px", maxHeight: "180px" }}
                />
              </div> */}
              <div className="col-2">
                  <canvas
                   ref={canvasRef}
                   className="img-fluid rounded p-3"
                   style={{ maxWidth: "180px", maxHeight: "180px" }}
                  />
              </div>
              <div className="col-10 px-4">
                <div className="card-body">
                  <h5 className="card-title">Go Digitallly with <span className="text-danger">Your Family"...!</span></h5>
                  <p className="card-text">
                    The Digital banking can be Fullfill your wishes anywhere, anytime. "Now Bank is always with you; like Your Family".

                    <pre><br/><span className="text-primary fs-5 "><FaAmazonPay/> UPI      <FaPaypal/> Internet Banking       <FaCreditCard/> ATM       <FaWhatsappSquare/> Whatsapp Bank      <FaTimesCircle/> 24/7 </span></pre>
                  </p>
                  <p className="card-text">
                    <small className="text-muted"><span className="text-success"><FaTree/>Go Green, reduce paper work</span></small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Grid>
      </div>
    </div>
  );
};

export default HeroSection;

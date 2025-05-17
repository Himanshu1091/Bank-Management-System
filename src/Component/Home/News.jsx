import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { FaShieldAlt, FaKey, FaLock, FaSmile } from "react-icons/fa";

const NewsArticles = () => {
    const articles = [
        {
          icon: <FaShieldAlt />,
          title: "Advanced Security",
          description: "Peace of mind for you as we have the most advanced technology & protection.",
        },
        {
          icon: <FaKey />,
          title: "2 Factor Authentication",
          description: "2 Factor i-safe authentication.",
        },
        {
          icon: <FaLock />,
          title: "Data Encryption",
          description: "End-to-end 256 bit Encryption.",
        },
        {
          icon: <FaSmile />,
          title: "Customer Experience",
          description: "We make you feel special.",
        },
      ];

    return (
        <Container fluid style={{backgroundColor: "rgba(211, 211, 211, 0.33)"}}>
        <div className="container ">
            <h1 className=" mb-5 text-start text-uppercase">We take your Banking security<br/><span className='fw-light'>seriously !</span></h1>
            <div className="row row-cols-1 row-cols-md-4 g-4 ">
                {articles.map((article, index) => (
                    <div className="col" key={index}>
                        <div className="icon-container my-2 " style={{ fontSize: "2rem", color: "#007bff", paddingLeft: "60px" }}>
                            {article.icon}
                        </div>
                        <div>
                            <h5>{article.title}</h5>
                            <p>{article.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </Container>
    );
};

export default NewsArticles;

import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaTrophy, FaHistory, FaUsers, FaHandshake, FaBuilding, FaCoins } from "react-icons/fa";


const HistoryPage = () => {
  return (
    <div className="about-us-page " style={{backgroundColor: 'rgba(255, 204, 102, 0.36)'}}>
      {/* Section 1: Introduction */}
      <section className="about-section-1">
        <Container>
          <Row className="text-center">
            <Col>
              <h1>About Us</h1>
              <p className="lead">
                Welcome to our bank, where we strive to provide exceptional financial services to our customers. With a rich history and a commitment to innovation, we are here to support your financial journey.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Section 2: Account Types */}
      <section className="about-section-2">
        <Container>
          <h2 className="text-center mb-4">Our Account Types</h2>
          <Row>
            {[
              { icon: <FaUsers size={50} color="green" />, title: "Personal Account", text: "Tailored for individuals to manage their finances efficiently." },
              { icon: <FaHandshake size={50} />, title: "NRI Account", text: "Designed for Non-Resident Indians with exclusive benefits." },
              { icon: <FaBuilding size={50} />, title: "Business Account", text: "Solutions for businesses to grow and manage their finances." },
              { icon: <FaCoins size={50} color="gold" />, title: "Current Account", text: "Ideal for daily transactions and business operations." },
            ].map((item, index) => (
              <Col md={3} key={index} className="mb-4">
                <Card className="h-100 text-center">
                  <Card.Body>
                    {item.icon}
                    <h5>{item.title}</h5>
                    <p>{item.text}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Section 3: Bank History and Achievements */}
      <section className="about-section-3">
        <Container>
          <Row>
            <Col md={6}>
              <h2>Our History <FaHistory color="silver"/></h2>
              <p>
                Established in 1950, our bank has been a trusted financial partner for millions of customers. Over the decades, we have grown from a small local bank to a global financial institution, serving individuals, businesses, and NRIs.
              </p>
              <p>
                Our journey has been marked by innovation, customer-centric services, and a commitment to excellence. We have continuously adapted to the changing financial landscape to meet the needs of our customers.
              </p>
            </Col>
            <Col md={6}>
              <h2>Achievements <FaTrophy color="gold"/></h2>
              <ul>
                <li>Winner of the "Best Bank Award" for 5 consecutive years.</li>
                <li>Recognized for excellence in customer service by global organizations.</li>
                <li>Pioneered digital banking solutions in the region.</li>
                <li>Supported over 10,000 startups and SMEs with financial solutions.</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Section 4: Additional Content */}
      <section className="about-section-4">
        <Container>
          <Row>
            <Col>
              <h2 className="text-center mb-4">Why Choose Us?</h2>
              <p>
                Our bank is committed to providing innovative and reliable financial solutions. With a team of experienced professionals, we ensure that your financial needs are met with the highest level of service. Whether you are an individual, a business owner, or an NRI, we have the right products and services for you.
              </p>
              <p>
                We believe in building long-term relationships with our customers. Our focus on transparency, security, and customer satisfaction sets us apart from the competition. Join us today and experience the difference.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default HistoryPage;
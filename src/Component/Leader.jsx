import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaUser , FaBriefcase, FaPhone, FaEnvelope } from "react-icons/fa";
import "./LeaderTeamPage.css";

const Leader = () => {
  return (
    <div className="leader-team-page ">
      {/* Section 1: Introduction */}
      <section className="leader-section-1 m-3">
        <Container>
          <Row className="text-center">
            <Col>
              <h1>Our Leadership Team</h1>
              <p className="lead">
                Meet our experienced and dedicated leadership team, who are committed to providing exceptional financial services to our customers.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Section 2: Leadership Team Members */}
      <section className="leader-section-2 m-3">
        <Container>
          <h2 className="text-center mb-4">Our Team Members</h2>
          <Row>
            {[
              {
                name: "Pruthveeraj J.",
                position: "CEO",
                description: "Pruthvi has over 20 years of experience in the banking industry and has been leading our bank since 2010.",
                phone: "123-456-7890",
                email: "Pruthvee.j@example.com",
              },
              {
                name: "Pruthveeraj J.",
                position: "CFO",
                description: "Pruthveeraj J. has over 15 years of experience in finance and has been our CFO since 2015.",
                phone: "987-654-3210",
                email: "Pruthvi.J.@example.com",
              },
              {
                name: "Pruthveeraj J.",
                position: "COO",
                description: "Pruthveeraj J. has over 10 years of experience in operations and has been our COO since 2018.",
                phone: "555-123-4567",
                email: "Pruthveeraj.J@example.com",
              },
            ].map((member, index) => (
              <Col md={4} key={index} className="mb-4">
                <Card className="h-100 text-center">
                  <Card.Body>
                    <FaUser  size={50} />
                    <h5>{member.name}</h5>
                    <p>{member.position}</p>
                    <p>{member.description}</p>
                    <p>
                      <FaPhone size={20} /> {member.phone}
                    </p>
                    <p>
                      <FaEnvelope size={20} /> {member.email}
                    </p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Leader;
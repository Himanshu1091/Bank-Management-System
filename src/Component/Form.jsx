import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Form, InputGroup, FormControl } from "react-bootstrap";

const Form1 = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);
    console.log("Email:", email);
    console.log("Phone:", phone);
    alert("submited ");
  };

  return (
    <div style={{ backgroundColor: "#87CEEB", padding: "20px" }}>
      <Container>
        <h1 className="text-center mb-4">Exploring Digital Banking</h1>
        <Row>
          <Col md={6}>
            <Card>
              <Card.Body>
                <Card.Title>Digital Banking</Card.Title>
                <Card.Text>
                  Digital banking is the way of the future. With our digital banking platform, you can manage your finances, pay bills, and transfer money with ease.
                </Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card>
              <Card.Body>
                <Card.Title>Benefits of Digital Banking</Card.Title>
                <Card.Text>
                  Digital banking offers many benefits, including convenience, speed, and security. With our digital banking platform, you can enjoy these benefits and more.
                </Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <Card>
              <Card.Body>
                <Card.Title>Get Started with Digital Banking</Card.Title>
                <Form onSubmit={handleSubmit}>
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                    <FormControl
                      placeholder="Username"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      value={username}
                      onChange={(event) => setUsername(event.target.value)}
                    />
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon2">@</InputGroup.Text>
                    <FormControl
                      type="password"
                      placeholder="Password"
                      aria-label="Password"
                      aria-describedby="basic-addon2"
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                    />
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon3">@</InputGroup.Text>
                    <FormControl
                      type="email"
                      placeholder="Email"
                      aria-label="Email"
                      aria-describedby="basic-addon3"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                    />
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon4">@</InputGroup.Text>
                    <FormControl
                      type="tel"
                      placeholder="Phone"
                      aria-label="Phone"
                      aria-describedby="basic-addon4"
                      value={phone}
                      onChange={(event) => setPhone(event.target.value)}
                    />
                  </InputGroup>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Form1;

import 'bootstrap/dist/css/bootstrap.min.css';
import '@mui/material/styles';
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaRegBell } from 'react-icons/fa';
import { Pie, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';
import {Outlet} from 'react-router-dom'
import './Chart.css';


// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const Appal = () => {
  // Pie chart data for bank portfolio distribution
  const pieData = {
    labels: ['Savings', 'Investments', 'Loans', 'Deposits'],
    datasets: [
      {
        label: 'Bank Portfolio Distribution',
        data: [30, 25, 15, 30],
        backgroundColor: ['#FF6347', '#FFD700', '#98FB98', '#4682B4'],
        hoverOffset: 4,
      },
    ],
  };

  // Bar chart data for statistical analysis (e.g., monthly transactions)
  const barData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Transactions',
        data: [120, 150, 170, 130, 160, 190],
        backgroundColor: '#4682B4',
        borderColor: '#005b96',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
    <Container fluid className="Analysis" style={{ backgroundColor: 'rgba(211, 211, 211, 0.33)' }}>
      <Container className='p-3'>
      <Row className="Stat">
        {/* Left Half: Statistical Bank Analysis */}
        <Col md={6} className="StatLeft">
  <Card className="shadow-sm p-3 mb-5 bg-white rounded w-100">
    <Card.Header className="text-center bg-primary text-white">
      <h4>Bank Statistical Analysis</h4>
    </Card.Header>
    <Card.Body>
      <Row>
        {/* Pie Chart */}
        <Col md={6} className="d-flex justify-content-center">
          <div style={{ width: '90%' }}>
            <h5 className="text-center">Portfolio Distribution</h5>
            <Pie data={pieData} />
          </div>
        </Col>

        {/* Bar Chart */}
        <Col md={6} className="d-flex justify-content-center">
          <div style={{ width: '90%' }}>
            <h5 className="text-center">Monthly Transactions</h5>
            <Bar data={barData} />
          </div>
        </Col>
      </Row>
    </Card.Body>
  </Card>
</Col>

        {/* Right Half: Bank Details & Notices */}
        <Col md={6}>
  <Row>
    {/* Bank Details Section */}
    <Col md={12} className="mb-4">
      <Card className="shadow-sm p-3 mb-5 bg-white rounded w-100">
        <Card.Header className="text-center bg-success text-white">
          <h4>Bank Details</h4>
        </Card.Header>
        <Card.Body>
          <div className="d-flex justify-content-between">
            <div className="stat-item">
              <h5>Total Deposits</h5>
              <p>Rs.10,000,000,000</p>
            </div>
            <div className="stat-item">
              <h5>Loan Approvals</h5>
              <p>500+</p>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Col>

            {/* Notices Section */}
            <Col md={12}>
              <Row>
                <Col md={6}>
                  <Card className="notice-box loan-offer-card mt-0" id='LC'>
                    <Card.Body>
                      <h5><FaRegBell /> Loan & Offers</h5>
                      <p>Exclusive loan offers for new customers. Apply now!</p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6}>
                  <Card className="notice-box govt-scheme-card" id='gov'>
                    <Card.Body>
                      <h5><FaRegBell /> Govt & LIC Schemes</h5>
                      <p>Explore Government and LIC Schemes with attractive benefits.</p>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
      </Container>
    </Container>
    
    <Outlet/>
    </div>
  );
};

export default Appal;




import React, { useState } from 'react';
import './BankNavbar.css'; // Include additional styles if needed
import bank1 from './bank1.jpg';
import bank2 from './bank2.jpg';
import bank3 from './bank3.jpg';
import About from '../About';
import HeroSection from '../Digital';
import DataSection from '../Data';
import NewsArticles from '../News';
import Pop from '../Popup';
import Appal from './Chart';

function CarouselBank() {
  const [showForm, setShowForm] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Handle showing the form
  const handleApplyNowClick = () => {
    setShowForm(true);
    setFormSubmitted(false); // Reset submission state
  };

  // Handle form cancellation
  const handleFormCancel = () => {
    setShowForm(false);
    setFormSubmitted(false); // Reset submission state
  };

  // Handle form submission
  const handleFormSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true); // Set submission state
    setTimeout(() => {
      setShowForm(false); // Automatically close form after 2 seconds
    }, 2000);
  };

  return (
    <div>
      {showForm ? (
        <div className="container ">
          {formSubmitted ? (
            <div className="alert alert-success" role="alert">
              Form submitted successfully!
            </div>
          ) : (
            <>
              <h2>Apply Now</h2>
              <form onSubmit={handleFormSubmit}>
                <div className="mb-3">
                  <label htmlFor="fullName" className="form-label">Full Name</label>
                  <input type="text" className="form-control" id="fullName" placeholder="Enter your full name" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">Phone Number</label>
                  <input type="tel" className="form-control" id="phone" placeholder="Enter your phone number" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="loanAmount" className="form-label">Loan Amount</label>
                  <input type="number" className="form-control" id="loanAmount" placeholder="Enter desired loan amount" required />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                <button type="button" className="btn btn-secondary ms-2" onClick={handleFormCancel}>
                  Cancel
                </button>
              </form>
            </>
          )}
        </div>
      ) : (
        <>
          {/* Carousel */}
          <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active suyash">
                <img src={bank1} className="d-block w-100" alt="bank1" />
                <div className="carousel-caption d-none d-md-block ms-5" style={{ textAlign: 'center', bottom: '40%' }}>
                  <h1>Tick Off your wishlist</h1>
                  <p>“Avail quick and easy Personal loans to fulfill your needs”</p>
                  <button className="btn btn-warning mt-3" onClick={handleApplyNowClick}>
                    Apply Now
                  </button>
                </div>
              </div>
              <div className="carousel-item suyash">
                <img src={bank2} className="d-block w-100" alt="bank2" />
                <div className="carousel-caption d-none d-md-block" style={{ textAlign: 'center', bottom: '30%' }}>
                  <h1>Get More out <br /> of life</h1>
                  <p>Earn up to 7.00%* p.a on Savings <br /> Account</p>
                  <button className="btn btn-warning mt-3" onClick={handleApplyNowClick}>
                    Apply Now
                  </button>
                </div>
              </div>
              <div className="carousel-item suyash">
                <img src={bank3} className="d-block w-100" alt="bank3" />
                <div className="carousel-caption d-none d-md-block" style={{ textAlign: 'center', bottom: '20%' }}>
                  <h1>Go ahead and <br /> pursue your <br /> interests</h1>
                  <p>Earn up to 7.00%* p.a on Savings <br /> Account</p>
                  <button className="btn btn-warning mt-3" onClick={handleApplyNowClick}>
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <span className="carousel-control-prev-icon btn btn-dark" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              <span className="carousel-control-next-icon btn btn-dark" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>

          {/* Cards Section */}
          <div className="container mt-5">
            <div className="row">
              <div className="col-md-4">
                <div className="card">
                  <img src={bank1} className="card-img-top" alt="Card 1" />
                  <div className="card-body">
                    <h5 className="card-title">Personal Loan</h5>
                    <p className="card-text">Fulfill your dreams with quick and easy personal loans. Low interest rates and flexible terms available.</p>
                  </div>
                  <div className="card-footer">
                    <button className="btn btn-primary" onClick={handleApplyNowClick}>
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <img src={bank2} className="card-img-top" alt="Card 2" />
                  <div className="card-body">
                    <h5 className="card-title">Savings Account</h5>
                    <p className="card-text">Earn up to 7.00%* p.a on your savings. Secure your future with our flexible savings plans.</p>
                  </div>
                  <div className="card-footer">
                    <button className="btn btn-primary" onClick={handleApplyNowClick}>
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <img src={bank3} className="card-img-top" alt="Card 3" />
                  <div className="card-body">
                    <h5 className="card-title">Investment Opportunities</h5>
                    <p className="card-text">Explore exclusive investment options tailored to help grow your wealth and secure your future.</p>
                  </div>
                  <div className="card-footer">
                    <button className="btn btn-primary" onClick={handleApplyNowClick}>
                      Start Investing
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      <About></About>
      <HeroSection></HeroSection>
      <DataSection></DataSection>
      <NewsArticles></NewsArticles>
      <Appal></Appal>
      <Pop></Pop>

    </div>
  );
}

export default CarouselBank;

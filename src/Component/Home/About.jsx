import React, { useState } from "react";
// import './about.css';
import image1 from '../Images/visaP.png';
import image from '../Images/credit1.png';
import image2 from '../Images/cardR.png';
import image3 from '../Images/homeI.png';
import office from '../Images/officeguy.png';
import workingP from '../Images/proffesional.png';
import parent from '../Images/Parents.png';





const About=()=>{
  const [activepage,setactivepage]=useState("about");
  const renderContent=()=>{
    if(activepage==="about"){
      return(
        <div className="container mt-5" id="creditCard">
      

      {/* Carousel */}
      <div id="aboutCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">

          {/* Slide 1 */}
          <div className="carousel-item active">
            <div className="row ">
              {/* Left Side: Image */}
              <div className="col-md-5">
                <img src={image} className="img-fluid rounded shadow" alt="About Image 1" />
              </div>
              {/* Right Side: Description */}
              <div className="col-md-7 mt-5">
                <h2 className="ms-2">Coral credit cards</h2>
                <ul>
                  <li>Joining fee 500+ GST</li>
                  <li>Earn up to 10,000 additional rewards points</li>
                  <li>Avail of a discount 25%, up to 100 rs on a minimum ourchase of two movie tickets per <br />
                  transaction on <a href="#link1">www.bookmyshow.com</a></li>
                  <li>One complimentary railway lounge visit oer quarter</li>
                  <button className="btn border mt-3">Apply now</button>
                </ul>
              </div>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="carousel-item">
            <div className="row align-items-center">
              {/* Left Side: Image */}
              <div className="col-md-5">
                <img
                  src={image1}
                  className="img-fluid rounded shadow"
                  alt="About Image 2"
                />
              </div>
              {/* Right Side: Description */}
              <div className="col-md-7 mt-5">
                <h2>Platinum chip Credit Card</h2>
                <ul>
                  <li>No joining fee. No annual fee</li>
                  <li>Earn ICICI bank rewards points on your spends except <br />fuel</li>
                  <li>Exclusive dinning offers through culinary treats <br />Programme</li>
                  <li>Save on 1% fuel surcharge,waived off at HPCL petrol pumps</li>

                  <button className="btn border mt-3">Apply now</button>
                </ul>
                
              </div>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="carousel-item">
            <div className="row align-items-center">
              {/* Left Side: Image */}
              <div className="col-md-5">
                <img
                  src={image2}
                  className="img-fluid rounded shadow"
                  alt="About Image 3"
                />
              </div>
              {/* Right Side: Description */}
              <div className="col-md-7 mt-5">
                <h2>Rubyx credit card</h2>
                <ul>
                  <li>Exclusive privileges-entertainment , dining, wellness and <br />golf</li>
                  <li>Complimentary airport lounge access</li>
                  <li>Buy 1, get 1 movie ticket free at BookMyShow</li>
                  <li>Welcome Vouchers on Shopping and Travel worth <br />Rs 5000</li>

                  <button className="btn border mt-3">Apply now</button>
                  
                </ul>
              </div>
            </div>
          </div>

          {/* Slide 4 */}
          <div className="carousel-item">
            <div className="row align-items-center">
              {/* Left Side: Image */}
              <div className="col-md-5">
                <img
                  src={image3}
                  className="img-fluid rounded shadow"
                  alt="About Image 3"
                />
              </div>
              {/* Right Side: Description */}
              <div className="col-md-7 mt-2">
                <h2>Home Insurance</h2>
                <p>A home is a place, which provides you the warmth <br /> and peace that one looks forward to at the end of a hard <br />day's work. However, our home can also be threatened with burglary, <br />damages caused by natural and man-made disasters.</p>
                <ul>
                  <li>Secure your home against natural calamities like <br />earthquakes, floods, cyclones, storms, etc.</li>
                  <li>Enjoy a 25% discount when you insure your household <br /> possessions</li>
                  <li>Protect your jewellery with our All-Risk Cover and stay worry-free</li>
                  <li>Cover your home against losses due to burglary, terrorism, etc.</li>
                  <button className="btn border mt-3">Enroll now</button>
                </ul>
              </div>
            </div>
          </div>


        </div>

        {/* Carousel Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#aboutCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#aboutCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
      );
    }else if(activepage==="solution"){
      return(
        <div className="cardcaurasel">
  <div className="row mt-4">
    {/* Card 1 */}
    <div className="col-12 col-sm-6 col-md-4 border mx-3 card-container p-2" style={{ maxWidth: '20rem' }}>
      <div className="row align-items-center">
        <div className="col-6 text-center text-md-start">
          <h4>Starting a career</h4>
          <a href="##" className="text-decoration-none">View solutions</a>
        </div>
        <div className="col-6">
          <img src={office} alt="Starting a career" className="img-fluid" />
        </div>
      </div>
    </div>

    {/* Card 2 */}
    <div className="col-12 col-sm-6 col-md-4 border mx-3 cardcaurasel p-2" style={{ maxWidth: '20rem' }}>
      <div className="row align-items-center">
        <div className="col-6 text-center text-md-start">
          <h4>Working professional</h4>
          <a href="##" className="text-decoration-none">View solutions</a>
        </div>
        <div className="col-6">
          <img src={workingP} alt="Working professional" className="img-fluid" />
        </div>
      </div>
    </div>

    {/* Card 3 */}
    <div className="col-12 col-sm-6 col-md-4 border mx-3 cardcaurasel p-2" style={{ maxWidth: '20rem' }}>
      <div className="row align-items-center">
        <div className="col-6 text-center text-md-start">
          <h4>Early Parents</h4>
          <a href="##" className="text-decoration-none">View solutions</a>
        </div>
        <div className="col-6">
          <img src={parent} alt="Early Parents" className="img-fluid" />
        </div>
      </div>
    </div>
  </div>

  <div className="row mt-5">
    {/* Card 4 */}
    <div className="col-12 col-sm-6 col-md-4 border mx-3 cardcaurasel p-2" style={{ maxWidth: '20rem' }}>
      <div className="row align-items-center">
        <div className="col-6 text-center text-md-start">
          <h4>Family person</h4>
          <a href="##" className="text-decoration-none">View solutions</a>
        </div>
        <div className="col-6">
          <img src={workingP} alt="Family person" className="img-fluid" />
        </div>
      </div>
    </div>

    {/* Card 5 */}
    <div className="col-12 col-sm-6 col-md-4 border mx-3 cardcaurasel p-2" style={{ maxWidth: '20rem' }}>
      <div className="row align-items-center">
        <div className="col-6 text-center text-md-start">
          <h4>Working professional</h4>
          <a href="##" className="text-decoration-none">View solutions</a>
        </div>
        <div className="col-6">
          <img src={workingP} alt="Working professional" className="img-fluid" />
        </div>
      </div>
    </div>

    {/* Card 6 */}
    <div className="col-12 col-sm-6 col-md-4 border mx-3 cardcaurasel p-2" style={{ maxWidth: '20rem' }}>
      <div className="row align-items-center">
        <div className="col-6 text-center text-md-start">
          <h4>Working woman</h4>
          <a href="##" className="text-decoration-none">View solutions</a>
        </div>
        <div className="col-6">
          <img src={workingP} alt="Working woman" className="img-fluid" />
        </div>
      </div>
    </div>
  </div>
</div>

      )
    }
  }
    return(
      <div className="conatainer-fluid" style={{backgroundColor: 'rgba(255, 247, 235, 255)'}} id="cardd">
        <div className="container  mt-5 py-3 ">
             
            <button className="btn border btn-warning mx-2 custom-btn  " onClick={()=>setactivepage("about")}>Find the right product for you</button>
            <button className="btn border btn-primary mx-2 custom-btn" onClick={()=>setactivepage("solution")}>Life stage solutions</button>
            <div className="container mt-5">{renderContent()}</div>

            
        </div>
        </div>
    )
}
export default About;

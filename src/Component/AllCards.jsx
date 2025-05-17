import React from 'react';
import './Depo.css';

// Import your images
import creditCardImage from '../Images/card1.jpg';
import debitCardImage from '../Images/card2.jpg';
import prepaidCardImage from '../Images/card3.jpg';

const Allcard = [
  {
    title: 'Credit Card',
    description: 'Get exclusive offers and cashback with our Credit Cards.',
    features: [
      'High credit limit',
      'Reward points on every purchase',
      'Low interest rates',
    ],
    buttonLabel: 'Apply Now',
    image: creditCardImage, // Use imported image here
    detailedDescription: 'With our Credit Card, you can enjoy a variety of benefits including exclusive offers, cashback, and much more. Perfect for both everyday purchases and special rewards.',
  },
  {
    title: 'Debit Card',
    description: 'Access your funds anytime, anywhere with our Debit Cards.',
    features: [
      'Wide ATM network',
      'Zero annual fees',
      'Secure online transactions',
    ],
    buttonLabel: 'Get Started',
    image: debitCardImage, // Use imported image here
    detailedDescription: 'Our Debit Card gives you direct access to your bank account, ensuring you can make transactions with ease. Enjoy zero annual fees and added security features for safe transactions.',
  },
  {
    title: 'Prepaid Card',
    description: 'Manage your expenses with our easy-to-use Prepaid Cards.',
    features: [
      'Reloadable cards',
      'Accepted worldwide',
      'No credit check required',
    ],
    buttonLabel: 'Sign Up',
    image: prepaidCardImage, // Use imported image here
    detailedDescription: 'Prepaid Cards offer you the flexibility to load money and spend within your budget. They are accepted globally, and no credit check is required to sign up.',
  },
];

function Ccard() {
  return (
    <div className="depo-app">
      <header className="depo-header">
        <h1 className="depo-header-title">Explore Our Card Options</h1>
        <p className="depo-header-description">Choose the best card that suits your needs.</p>
      </header>
      <div className="depo-card-section">
        {Allcard.map((card, index) => (
          <div className="depo-card" key={index}>
            <img src={card.image} alt={card.title} className="depo-card-image" />
            <h2 className="depo-card-title">{card.title}</h2>
            <p className="depo-card-description">{card.description}</p>
            <p className="depo-card-detailed-description">{card.detailedDescription}</p>
            <ul className="depo-card-features">
              {card.features.map((feature, i) => (
                <li className="depo-card-feature" key={i}>{feature}</li>
              ))}
            </ul>
            <button className="depo-card-button">{card.buttonLabel}</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Ccard;

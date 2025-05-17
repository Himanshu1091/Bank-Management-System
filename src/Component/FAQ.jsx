import React from "react";

const FAQPage = () => {
  return (
    <div style={{ backgroundColor: "wheat", padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>Frequently Asked Questions</h1>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <h2>General Questions</h2>
        <ul>
          <li>
            <strong>What is the minimum balance required to open a savings account?</strong>
            <p>The minimum balance required to open a savings account is $100.</p>
          </li>
          <li>
            <strong>How do I apply for a loan?</strong>
            <p>You can apply for a loan by visiting our website and filling out the online application form.</p>
          </li>
          <li>
            <strong>What are the bank's business hours?</strong>
            <p>The bank's business hours are Monday to Friday, 9am to 5pm.</p>
          </li>
        </ul>

        <h2>Account-Related Questions</h2>
        <ul>
          <li>
            <strong>How do I check my account balance?</strong>
            <p>You can check your account balance by logging into your online banking account or by visiting one of our branches.</p>
          </li>
          <li>
            <strong>Can I transfer money between accounts?</strong>
            <p>Yes, you can transfer money between accounts using our online banking system or by visiting one of our branches.</p>
          </li>
          <li>
            <strong>How do I report a lost or stolen debit card?</strong>
            <p>You can report a lost or stolen debit card by calling our customer service number or by visiting one of our branches.</p>
          </li>
        </ul>

        <h2>Technical Questions</h2>
        <ul>
          <li>
            <strong>What browsers are supported by the online banking system?</strong>
            <p>The online banking system supports Chrome, Firefox, Safari, and Internet Explorer.</p>
          </li>
          <li>
            <strong>How do I reset my password?</strong>
            <p>You can reset your password by clicking on the "Forgot Password" link on the login page.</p>
          </li>
          <li>
            <strong>What is the recommended screen resolution for the online banking system?</strong>
            <p>The recommended screen resolution for the online banking system is 1024x768 or higher.</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FAQPage;
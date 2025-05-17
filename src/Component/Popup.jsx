import React, { useState } from 'react'; // use UseEffect If needed..


function Pop() {
  const [isVisible, setIsVisible] = useState(false);

  // useEffect(() => {
  //   // Show the popup when the component mounts
  //   setIsVisible(true);
  // }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    isVisible && (
      <div className="popup-overlay">
        <div className="popup-box">
          <h2 className='text-warning fw-bold ' >Your Bank..!</h2>
          <p className='fw-bold fs-5'>Welcome to Your Bank Account Management System..!
            <br/>Whether you’re saving, investing, or managing your finances, <br/>we’re here to help you every step of the way.
          </p>
          <button className="close-button" onClick={handleClose}>Close</button>
        </div>
      </div>
    )
  );
}

// function Pop() {
//   return (
//     <div className="Pop">
//       <WelcomePopup />
//       <h1>My Website</h1>
//       <p>Explore the content below.</p>
//     </div>
//   );
// }

export default Pop;


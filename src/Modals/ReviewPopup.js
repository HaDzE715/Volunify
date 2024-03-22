import React, { useState } from "react";
import "../App.css"; // Import the CSS file for styling
import ProfilePicture from "../Pictures/Program.png"; // Import the profile picture

function ReviewPopup({ onClose }) {
  const [reviewText, setReviewText] = useState(""); // State to track the review text

  const handleInputChange = (event) => {
    setReviewText(event.target.value); // Update the review text state
  };

  const handleSubmit = () => {
    // Send the review text to the backend
    console.log("Review submitted:", reviewText);
    // Close the popup
    onClose();
  };

  return (
    <div className="review-popup">
      <div className="popup-content">
        <img src={ProfilePicture} alt="Profile" className="profile-picture" />
        <textarea
          className="review-textarea"
          placeholder="How was your experience?"
          value={reviewText} // Bind the value of the textarea to the reviewText state
          onChange={handleInputChange} // Handle changes in the textarea
        ></textarea>
        <div className="button-container">
          <button className="submit-button" onClick={handleSubmit}>
            Submit
          </button>
          <button className="cancel-button" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default ReviewPopup;

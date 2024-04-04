import React from "react";

function Feedback({ profileImage, profileName, feedbackText }) {
  return (
    <div className="feedback">
      <div className="feedback-profile-image">
        <img src={profileImage} alt="Profile" />
      </div>
      <div className="profile-info">
        <h4>{profileName}</h4>
        <p>{feedbackText}</p>
      </div>
    </div>
  );
}

export default Feedback;

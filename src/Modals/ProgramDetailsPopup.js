import React from "react";
import Cover from "../Pictures/Cover.png";
import ProgramPic from "../Pictures/Program.png";
import CloseIcon from "@mui/icons-material/Close";
import Feedback from "../Components/Feedback";
import profpic from "../Pictures/me.png";

function ProgramDetailsPopup({ onClose }) {
  const handleClose = (event) => {
    event.stopPropagation(); // Prevent event from bubbling up to parent components
    onClose(); // Call the onClose function passed from the parent component
  };

  return (
    <div className="program-details-popup">
      <div className="popup-header">
        <img className="cover-image" src={Cover} alt="Cover" />
        <img className="profile-image" src={ProgramPic} alt="Profile" />
      </div>
      <div className="close-button" onClick={handleClose}>
        <CloseIcon />
      </div>
      <div className="program-details">
        <div className="program-info">
          <h3>Aluma</h3>
          <p>
            Aluma helps youth navigate choices between army service, education,
            and employment.
          </p>
          <p>📍 Tel Aviv, Yaffo.</p>
          <p>📅 24/03/2024 - 15/04/2024</p>
          <p>🧔 Maximum volunteers - 20</p>
          <p>⏰ Mondays and Fridays</p>
        </div>
      </div>
      <div className="feedbacks-section">
        <h4>Feedbacks:</h4>
        <Feedback
          profileImage={profpic}
          profileName="Hade Bayaa"
          feedbackText="Great program I learned alot!"
        />
        <Feedback
          profileImage={profpic}
          profileName="Hade Bayaa"
          feedbackText="Great program I learned alot!"
        />
        <Feedback
          profileImage={profpic}
          profileName="Hade Bayaa"
          feedbackText="Great program I learned alot!"
        />
        <Feedback
          profileImage={profpic}
          profileName="Hade Bayaa"
          feedbackText="Great program I learned alot!"
        />
        <Feedback
          profileImage={profpic}
          profileName="Hade Bayaa"
          feedbackText="Great program I learned alot!"
        />
        <Feedback
          profileImage={profpic}
          profileName="Hade Bayaa"
          feedbackText="Great program I learned alot!"
        />
        <Feedback
          profileImage={profpic}
          profileName="Hade Bayaa"
          feedbackText="Great program I learned alot!"
        />
      </div>
    </div>
  );
}

export default ProgramDetailsPopup;

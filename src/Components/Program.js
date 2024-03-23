import React, { useState } from "react";
import "../App.css"; // Import the CSS file for styling
import Cover from "../Pictures/Cover.png";
import ProgramPic from "../Pictures/Program.png";
import ProgramDetailsPopup from "../Modals/ProgramDetailsPopup"; // Import the ProgramDetailsPopup component

function Program() {
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [applicationStatus, setApplicationStatus] = useState("Apply Now!"); // Initial application status
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleApplyClick = () => {
    setIsApplyModalOpen(true);
  };

  const handleApplyConfirmed = (event) => {
    // Logic to handle apply confirmation
    console.log("Applying...");
    setIsApplyModalOpen(false);
    setApplicationStatus("Pending..."); // Change application status to "Pending"
    event.stopPropagation(); // Stop event propagation
  };

  const handleCancelClick = () => {
    setIsApplyModalOpen(false);
  };

  const handleProgramClick = (event) => {
    // Check if the clicked element has the class "apply-button"
    if (!event.target.classList.contains("apply-button")) {
      setIsPopupOpen(true);
    }
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="program-container" onClick={handleProgramClick}>
      <div className="program-image">
        <img src={Cover} alt="Program" />
      </div>
      <div className="circled-picture">
        <img src={ProgramPic} alt="Circled" />
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
        </div>
        <div>
          {applicationStatus === "Apply Now!" ? (
            <button className="apply-button" onClick={handleApplyClick}>
              {applicationStatus}
            </button>
          ) : (
            <button className="pending-button">{applicationStatus}</button>
          )}
        </div>
      </div>
      {isApplyModalOpen && (
        <div className="finish-modal" onClick={(e) => e.stopPropagation()}>
          <div className="modal-content">
            <p>Are you sure you want to apply?</p>
            <div className="button-container">
              <button className="yes-button" onClick={handleApplyConfirmed}>
                Yes
              </button>
              <button className="cancel-button" onClick={handleCancelClick}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      {isPopupOpen && <ProgramDetailsPopup onClose={handleClosePopup} />}
    </div>
  );
}

export default Program;

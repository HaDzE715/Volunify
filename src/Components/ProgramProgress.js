import React, { useState } from "react";
import UpdatePopUp from "../Modals/UpdatePopUp"; // Import the UpdatePopUp component
import "../App.css"; // Import the CSS file for styling
import Cover from "../Pictures/Cover.png";
import ProgramPic from "../Pictures/Program.png";
import ReviewPopup from "../Modals/ReviewPopup"; // Import the ReviewPopup component

function ProgramProgress() {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const [isFinishModalOpen, setIsFinishModalOpen] = useState(false);
  const [isReviewMode, setIsReviewMode] = useState(false);
  const [isReviewPopupOpen, setIsReviewPopupOpen] = useState(false);

  const handleUpdateClick = () => {
    setIsPopUpOpen(true);
  };

  const handleFinishClick = () => {
    setIsFinishModalOpen(true);
  };

  const handleClosePopUp = () => {
    setIsPopUpOpen(false);
  };

  const handleYesClick = () => {
    console.log("User clicked Yes");
    setIsReviewMode(true);
    setIsFinishModalOpen(false); // Close the finish modal
  };

  const handleCancelClick = () => {
    console.log("User clicked Cancel");
    setIsFinishModalOpen(false); // Close the finish modal
  };

  const handleWriteReviewClick = () => {
    setIsReviewPopupOpen(true);
  };

  const handleCloseReviewPopup = () => {
    setIsReviewPopupOpen(false);
  };

  return (
    <div className="program-container">
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
          {isReviewMode ? (
            <button className="review-button" onClick={handleWriteReviewClick}>
              Write a review!
            </button>
          ) : (
            <>
              <button className="finish-button" onClick={handleFinishClick}>
                Finish
              </button>
              <button className="update-button" onClick={handleUpdateClick}>
                Update
              </button>
            </>
          )}
        </div>
      </div>
      {isPopUpOpen && <UpdatePopUp onClose={handleClosePopUp} />}
      {isFinishModalOpen && (
        <div className="finish-modal">
          <div className="modal-content">
            <p>Are you sure you want to finish the progress?</p>
            <div className="button-container">
              <button className="yes-button" onClick={handleYesClick}>
                Yes
              </button>
              <button className="cancel-button" onClick={handleCancelClick}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      {isReviewPopupOpen && <ReviewPopup onClose={handleCloseReviewPopup} />}
    </div>
  );
}

export default ProgramProgress;

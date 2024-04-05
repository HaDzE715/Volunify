import React, { useState } from "react";

function UpdatePopUp({ onClose }) {
  const [arrivalDate, setArrivalDate] = useState("");
  const [whatIDid, setWhatIDid] = useState("");

  const handleUpdateArrival = () => {
    // Logic to handle updating arrival details
    console.log("Updating arrival details:", arrivalDate, whatIDid);
    // You can add further logic here, such as sending the updated details to the server
    // and closing the pop-up after successful update
    onClose();
  };

  return (
    <div className="popup-container">
      <div className="popup-content">
        <h2>New Report</h2>
        <div className="update-group">
          <div>
            <label htmlFor="arrivalDate" style={{ display: "block" }}>
              Date:
            </label>
            <input
              type="date"
              id="arrivalDate"
              value={arrivalDate}
              onChange={(e) => setArrivalDate(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="whatIDid" style={{ display: "block" }}>
              My Progress for today:
            </label>
            <textarea
              id="whatIDid"
              value={whatIDid}
              onChange={(e) => setWhatIDid(e.target.value)}
              style={{ width: "100%", height: "200px" }}
            />
          </div>
        </div>
        <button onClick={handleUpdateArrival}>Add Report</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
}

export default UpdatePopUp;

import React, { useState } from "react";

function UpdatePopUp({ onClose }) {
  const [arrivalDate, setArrivalDate] = useState("");
  const [arrivalTime, setArrivalTime] = useState("");

  const handleUpdateArrival = () => {
    // Logic to handle updating arrival details
    console.log("Updating arrival details:", arrivalDate, arrivalTime);
    // You can add further logic here, such as sending the updated details to the server
    // and closing the pop-up after successful update
    onClose();
  };

  return (
    <div className="popup-container">
      <div className="popup-content">
        <h2>Update your progress</h2>
        <div>
          <label htmlFor="arrivalDate">Arrival Date:</label>
          <input
            type="date"
            id="arrivalDate"
            value={arrivalDate}
            onChange={(e) => setArrivalDate(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="arrivalTime">Arrival Time:</label>
          <input
            type="time"
            id="arrivalTime"
            value={arrivalTime}
            onChange={(e) => setArrivalTime(e.target.value)}
          />
        </div>
        <button onClick={handleUpdateArrival}>Update Arrival</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
}

export default UpdatePopUp;

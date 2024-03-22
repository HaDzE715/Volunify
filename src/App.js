import "./App.css";
import React from "react";
import Sidebar from "./Components/sidebar";
import Topbar from "./Components/Topbar";
import Dashboard from "./Pages/Dashboard";
import Progress from "./Pages/Progress";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <div className="main-content">
          <Topbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/progress" element={<Progress />} />
            {/* <Route path="/messages" element={<Messages />} /> */}
            {/* <Route path="/individual" element={<Individual />} /> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

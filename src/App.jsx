import React, { useState } from "react";
import search from "./assets/search-icon.png";
import pic2 from "./assets/pic2.jpg";
import dropdown from "./assets/arrow-down.png";
import "./App.css";
import Navbar from "./Components/Navbar";
import Card from "./Components/Card";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <>
      <div className="search-bar-container">
        <div className="search-icon-container">
          <img src={search} alt="search" className="search-icon" />
        </div>
        <input
          type="text"
          value={searchQuery}
          placeholder="Search"
          onChange={handleSearchChange}
          className="search-input"
        />
      </div>
      <div className="profile-details-container">
        <img src={pic2} className="profile-img" alt="profile-pic" />
        <label className="profile-name">Fakhtar Naveed</label>
        <img src={dropdown} alt="dropdown" className="dropdown-img" />
      </div>
      <Navbar />
      <div className="list-card-container">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
}

export default App;
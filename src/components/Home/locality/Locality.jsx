import React from 'react' 
import LocalityCard from "./LocalityCard.jsx"
import "./locality.css";
function Locality() {
  return (
    <div className="locality-container">
      <div className="locality-section">
        <h1>
          Popular localities in and around <strong>Mumbai</strong>
        </h1>
        <div className="locality-cards">
          <LocalityCard />
          <LocalityCard />
          <LocalityCard />
          <LocalityCard />
          <LocalityCard />
          <LocalityCard />
          <LocalityCard />
          <LocalityCard />
          <LocalityCard />
          {/* <LocalityCard /> */}
        </div>
      </div>
    </div>
  );
}

export default Locality
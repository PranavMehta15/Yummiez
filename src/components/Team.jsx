import React, { useEffect } from 'react';
import './Team.css';

export default function Team() {
  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  return (
    <div className="team-container">
      <div className="team-content">
        <div className="team-image">
          <img
            src="./fulllogo.png"
            alt="image"
          />
        </div>
        <div className="team-text">
          <h2 className="team-title">
            Yummiez was born out of <span>Chandigarh University</span> from a peer of <span>Passionate Developers</span>
          </h2>
       
        </div>
      </div>
    </div>
  );
}

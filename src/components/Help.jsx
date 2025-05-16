import React, { useEffect } from 'react';
import './Help.css';

export default function Help() {
  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  return (
    <div className="help-container">
      <div className="help-content">
        <div className="help-image">
          <img
            src="./logo.png"
            alt="image"
          />
        </div>
        <div className="help-text">
          <h2 className="help-title">
            Need Help & Support?
            Write to us at 
             
          </h2>
          <h3><span> yummiez@gmail.com</span></h3>
          

          <h2 className="help-title">
            Or Dial our toll-free number 
             
          </h2>
          <h3><span> 18006231988</span></h3>


          <p className="help-paragraph">
           Always Feel Free to Reach Out to Us :)
           
          </p>
          
        </div>
      </div>
    </div>
  );
}

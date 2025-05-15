import React, { useEffect } from 'react';
import './AboutUs.css';

export default function About() {
  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-image">
          <img
            src="./logo.png"
            alt="image"
          />
        </div>
        <div className="about-text">
          <h2 className="about-title">
            The development of yummiez is carried out by passionate developers
          </h2>
          <p className="about-paragraph">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem
            accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde
            aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!
          </p>
          <p className="about-paragraph">
            Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at?
            Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.
          </p>
        </div>
      </div>
    </div>
  );
}
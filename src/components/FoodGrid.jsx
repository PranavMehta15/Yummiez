import React from 'react';
import './FoodGrid.css';

import pizza from '../assets/pizza.png';
import noodles from '../assets/noodles.png';
import curry from '../assets/paneer.png';
import biryani from '../assets/biryani.png';
import butterChicken from '../assets/butter_chicken.png';
import paratha from '../assets/paratha.png';
import thali from '../assets/thali.png';
import dosa from '../assets/dosa.png';
import rajma from '../assets/rajma.png';
import puri from '../assets/bhature.png';

const foodImages = [
  pizza,
  noodles,
  curry,
  biryani,
  butterChicken,
  paratha,
  thali,
  dosa,
  rajma,
  puri,
];

const FoodGrid = () => {
  return (
    <div className="food-grid-container">
      <div className="food-items-track">
        {/* Duplicate list to ensure seamless looping */}
        {[...foodImages, ...foodImages].map((src, index) => (
          <div className="food-item" key={index}>
            <img src={src} alt={`food-${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodGrid;

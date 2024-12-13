import React from 'react';
import restaurant from './img/restaurant.jpg';

function Main() {
  return (
    <div className="main">
      <div className="text-content">
        <h1>Little Lemon Restaurant</h1>
        <h3>Chicago</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <button className="booking-button">Reserve a Table</button>
      </div>
      <img src={restaurant} alt="Restaurant" />
    </div>
  );
}

export default Main;
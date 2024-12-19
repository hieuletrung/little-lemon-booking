import React from 'react';
import restaurant from './img/restaurant.jpg';
import restaurantChef from './img/restaurant chef B.jpg';

function Details() {
  return (
    <div className="details">
      <div className="details-text">
        <h2>Little Lemon</h2>
        <h3>Chicago</h3>
        <p>Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. The restaurant features a locally-sourced menu with daily specials.</p>
      </div>
      <div className="details-images">
        <img src={restaurant} alt="Restaurant" className="restaurant-image" />
        <img src={restaurantChef} alt="Restaurant Chef" className="restaurant-chef-image" />
      </div>
    </div>
  );
}

export default Details;
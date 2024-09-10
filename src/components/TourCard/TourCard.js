// Purpose: Reusable component for displaying individual tour information.
// Expected content: Tour details like title, description, price, and an image.

import React from 'react';
import { Link } from 'react-router-dom';
import './TourCard.css';

const TourCard = ({ id, title, description, price, image }) => {
  return (
    <div className="tour-card">
      <img src={image} alt={title} className="tour-image" />
      <div className="tour-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <p className="tour-price">${price}</p>
        <Link to={`/tour/${id}`} className="book-button">View Details</Link>
      </div>
    </div>
  );
};

export default TourCard;
// src/pages/TourDetails/TourDetails.js
// Purpose: Detailed view component for a specific tour.
// Expected content: Comprehensive information about a selected tour.

import React from 'react';
import { useParams } from 'react-router-dom';

const TourDetails = () => {
  let { id } = useParams();

  return (
    <div>
      <h1>Tour Details</h1>
      <p>Tour ID: {id}</p>
    </div>
  );
};

export default TourDetails;
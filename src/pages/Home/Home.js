import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  // Mock data for featured destinations and popular tours
  const featuredDestinations = [
    { id: 1, name: 'Paris', image: 'paris.jpg' },
    { id: 2, name: 'Tokyo', image: 'tokyo.jpg' },
    { id: 3, name: 'New York', image: 'newyork.jpg' },
  ];

  const popularTours = [
    { id: 1, name: 'Eiffel Tower Tour', destination: 'Paris', price: 50 },
    { id: 2, name: 'Mount Fuji Excursion', destination: 'Tokyo', price: 100 },
    { id: 3, name: 'Central Park Bike Tour', destination: 'New York', price: 30 },
  ];

  return (
    <div className="home">
      <h1>Welcome to Our Tourism Website</h1>
      
      <section className="featured-destinations">
        <h2>Featured Destinations</h2>
        <div className="destination-list">
          {featuredDestinations.map(destination => (
            <div key={destination.id} className="destination-card">
              <img src={`/assets/images/${destination.image}`} alt={destination.name} />
              <h3>{destination.name}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="popular-tours">
        <h2>Popular Tours</h2>
        <div className="tour-list">
          {popularTours.map(tour => (
            <div key={tour.id} className="tour-card">
              <h3>{tour.name}</h3>
              <p>Destination: {tour.destination}</p>
              <p>Price: ${tour.price}</p>
              <Link to={`/tour/${tour.id}`}>View Details</Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
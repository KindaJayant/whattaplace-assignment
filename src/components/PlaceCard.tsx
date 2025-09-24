import React from 'react';
import type { Place } from '../types/place';
import './PlaceCard.css';
import { FaStar } from 'react-icons/fa';

interface PlaceCardProps {
  place: Place;
}

const PlaceCard: React.FC<PlaceCardProps> = ({ place }) => {
  return (
    <div className="place-card">
      <div className="place-image-container">
        <img src={place.imageUrl} alt={place.name} className="place-image" />
      </div>
      <div className="place-info">
        <div className="place-info-header">
          <h3 className="place-name">{place.name}</h3>
          <p className="place-price">Rs. {place.pricePerHour} per hour</p>
        </div>
        <div className="place-info-footer">
           <p className="place-rating"><FaStar /> {place.rating}</p>
           <p className="place-description">{place.description}</p>
        </div>
      </div>
    </div>
  );
};

export default PlaceCard;
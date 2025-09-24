
import React from 'react';
import type { Place } from '../types/place';
import PlaceCard from './PlaceCard';
import './PlaceList.css';

interface PlaceListProps {
  places: Place[];
}

const PlaceList: React.FC<PlaceListProps> = ({ places }) => {
  return (
    <div className="place-list">
      {places.length > 0 ? (
        places.map(place => <PlaceCard key={place.id} place={place} />)
      ) : (
        <p className="no-results">No places found matching your criteria.</p>
      )}
    </div>
  );
};

export default PlaceList;
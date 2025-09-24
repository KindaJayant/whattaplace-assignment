import  { useState, useEffect } from 'react';
import { places as mockPlaces } from './data/mockData';
import type { Place } from './types/place';
import PlaceList from './components/PlaceList';
import Filters from './components/Filters';
import Header from './components/Header';
import './App.css';

function App() {
  const [allPlaces] = useState<Place[]>(mockPlaces);
  const [filteredPlaces, setFilteredPlaces] = useState<Place[]>(allPlaces);

  // State for the three dropdown filters
  const [locationFilter, setLocationFilter] = useState('');
  const [priceFilter, setPriceFilter] = useState('');
  const [activityFilter, setActivityFilter] = useState('');

  useEffect(() => {
    let result = allPlaces;

    if (locationFilter) {
      result = result.filter(place => place.location === locationFilter);
    }
    if (priceFilter) {
      result = result.filter(place => place.pricePerHour <= parseInt(priceFilter, 10));
    }
    if (activityFilter) {
      result = result.filter(place => place.activity === activityFilter);
    }
    
    setFilteredPlaces(result);
  }, [locationFilter, priceFilter, activityFilter, allPlaces]);

  return (
    <>
      <Header />
      <main className="main-content">
        <div className="container">
          <header className="page-header">
            <h1>All Spaces</h1>
            <p>Enjoy, browse & book the most unique locations.</p>
          </header>
          <Filters 
            onLocationChange={setLocationFilter}
            onPriceChange={setPriceFilter}
            onActivityChange={setActivityFilter}
          />
        </div>
        <PlaceList places={filteredPlaces} />
      </main>
    </>
  );
}

export default App;
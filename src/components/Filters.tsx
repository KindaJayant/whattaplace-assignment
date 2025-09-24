import React, { useState } from 'react';
import { FaCamera, FaVideo, FaUsers, FaPodcast, FaPaintBrush, FaGlassCheers, FaStar } from 'react-icons/fa';
import './Filters.css';

interface FiltersProps {
  onLocationChange: (location: string) => void;
  onPriceChange: (price: string) => void;
  onActivityChange: (activity: string) => void;
}

const activityIcons = [
  { name: 'All Spaces', icon: <FaStar /> },
  { name: 'Photoshoot', icon: <FaCamera /> },
  { name: 'Video Shoot', icon: <FaVideo /> },
  { name: 'Workshops', icon: <FaUsers /> },
  { name: 'Podcast', icon: <FaPodcast /> },
  { name: 'Events', icon: <FaGlassCheers /> },
  { name: 'Exhibitions', icon: <FaPaintBrush /> },
];

const Filters: React.FC<FiltersProps> = ({ onLocationChange, onPriceChange, onActivityChange }) => {
  const [activeIcon, setActiveIcon] = useState('All Spaces');

  const handleIconClick = (activityName: string) => {
    setActiveIcon(activityName);
    const filterValue = activityName === 'All Spaces' ? '' : activityName;
    // Note: This controls the same state as the dropdown. They will work together.
    onActivityChange(filterValue);
  };

  return (
    <div className="filters-wrapper">
        <div className="dropdown-filters">
            <select className="filter-select" onChange={(e) => onLocationChange(e.target.value)}>
                <option value="">Location</option>
                <option value="New Delhi">New Delhi</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Bangalore">Bangalore</option>
            </select>
            
            <select className="filter-select" onChange={(e) => onActivityChange(e.target.value)}>
                <option value="">Activity</option>
                <option value="Photoshoot">Photoshoot</option>
                <option value="Campaign">Campaign</option>
                <option value="Event">Event</option>
                <option value="Video Shoot">Video Shoot</option>
                <option value="Workshops">Workshops</option>
                <option value="Podcast">Podcast</option>
                <option value="Exhibitions">Exhibitions</option>
            </select>

             <select className="filter-select" onChange={(e) => onPriceChange(e.target.value)}>
                <option value="">Price Range</option>
                <option value="5000">Under 5000</option>
                <option value="10000">Under 10000</option>
                <option value="20000">Under 20000</option>
            </select>
        </div>
        <div className="activity-filters-container">
        {activityIcons.map((filter) => (
            <div 
            key={filter.name}
            className={`activity-item ${activeIcon === filter.name ? 'active' : ''}`}
            onClick={() => handleIconClick(filter.name)}
            >
            <div className="activity-icon">{filter.icon}</div>
            <span className="activity-name">{filter.name}</span>
            </div>
        ))}
        </div>
    </div>
  );
};

export default Filters;
import React from 'react';
import { categories } from '../data/products';
import './Filter.css';

function Filter({ selectedCategory, onCategoryChange }) {
  return (
    <div className="filter">
      <div className="filter-buttons">
        {categories.map(category => (
          <button
            key={category.id}
            className={`filter-button ${selectedCategory === category.id ? 'active' : ''}`}
            onClick={() => onCategoryChange(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Filter;

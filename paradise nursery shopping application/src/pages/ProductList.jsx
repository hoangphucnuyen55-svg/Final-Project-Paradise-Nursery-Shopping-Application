import React from 'react';
import { useCart } from '../context/CartContext';
import PlantCard from '../components/PlantCard';
import './ProductListingPage.css';

import snakePlantImg from '../assets/snake-plant.jpg';
import spiderPlantImg from '../assets/spider-plant.jpg';
import lavenderImg from '../assets/lavender.jpg';
import rosemaryImg from '../assets/rosemary.jpg';
import fiddleLeafFigImg from '../assets/fiddle-leaf-fig.jpg';
import aloeVeraImg from '../assets/aloe-vera.jpg';
import Header from '../components/Header';

const plants = [
  { id: 1, category: 'Air Purifying', name: 'Snake Plant', price: 15, thumbnail: snakePlantImg },
  { id: 2, category: 'Air Purifying', name: 'Spider Plant', price: 12, thumbnail: spiderPlantImg },
  { id: 3, category: 'Aromatic', name: 'Lavender', price: 10, thumbnail: lavenderImg },
  { id: 4, category: 'Aromatic', name: 'Rosemary', price: 8, thumbnail: rosemaryImg },
  { id: 5, category: 'Ornamental', name: 'Fiddle Leaf Fig', price: 20, thumbnail: fiddleLeafFigImg },
  { id: 6, category: 'Ornamental', name: 'Aloe Vera', price: 18, thumbnail: aloeVeraImg },
];

const categories = ['Air Purifying', 'Aromatic', 'Ornamental'];

const ProductListingPage = () => {
  const { addToCart } = useCart();

  return (
    <div className="product-listing-page">
      <Header />
      <div className="products">
        {categories.map(category => (
          <div key={category}>
            <h2>{category}</h2>
            <div className="plant-cards">
              {plants.filter(plant => plant.category === category).map(plant => (
                <PlantCard key={plant.id} plant={plant} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListingPage;

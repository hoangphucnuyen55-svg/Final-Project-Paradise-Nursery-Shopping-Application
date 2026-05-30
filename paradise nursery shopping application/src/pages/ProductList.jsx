import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice'; // Adjust import path if necessary
import './ProductList.css'; 

function ProductList({ BloomingtonNavigationHandler }) {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  // Mandatory catalog structure: 3 categories, 6 items per category
  const plantsArray = [
    {
      category: "Air Purifying",
      plants: [
        { id: 1, name: "Snake Plant", price: 15, thumbnail: "https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?q=80&w=200", description: "Produces oxygen at night." },
        { id: 2, name: "Spider Plant", price: 12, thumbnail: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?q=80&w=200", description: "Easy to grow and propagate." },
        { id: 3, name: "Peace Lily", price: 18, thumbnail: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?q=80&w=200", description: "Beautiful white blooms." },
        { id: 4, name: "Boston Fern", price: 22, thumbnail: "https://images.unsplash.com/photo-1545167622-3a6ac756afa4?q=80&w=200", description: "Loves high humidity." },
        { id: 5, name: "Aloe Vera", price: 10, thumbnail: "https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?q=80&w=200", description: "Medicinal gel inside leaves." },
        { id: 6, name: "English Ivy", price: 14, thumbnail: "https://images.unsplash.com/photo-1508193638397-1c4234db14d8?q=80&w=200", description: "Excellent climbing vine." }
      ]
    },
    {
      category: "Aromatic & Medicinal",
      plants: [
        { id: 7, name: "Lavender", price: 16, thumbnail: "https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?q=80&w=200", description: "Calming and relaxing scent." },
        { id: 8, name: "Rosemary", price: 11, thumbnail: "https://images.unsplash.com/photo-1515514175648-9f2de6c22da3?q=80&w=200", description: "Great for culinary uses." },
        { id: 9, name: "Mint", price: 8, thumbnail: "https://images.unsplash.com/photo-1603569283847-aa295f0d016a?q=80&w=200", description: "Fresh and highly aromatic." },
        { id: 10, name: "Basil", price: 9, thumbnail: "https://images.unsplash.com/photo-1608686207856-001b95cf60ca?q=80&w=200", description: "Essential for Italian cooking." },
        { id: 11, name: "Thyme", price: 10, thumbnail: "https://images.unsplash.com/photo-1515514175648-9f2de6c22da3?q=80&w=200", description: "Subtle earthy flavor herb." },
        { id: 12, name: "Oregano", price: 12, thumbnail: "https://images.unsplash.com/photo-1608686207856-001b95cf60ca?q=80&w=200", description: "Pungent and flavorful leaves." }
      ]
    },
    {
      category: "Low Maintenance",
      plants: [
        { id: 13, name: "ZZ Plant", price: 25, thumbnail: "https://images.unsplash.com/photo-1632205301078-4302636b0151?q=80&w=200", description: "Thrives on extreme neglect." },
        { id: 14, name: "Pothos", price: 14, thumbnail: "https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?q=80&w=200", description: "Beautiful trailing vines." },
        { id: 15, name: "Cast Iron Plant", price: 28, thumbnail: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?q=80&w=200", description: "Survives in very low light." },
        { id: 16, name: "Jade Plant", price: 15, thumbnail: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?q=80&w=200", description: "Succulent with thick stems." },
        { id: 17, name: "Chinese Evergreen", price: 20, thumbnail: "https://images.unsplash.com/photo-1545167622-3a6ac756afa4?q=80&w=200", description: "Tolerates poor air conditions." },
        { id: 18, name: "Succulent Mix", price: 12, thumbnail: "https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?q=80&w=200", description: "Small, colorful desert beauties." }
      ]
    }
  ];

  const totalCartItemsCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div>
      {/* Required Navigation Bar */}
      <nav className="navbar" style={{ display: 'flex', justifyContent: 'space-between', padding: '15px', backgroundColor: '#2e7d32', color: 'white' }}>
        <div className="nav-logo">🌱 Paradise Nursery</div>
        <div className="nav-links">
          <span style={{ margin: '0 15px', cursor: 'pointer' }}>Home</span>
          <span style={{ margin: '0 15px', cursor: 'pointer' }}>Plants</span>
          <span style={{ margin: '0 15px', cursor: 'pointer' }} onClick={BloomingNavigationHandler}>
            Cart 🛒 ({totalCartItemsCount})
          </span>
        </div>
      </nav>

      {/* Categories Rendering */}
      <div className="catalog-container" style={{ padding: '20px' }}>
        {plantsArray.map((categoryGroup, index) => (
          <div key={index} className="category-section">
            <h2 style={{ color: '#2e7d32', borderBottom: '2px solid #ccc' }}>{categoryGroup.category}</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', padding: '15px 0' }}>
              {categoryGroup.plants.map(plant => {
                const isItemAlreadyInCart = cartItems.some(item => item.id === plant.id);
                return (
                  <div key={plant.id} style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '8px', width: '220px', textAlign: 'center' }}>
                    <img src={plant.thumbnail} alt={plant.name} style={{ width: '150px', height: '150px', objectFit: 'cover', borderRadius: '4px' }} />
                    <h3 style={{ margin: '10px 0 5px 0' }}>{plant.name}</h3>
                    <p style={{ fontWeight: 'bold' }}>${plant.price}</p>
                    <p style={{ fontSize: '12px', color: '#666' }}>{plant.description}</p>
                    <button 
                      style={{ padding: '8px 12px', cursor: 'pointer', backgroundColor: isItemAlreadyInCart ? '#ccc' : '#4caf50', color: 'white', border: 'none', borderRadius: '4px' }}
                      disabled={isItemAlreadyInCart} 
                      onClick={() => dispatch(addItem(plant))}
                    >
                      {isItemAlreadyInCart ? 'Added' : 'Add to Cart'}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;

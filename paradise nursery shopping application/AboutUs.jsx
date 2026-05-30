import React from 'react';

function AboutUs() {
  return (
    <div className="about-us-container" style={{ padding: '20px', textAlign: 'center', backgroundColor: '#f4fbf7' }}>
      <h2 style={{ color: '#2e7d32' }}>About Paradise Nursery</h2>
      <p style={{ fontSize: '18px', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6', color: '#4e4e4e' }}>
        Welcome to Paradise Nursery, where our passion for green spaces comes alive! We are dedicated to 
        providing a diverse and carefully curated selection of high-quality houseplants tailored to elevate 
        your home decor and enhance your well-being.
      </p>
      <p style={{ fontSize: '16px', maxWidth: '800px', margin: '15px auto 0 auto', lineHeight: '1.6', color: '#4e4e4e' }}>
        Our mission is to connect plant lovers with their perfect green companions. Whether you are looking 
        for air-purifying low-maintenance varieties or vibrant tropical specimens, our team ensures every plant 
        is nurtured to perfection before joining your home sanctuary.
      </p>
    </div>
  );
}

export default AboutUs;

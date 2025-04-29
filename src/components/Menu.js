import React, { useEffect, useState } from 'react';
import { getMenu } from '../components/api';
import Loader from './Loader';
import Footer from './Footer';
import './Menu.css';

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const items = await getMenu();
        setMenuItems(items);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error('Error fetching menu:', error);
      }
    };
    fetchMenu();
  }, []);

  // Fallback image URL
  const defaultImage =
    "https://media.istockphoto.com/id/1336601313/photo/top-view-of-indian-herbal-masala-chai-or-traditional-beverage-tea-with-milk-and-spices-kerala.jpg";

  if (loading) return <Loader />;

  return (
    <div>
      <section id="menu">
        <h2>Our Menu</h2>
        <div className="menu-list">
          {menuItems.map((item) => (
            <div key={item.id} className="menu-card">
              {/* Fallback to defaultImage if item.image is missing or invalid */}
              <img
                src={item.image && item.image.trim() !== "" ? item.image : defaultImage}
                alt={item.name}
                className="menu-img"
              />
              <div className="menu-content">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <span>₹{item.price}</span>
                <div className="menu-buttons">
                  <button className="add-btn">Add to Cart</button>
                  <button className="order-btn">Order Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Menu;

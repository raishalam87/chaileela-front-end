// src/components/Services.js
import React, { useEffect, useState } from 'react';
import { getServices } from '../components/api';
import Loader from './Loader';
import Footer from './Footer';
import './Services.css';

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const servicesData = await getServices();
        setServices(servicesData);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error('Error fetching services:', error);
      }
    };
    fetchServices();
  }, []);

  if (loading) return <Loader />;

  return (
    <div>
    <section id="services">
      <h2>Our Services</h2>
      <div className="services-list">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <div className="service-content">
              <h3>{service.name}</h3>
              <p>{service.description}</p>
              <button className="book-btn">Book Event</button>
            </div>
          </div>
        ))}
         
      </div>
     
    </section>
    <Footer />
    </div>
  );
};

export default Services;

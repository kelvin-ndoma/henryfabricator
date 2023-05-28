import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1 className="home-title">Welcome to Aluminum Fabricator Company</h1>
        
      
      </header>
      <section className="home-section">
        <div className="home-section-content">
          <p className="home-section-description">
            We are a leading provider of high-quality aluminum products, catering to various industries
            and applications. With our expertise and commitment to excellence, we deliver exceptional
            solutions to meet our customers' needs.
          </p>
        </div>
      </section>
      <section className="home-section">
        <h2 className="home-section-title">Our Services</h2>
        <ul className="home-services-list">
          <Link to="/services"><li>Office partitioning</li></Link>
          <Link to="/services"> <li>Sliding Doors</li></Link>
          <Link to="/services">  <li>Glass tinting</li></Link>
          <Link to="/services"> <li>Office Planning</li></Link>
        </ul>
        <Link to="/services" className="learn-more-button">Learn More</Link>
      </section>
      <section className="home-section">
        <h2 className="home-section-title">Our Projects</h2>
        <div className="home-photo-gallery">
        <Link to="/services">
          <div className="home-photo-item">
            <img src="https://img.freepik.com/free-photo/corner-empty-new-room-with-white-walls-wardrobe-with-mirror-sliding-doors_181624-61206.jpg?size=626&ext=jpg&ga=GA1.2.1191098058.1684769255&semt=ais" alt="Project 1" className="home-photo" />
          </div>
          </Link>
          
          <Link to="/services">
          <div className="home-photo-item">
            <img src="https://img.freepik.com/free-photo/3d-rendering-modern-wood-stone-white-bathroom_105762-2127.jpg?size=626&ext=jpg&ga=GA1.2.1191098058.1684769255&semt=ais" alt="Project 1" className="home-photo" />
          </div>
          </Link>
          <Link to="/services">
          <div className="home-photo-item">
            <img src="https://img.freepik.com/premium-photo/corridor-with-window-dining-room_305343-27193.jpg?size=626&ext=jpg&ga=GA1.2.1191098058.1684769255&semt=ais" alt="Project 1" className="home-photo" />
          </div>
          </Link>
          
        </div>
      </section>
      <section className="home-section">
        <h2 className="home-section-title">Contact Us</h2>
        <p className="home-section-description">
          We would love to hear from you. Get in touch with our team to discuss your requirements,
          request a quote, or inquire about our services. Reach out to us today!
        </p>
        <Link to="/contact">
        <button className="home-section-button">Contact Now</button>
        </Link>
        
      </section>
    </div>
  );
};

export default Home;

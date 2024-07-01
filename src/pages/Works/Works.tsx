import React from 'react';
import './Works.css';

const FeaturedWorks: React.FC = () => {
  return (
    <div className="container1">
      <div className="featured-work">
        <h1 className="heading">Featured Works</h1>
        <div className="work-item">
          <img src="/images/Rectangle 30.png" alt="Work 1" className="work-image" />
          <div className="work-details">
            <button className="blue-button">2020</button>
            <h2 className="dashboard">Dashboard</h2>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="work-item">
          <img src="/images/Rectangle 32.png" alt="Work 2" className="work-image" />
          <div className="work-details">
            <button className="blue-button">2020</button>
            <h2 className="dashboard">Dashboard</h2>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="work-item">
          <img src="/images/Rectangle 34.png" alt="Work 3" className="work-image" />
          <div className="work-details">
            <button className="blue-button">2020</button>
            <h2 className="dashboard">Dashboard</h2>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="work-item">
          <img src="/images/Rectangle 40.png" alt="Work 3" className="work-image" />
          <div className="work-details">
            <button className="blue-button">2020</button>
            <h2 className="dashboard">Dashboard</h2>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </div>
  );
};

export default FeaturedWorks;

import React from 'react';
import './WorkDetails.css';

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Dashboard</h1>
      </header>
      <div className="repeated-structure">
        <div className="content">
          <button className="year-button">2020</button>
          <p className="ux-text">User Experience Design</p>
        </div>
        <div className="section">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="image-container">
          <img className="square-image" src="/images/Rectangle 5.png" alt="Example" />
        </div>
      </div>
      <div className="repeated-structure">
        <div className="content">
          <button className="year-button">2020</button>
          <p className="ux-text">User Experience Design</p>
        </div>
        <div className="section">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="image-container">
          <img className="square-image" src="/images/Rectangle 5.png" alt="Example" />
        </div>
      </div>
      <div className="repeated-structure">
        <div className="content">
          <button className="year-button">2020</button>
          <p className="ux-text">User Experience Design</p>
        </div>
        <div className="section">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="image-container">
          <img className="square-image" src="/images/Rectangle 6.png" alt="Example" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

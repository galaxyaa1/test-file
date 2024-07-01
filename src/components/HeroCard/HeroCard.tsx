import React from 'react';
import './Hero.css';

const HeroCard: React.FC = () => {
  return (
    <div className="container">
      <div className="header">
        <h2 className="header-title">Recent Posts</h2>
        <a className="view-all" href="#">View All</a>
      </div>
      <div className="cards-container">
        <div className="card">
          <h3 className="card-heading">Making a design system from <br />scratch</h3>
          <div className="divider-container">
            <h5>12 Feb 2020</h5>
            <div className="divider-line"></div>
            <h5>Design, Pattern</h5>
          </div>
          <p className="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />so dhne hj kjjjs hdhh fnsjks logo of </p>
        </div>
        <div className="card">
          <h3 className="card-heading">Creating pixel perfect icons in<br /> figma</h3>
          <div className="divider-container">
            <h5>12 Feb 2000</h5>
            <div className="divider-line"></div>
            <h5>Figma, Icon Design</h5>
          </div>
          <p className="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />so dhne hj kjjjs hdhh fnsjks logo of </p>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;

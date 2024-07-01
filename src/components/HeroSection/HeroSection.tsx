import React from 'react';
import { Button } from 'primereact/button';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './HeroSection.css'; // Custom CSS for styling

const HeroSection: React.FC = () => {
    return (
        <div className="hero-container">
            <div className="hero-content">
                <h1>Hi, I'm John<br />Creative Technologist</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.<br /> Praesent libero. Sed cursus ante dapibus diam.</p>
                <Button label="Download Resume" className="p-button-danger" />
            </div>
            <div className="hero-image">
                <img src="/images/Ellipse 1.png" alt="John" />
            </div>
        </div>
    );
}

export default HeroSection;

import React from 'react';
import HeroSection from '../../components/HeroSection/HeroSection';
import HeroCard from '../../components/HeroCard/HeroCard';
import Works from '../Works/Works'
import Blog from '../Blog/Blog'
import WorkDetails from '../WorkDetails/WorkDetails'




const Home: React.FC = () => {
  return (
    <div>
          <HeroSection />
          <HeroCard />
          <Works />
          <Blog />
          <WorkDetails />
    </div>
  );
}

export default Home;
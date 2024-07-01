import React from 'react';
import { Menubar } from 'primereact/menubar';
import { useNavigate } from 'react-router-dom';
import 'primereact/resources/themes/saga-blue/theme.css'; 
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './Header.css';

const Header: React.FC = () => {
  const navigate = useNavigate();

  const items = [
    {
      label: 'Home',
      command: () => navigate('/')
    },
    {
      label: 'Works',
      command: () => navigate('/works')
    },
    {
      label: 'Blog',
      command: () => navigate('/blog')
    },
    {
      label: 'WorkDetails',
      command: () => navigate('/workdetails')
    }
  ];

  return (
    <div>
      <div className="custom-navbar">
        <Menubar model={items} />
      </div>
    </div>
  );
};

export default Header;

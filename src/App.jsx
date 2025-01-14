import './App.css';
import { useState } from 'react';
// Components
import About from './components/about/about.jsx';
import Header from './components/header/header.jsx';
import Proyects from './components/proyects/proyects.jsx';
// icons
import sun from '../src/components/header/icons/sun-svgrepo-com.svg';
import moon from '../src/components/header/icons/moon-stars-svgrepo-com.svg';
import About_2 from './components/about_2/about_2.jsx';

const App = () => {
  const [icon, setIcon] = useState(moon);
  const [mode, setMode] = useState(true);
  const [labelMode, setLabelMode] = useState('Dark Mode');

  const darkMode = () => {
    if (mode) {
      setIcon(sun);
      setMode(false);
      setLabelMode('Ligth Mode');
      document.querySelector('body').classList.add('dark_mode');
    } else {
      setIcon(moon);
      setMode(true);
      setLabelMode('Dark Mode');
      document.querySelector('body').classList.remove('dark_mode');
    }
  };
  return (
    <>
      <Header icon={icon} mode={mode} labelMode={labelMode} darkMode={darkMode} />
      <About mode={mode} />
      <Proyects mode={mode} />
      <About_2 mode={mode} />
    </>
  );
};

export default App;

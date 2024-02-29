import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Events from './components/Events';
import About from './components/About';
import Contact from './components/Contact';
import './App.css'; 
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Box from '@mui/material/Box';

const App = () => {

  return (
    <div className="App">
      <Navbar />
      <Box style={{marginTop: "50px"}}>
        <Home className={"center-container"}/>
        <Events className={"center-container inverted-colors"}/>
        <About className={"center-container"}/>
        <Contact className={"center-container inverted-colors"}/>
      </Box>

    </div>
  );
};

export default App;

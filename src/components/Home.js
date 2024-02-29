import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const Home = ({className}) => (
  <section id="home" className={className}>
    <Box className='center-container'>
      <Card raised="true" style={{marginBottom: "20px", backgroundColor: "#282c34", color: "white"}}>
        <CardContent>
          <div className='center-container container-item'>
            <div className='left-container container-item'>
              <h3 className='home-sub-heading'>New Show Announcement!</h3>
              <p className='home-sub-heading'>Catch Ruby West live at Ironbound this Halloween!</p>
            </div>
            <img className='App-logo' src="/hallow_show.jpg" alt="Ruby West at Ironbound 10/28/2023"></img>
        </div>
        </CardContent>
      </Card>
      <Card raised="true" style={{marginBottom: "20px", backgroundColor: "#282c34", color: "white"}}>
        <CardContent>
          <div className='center-container container-item'>
            <p>Stream the Debut single 'Goblin Town' now!</p>
            < iframe title="Fourteen" style={{borderRadius: "12px"}} src="https://open.spotify.com/embed/album/3S76xVlpJf0qoQXuqN0UZ1?utm_source=generator" width="50%" height="152" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          </div>
        </CardContent>
      </Card>
    </Box>
  </section>
);

export default Home;
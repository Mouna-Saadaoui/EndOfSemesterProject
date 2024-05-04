import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home.jsx';
import Movies from './Movies.jsx';
import BoardOfNotes from './BoardOfNotes.jsx';
import VideoGames from './VideoGames.jsx';
import ArtGallery from './ArtGallery.jsx';

const AppRoutes = () => {
  return ( 
    <div>
    <Routes> 
      <Route path="/" element={<Home/>} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Movies" element={<Movies />} />
      <Route path="/BoardOfNotes" element={<BoardOfNotes />} />
      <Route path="/VideoGames" element={<VideoGames />} />
      <Route path="/ArtGallery" element={<ArtGallery />} />
    </Routes> 
    </div>
  );
};

export default AppRoutes;



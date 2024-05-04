import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home.jsx';
import Movies from './Movies.jsx'; 
import BoardOfNotes from './BoardOfNotes.jsx';
import VideoGames from './VideoGames.jsx'; 
import ArtGallery from './ArtGallery.jsx';  
import Layout from './Layout.jsx';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes> 
      <Route path="/" element={<Layout></Layout>}/> 
        <Route path="/Home" element={<Layout><Home/></Layout>}/> 
        <Route path="/Movies" element={<Layout><Movies /></Layout>} />
        <Route path="/BoardOfNotes" element={<Layout><BoardOfNotes /></Layout>} />
        <Route path="/VideoGames" element={<Layout><VideoGames /></Layout>} /> 
        <Route path="/ArtGallery" element={<Layout><ArtGallery /></Layout>} /> 
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);




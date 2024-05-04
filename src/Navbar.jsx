import React from "react";   
import { Link } from 'react-router-dom'; 

const Navbar = () => { // Remove showLinks from props since it's not used in the Navbar
  return (
    <nav>
      <ul> 
        <li><Link to="/Home"><strong>Home</strong></Link></li>
        <li><Link to="/Movies"><strong>Movies</strong></Link></li>
        <li><Link to="/ArtGallery"><strong>Art Gallery</strong></Link></li>
        <li><Link to="/VideoGames"><strong>Video Games</strong></Link></li>
        <li><Link to="/BoardOfNotes"><strong>Board of Notes</strong></Link></li>
      </ul>
    </nav>
  );
};  
export default Navbar;


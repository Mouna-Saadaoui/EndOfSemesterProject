import React from "react";   
import { Link } from 'react-router-dom';   
import './index.css' 
function Navbar() { 
  console.log('Navbar component rendering...');

  return ( 
    <nav>
          <ul>
        <li><Link to="/Home">Home</Link></li>
        <li><Link to="/Movies">Movies</Link></li>
        <li><Link to="/ArtGallery">Art Gallery</Link></li>
        <li><Link to="/VideoGames">Video Games</Link></li>
        <li><Link to="/BoardOfNotes">Board of Notes</Link></li>
      </ul> 
      </nav>
    
  );
}  
export default Navbar;


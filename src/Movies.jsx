import React, { useState, useEffect } from 'react';
import './movies.css';
const Movies = () => {
  const [searchTerm, setSearchTerm] = useState(localStorage.getItem('search') || '');
  const [inputFocus, setInputFocus] = useState(false);
  const list =[ {name: "Suzume", image:"suzume.jpg" },  
  { name: "Weathering with You", image:"weathering.jpg" } 
  , { name: "Your Name", image:"name.jpg" }, 
   { name: "Cross Road", image:"cross.jpg" },  
   { name: "The Garden of Words", image:"garden.jpg" },  
   { name: "Someone's Gaze", image:"gaze.jpg" }, 
   { name: "Children Who Chase Lost Voices", image:"children.jpg" },  
   { name: "Ani*Kuri15", image:"ani.jpg" }, 
    { name: "5 Centimeters per Second", image:"centimeters.jpg" }, 
     { name: "The Place Promised in Our Early Days", image:"place.jpg" }, 
      { name: "Hiromi Iwasaki: Egao", image:"hiromi.jpg" },  
      { name: "Voices of a Distant Star", image:"voices.jpg" }, 
       { name: "She and Her Cat", image:"cat.jpg" },  
       { name: "Other Worlds", image:"worlds.jpg" },  
      { name: "Enclosed World", image:"enclosed.jpg" } ];

  const searchedMovies = list.filter((movie) =>
    movie.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFocus = () => {
    setInputFocus(true);
  };

  const handleBlur = () => {
    setInputFocus(false);
  };

  useEffect(() => {
    localStorage.setItem('search', searchTerm);
  }, [searchTerm]);

  return (
    <div>
      <ul>
        {searchTerm && searchedMovies.map((movie) => (
          <li key={movie.name} id="container">
            <div id="names">{movie.name}</div>
            <img id="images" src={movie.image} />
          </li>
        ))}
      </ul>
      <Search
        search={searchTerm}
        onSearch={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        inputFocus={inputFocus}
      />
    </div>
  );
};

const Search = ({ search, onSearch, onFocus, onBlur, inputFocus }) => {
  const InputWithLabel = ({ id, value, type, onInputChange, placeholder, onFocus, onBlur }) => {
    return (
      <div>
        <input
          id={id}
          type={type}
          value={value}
          onChange={onInputChange}
          placeholder={placeholder}
          onFocus={onFocus}
          onBlur={onBlur}
          autoFocus={inputFocus}
        />
      </div>
    );
  };

  return (
    <div id="searchContainer">
      <InputWithLabel
        id="inputSearch"
        type="text"
        value={search}
        onInputChange={onSearch}
        placeholder="Type Movie name"
        onFocus={onFocus}
        onBlur={onBlur}
      />
    </div>
  );
};

export default Movies;
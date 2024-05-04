import React from 'react';  
import './VideoGames.css' 
const gamesData=[  

  { 
    name:"The Legend of Heroes III: Song of the Ocean", image:"ocean.jpg"
  },
  { 
    name:"Ys II Eternal", image:"ys.jpg"
  },
  { 
    name:"Bittersweet Fools", image:"bitter.jpg"
  }, 
  { 
    name:"Wind: A Breath of Heart", image:"wind.jpg"
  }, 
  { 
    name:"Haru no Ashioto", image:"haru.png"
  }, 
  { 
    name:"Ef: A Fairy Tale of the Two", image:"fairy.jpg"
  },
];
const Videogames = () => { 
  console.log('Videogames component rendering...');

  return (
    <div> 
     <ul class="listContainer"> {gamesData.map((game)=>{ 
     return(
<li class="list">{game.name}   <img src= {game.image}/></li>) })}
     
      
     </ul>
    </div>
  );
}; 
export default Videogames;
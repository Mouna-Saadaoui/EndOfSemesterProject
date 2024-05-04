
import React from 'react';
import'./index.css';  
const Firstpage = ()=>{ 
  return(  
    <div> 
       <Intro/>
    </div>

  )
}
const Intro = () => { 
  console.log('Home component rendering...');

    return ( 
        <div>
        <h3 id="quote">"The thing about getting rejected is that you reflect and think and analyze about why you got turned down. You learn a lot more from stories about getting rejected than stories about becoming happy. That's why I prefer those stories."</h3> 
        <h2 id="question">Who is Makoto Shinkai ? </h2> 
        < p class="introduction"> 
        <img id="makotopic" src="makoto1.jpg"/>
Makoto Shinkai is a prominent Japanese filmmaker and animator known for his visually stunning animated works and unique storytelling style.<br></br> With a career spanning over two decades, Shinkai has established himself as a visionary creator in the world of animation.<br></br> His films often explore themes of love, loneliness, and the human connection, captivating audiences with their emotional depth and breathtaking visuals.<br></br>

Shinkai's journey into the world of animation began with his early fascination with drawing and storytelling.<br></br> After studying Japanese literature at university, he initially pursued a career in graphic design before transitioning to animation. <br></br>His independent debut film, "Voices of a Distant Star," created using personal computers, showcased his talent for crafting compelling narratives and garnered attention within the anime community.<br></br>

Since then, Shinkai has continued to push the boundaries of animation, experimenting with new techniques and technologies to bring his stories to life. <br></br>His films are characterized by their richly detailed backgrounds, intricate character designs, and poignant exploration of the human experience.<br></br>

Beyond his technical prowess, Shinkai's storytelling resonates with audiences on a profound level, delving into themes of longing, connection, and the passage of time. His ability to evoke genuine emotion through animation has earned him widespread acclaim and a dedicated fanbase both in Japan and around the world.<br></br>

As a filmmaker, Makoto Shinkai's influence extends far beyond the realm of anime, inspiring countless artists and filmmakers to explore the limitless possibilities of animation as a medium for storytelling. <br></br>Through his distinctive vision and unwavering dedication to his craft, Shinkai continues to captivate audiences and leave an indelible mark on the world of animation.</p> 
     
<p class="credits">Created by Mouna Saadaoui</p>
</div>);
  }; 


export default Firstpage;


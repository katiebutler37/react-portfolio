import React from 'react';
import './style.css'
function Navigation({window, itemSelected, closeIfOpen}) {    

  return (
    <nav>
    <ul className='nav-items'>
      <li>
        <span className={`nav-item ${window === 'about' ? 'active' : ""}`} id="about" onClick={()=>{
          itemSelected('about');
          closeIfOpen();
        }}>About me</span>
      </li>
      <li>
        <span className={`nav-item ${window === 'portfolio' ? 'active' : ""}`} id="portfolio" onClick={()=>{
          itemSelected('portfolio');
          closeIfOpen();
        }}>Portfolio</span>
      </li>
        <li>
          <span className={`nav-item ${window === 'contact' ? 'active' : ""}`}  id="contact" onClick={()=>{
          itemSelected('contact');
          closeIfOpen();
        }}>Contact</span>
        </li> 
        <li>
          <span className={`nav-item ${window === 'resume' ? 'active' : ""}`} id="resume" onClick={()=>{
          itemSelected('resume');
          closeIfOpen();
        }}>Resume</span>
        </li>
    </ul>
  </nav>
  );
}

export default Navigation;
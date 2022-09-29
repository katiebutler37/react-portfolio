import React, { useState } from 'react';

function Navigation() {
    function itemSelected(e) {
        switch(e.target.name) {
            case ("about"):
            break;
            case ("portfolio"):
            break;
            case ("contact"):
            break;
            case ("resume"):
            break;   
            default:
        }
    };

    
  return (
    <nav>
    <ul className='nav-items'>
      <li>
        <span className="nav-item" name="about" onClick={itemSelected}>About me</span>
      </li>
      <li>
        <span className="nav-item" name="portfolio" onClick={itemSelected}>Portfolio</span>
      </li>
        <li>
          <span className="nav-item"  name="contact" onClick={itemSelected}>Contact</span>
        </li> 
        <li>
          <span className="nav-item" name="resume" onClick={itemSelected}>Resume</span>
        </li>
    </ul>
  </nav>
  );
}

export default Navigation;
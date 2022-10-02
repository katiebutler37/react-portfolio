import React from 'react';

function Footer() {
  return (
    <footer>
      <div className='icon-wrapper'>

    <a href="https://github.com/katiebutler37"><img src={require(`../../assets/images/icons/github.png`)} alt="github icon" className='icon'/></a>
    <a href="https://www.linkedin.com/in/katie-butler-675948ba/"><img src={require(`../../assets/images/icons/linkedin.png`)} alt="linkedin icon" className='icon'/></a>
    <a href="https://www.instagram.com/katiebutler.art/"><img src={require(`../../assets/images/icons/instagram.png`)} alt="instagram icon" className='icon'/></a>
    </div>
    </footer>
  );
}

export default Footer;
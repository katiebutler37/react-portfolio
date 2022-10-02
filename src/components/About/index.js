import React from 'react';

function About() {
  return (
    <section className='about-me-wrapper'> 
    <div className='image-wrapper'>
      <img src={require(`../../assets/images/katie.jpg`)} alt="Katie's profile" className='profile-pic'/>
      <img src={require(`../../assets/images/thats-me.png`)} alt="'that's me' chalk writing" className='thats-me'/>
      </div>
      <div className='about-me-content'>
        <h2 className='heading'>Just a little bit about me</h2><br/>
        <p className='about-me-content'>
      I am a 22 year-old, recent Health Sciences graduate of Western University. I loved my program and it's focus on global health and international learning. Since graduating, I have worked as a designer and visual artist and I am now preparing for my first solo exhibition. 
      The desire to enhance my design portfolio and my exposure to some limiting template web-design experiences is what first motivated me to learn to code, starting my journey as a full-stack web-developer. Now it's time to test the limits of this new medium to create aesthetically-pleasing, user-friendly online experiences.
      </p>
      </div>
    </section>
  );
}

export default About;
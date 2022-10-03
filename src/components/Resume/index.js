import React from 'react';

function Resume() {
  return (
    <section>
      <h2 className='heading'>Some skills I have acquired include...</h2>
      <br></br>
      <div>
        <h3>Front-end Proficencies</h3>
        <br></br>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>JQuery</li>
          <li>Responsive Design</li>
          <li>React</li>
          <li>Bootstrap</li>
        </ul>
      </div>
      <br></br>
      <div>
        <h3>Back-End Proficencies</h3>
        <br></br>
        <ul>
          <li>API's</li>
          <li>Node</li>
          <li>Express</li>
          <li>MySQL Sequalize</li>
          <li>MongoDB, Mongoose</li>
          <li>REST</li>
          <li>GraphQL</li>
        </ul>
      </div>
      <h1 className='heading resume'>Extra reading materials:</h1>
      <br></br>
      <a href="katie-resume.pdf"download className="resume-link">Resume</a>
    </section>
  );
}

export default Resume;
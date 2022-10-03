import React from 'react';

function Project() {
  const photos = [
    {
      deployed_link: "https://ibetter.herokuapp.com",
      repo_link: "https://github.com/katiebutler37/iBetter",
      name:
        "iBetter",
    },
    {
      deployed_link: "https://katiebutler37.github.io/readirect/",
      repo_link: "https://github.com/katiebutler37/readirect",
      name:
        "READirect",
    },
    {
      deployed_link: "https://radiant-mesa-21675.herokuapp.com/",
      repo_link: "https://github.com/katiebutler37/tech-blog",
      name:
        "Tech Blog",
    },
    {
      deployed_link: "https://note-taker-2-point-0.herokuapp.com/",
      repo_link: "https://github.com/katiebutler37/note-taker",
      name:
        "Note Taker",
    },
    {
      deployed_link: "https://github.com/katiebutler37/readme-generator",
      repo_link: "https://github.com/katiebutler37/readme-generator",
      name:
        "READMe Generator",
    },
    {
      deployed_link: "https://katiebutler37.github.io/code-quiz/",
      repo_link: "https://github.com/katiebutler37/code-quiz",
      name:
        "Katie's Quick Coding Quiz",
    },
  ];

  return (
    <div>
      <div className="project-wrapper">
        {photos.map((image, i) => (
          <div className="single-project" key={i}>
          <h2 className='project-title'>{image.name}</h2>
          <img
          //The default property is where the image has been saved.
            src={require(`../../assets/images/projects/${i}.jpg`)} 
            alt={image.name}
            className="img-thumbnail"
            key={image.name}
          />
          <br/>
          <a href={image.deployed_link} className='deployed link-btn'>Deployed Application</a>
          <a href={image.repo_link} className='repo link-btn'>Project Repository</a>
        </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
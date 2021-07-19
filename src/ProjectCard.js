import React from 'react';

// if props.style=right, then change colours and alignments

function ProjectCard(props) {
  return (

    <div>

      <div className="project__card">
        <h2 className="project__headline">Project.Name</h2>
        <p className="project__description">
       Reprehenderit esse labore id veniam ut veniam non ex adipisicing amet ullamco dolor proident. Exercitation velit ea incididunt sit qui do ipsum fugiat laboris minim nostrud dolor.
        </p>
        <div className="project__button-box">
          <a className="project__button" href="mailto:riethmueller@mail.com">Open the page</a>
          <a className="project__button alternative-button" href="mailto:riethmueller@mail.com">Check out the code</a>
        </div>
        <div className="project__image-box"> </div>
      </div>
        
      <div className="project__card project__card--align-right">
        <h2 className="project__headline">Project.Name</h2>
        <p className="project__description">
       Reprehenderit esse labore id veniam ut veniam non ex adipisicing amet ullamco dolor proident. Exercitation velit ea incididunt sit qui do ipsum fugiat laboris minim nostrud dolor.
        </p>
        <div className="project__button-box project__button-box--align-right">
          <a className="project__button" href="mailto:riethmueller@mail.com">Open the page</a>
          <a className="project__button alternative-button" href="mailto:riethmueller@mail.com">Check out the code</a>
        </div>
        <div className="project__image-box project__image-box--align-right"> </div>
      </div>

    {/* <div>
      The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.
    </div> */}

    </div>
  );
}

export default ProjectCard;
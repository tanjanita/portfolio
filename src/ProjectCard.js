import React from 'react';

// if props.style=right, then change colours and alignments

function ProjectCard(props) {
  return (

    <div className="project">

      <div className="project-card__container">
        <div className="project-card__off-center-nudge"></div>
        <div className="project-card">
          <h2 className="project__headline">Project.Name</h2>
          <p className="project__description">
            Reprehenderit esse labore id veniam ut veniam non ex adipisicing amet ullamco dolor proident. Exercitation velit ea incididunt sit qui do ipsum fugiat laboris minim nostrud dolor.
          </p>
          <div className="project__button-container">
            <a className="project__button" href="mailto:riethmueller@mail.com">Open the page</a>
            <a className="project__button alternative-button" href="mailto:riethmueller@mail.com">Check out the code</a>
          </div>
          <div className="project__image-box"> </div>
        </div>
      </div>     

      <div className="project-card__container project-card__container--align-right">
        <div className="project-card__off-center-nudge"></div>
        <div className="project-card project-card--align-right">
          <h2 className="project__headline">Project.Name</h2>
          <p className="project__description">
            Reprehenderit esse labore id veniam ut veniam non ex adipisicing amet ullamco dolor proident. Exercitation velit ea incididunt sit qui do ipsum fugiat laboris minim nostrud dolor.
          </p>
          <div className="project__button-container project__button-container--align-right">
            <a className="project__button" href="mailto:riethmueller@mail.com">Open the page</a>
            <a className="project__button alternative-button" href="mailto:riethmueller@mail.com">Check out the code</a>
          </div>
          <div className="project__image-box project__image-box--align-right"> </div>
        </div>
      </div>

    </div>
  );
}

export default ProjectCard;
import React from 'react';
import Projects from "./projects.json";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function ProjectCard() {
  return (

    <div className="project">

      {Projects.map((project) => {
        let oddCard = (project.id % 2 === 0) ? true : false;
        return (

        <div className={`project-card__container${oddCard ? " project-card__container--align-right" : ""}`} key={project.id}>
          <div className="project-card__off-center-nudge"></div>
          <div className={`project-card${oddCard ? " project-card--align-right" : ""}`}>
          <h3 className={`project__headline${oddCard ? " project__headline--align-right" : ""}`}>{project.name}</h3>
            <p className="project__description">{project.description}</p>
            <ul className={`horizontal-list${oddCard ? " horizontal-list--align-right" : ""}`}>

              {project.technologies.map((technology, index) =>  

                <li key={index} className={`horizontal-list__item${oddCard ? " horizontal-list__item--align-right" : ""}`}>#{technology} </li>

              )}

            </ul>
            <div className={`project__button-container${oddCard ? " project__button-container--align-right" : ""}`}>
              <a className="project__button" href={project.linkPage} target="_blank"  rel="noreferrer" title="Open page in a new tab">
                Open the page<span className="screen-reader-only"> for {project.name}</span> 
                <FontAwesomeIcon icon={faArrowRight} className="project__button-icon" />
              </a>
              <a className="project__button alternative-button" href={project.linkCode} target="_blank" rel="noreferrer">
                Check out the code<span className="screen-reader-only"> for {project.name}</span> 
                <FontAwesomeIcon icon={faArrowRight} className="project__button-icon" />
              </a>
            </div>
            <div className={`project__image-box${oddCard ? " project__image-box--align-right" : ""}`}>
              <img src={project.imageURL} className="project__image" alt={`Screenshot of project ${project.name}`}/>
            </div>
          </div>
        </div>

        ); // end of return within projects map
      })}

    </div>

  ); // end of return statement
}

export default ProjectCard;
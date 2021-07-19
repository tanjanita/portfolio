import React from 'react';
import ProjectCard from './ProjectCard';

function Portfolio() {
  return (
    <article className="portfolio">

      <h1 className="article__headline" id="portfolio">
      Portfolio
      </h1>

      <ProjectCard />
      <ProjectCard />

    </article>
  );
}

export default Portfolio;
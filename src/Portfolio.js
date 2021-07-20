import React from 'react';
import ProjectCard from './ProjectCard';

function Portfolio() {
  return (
    <article className="portfolio">

      <div className="article__header">
        <h1 className="article__headline" id="portfolio">
        Portfolio
        </h1>
        <p className="article__description">Reprehenderit esse labore id veniam ut veniam non ex adipisicing amet ullamco dolor proident.</p>
      </div>

      <ProjectCard />
      <ProjectCard />

    </article>
  );
}

export default Portfolio;
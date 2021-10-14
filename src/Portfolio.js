import React from 'react';
import ProjectCard from './ProjectCard';

function Portfolio() {
  return (
    <article className="article">

      <div className="article__header">
        <h2 className="article__headline" id="portfolio">Portfolio</h2>
        <p className="article__description">This is a small selection of personal projects to showcase the resulting <b>web pages</b> as well as the <b>technologies used</b> and the complete <b>source code</b> for each project. All projects were developed and coded entirely by myself.</p>
      </div>

      <ProjectCard />

    </article>
  );
}

export default Portfolio;
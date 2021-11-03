import React from 'react';
import ProjectCard from './ProjectCard';

function Portfolio() {
  return (
    <article className="article">

      <div className="article__header">
        <h2 className="article__headline" id="portfolio">Portfolio</h2>
        <p className="article__description">This is a small selection of personal projects to showcase some <b>web pages</b> I have built, including the <b>technologies used</b> and the complete <b>source code</b>. </p>
      </div>

      <ProjectCard />

    </article>
  );
}

export default Portfolio;
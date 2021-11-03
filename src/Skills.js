import React from 'react';
import SkillsCollection from './SkillsCollection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCube, faCubes } from '@fortawesome/free-solid-svg-icons';

function Skills() {
  return (

    <article className="article skillset">

      <div className="article__header skillset-header">
        <h2 className="article__headline" id="skillset">Skill Set</h2>
        <p className="article__description">I love to create <strong>clean and structured code</strong> in order to make <strong>great designs come to life</strong>.</p>
        <p className="article__description">The most rewarding aspect of web programming is to see great results achieved from putting in the work: <strong>Visually precise rendition</strong> of the design, <strong>fast and responsive pages</strong> that work on any device and provide <strong>smooth and user-friendly functionality</strong>.</p>
        <p className="article__description"><FontAwesomeIcon icon={faCubes} className="list__item-icon" />marks practical experience gained through various projects, whilst <FontAwesomeIcon icon={faCube} className="list__item-icon list__item-icon--small" />skills were mostly part of training and coursework.</p>
        {/* Check if text is long enough for anchor-link positioning or if ::before block needs to be adapted */}
      </div>

      <SkillsCollection />

    </article>
);
}

export default Skills;
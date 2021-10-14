import React from 'react';
import SkillsCollection from './SkillsCollection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCube, faCubes } from '@fortawesome/free-solid-svg-icons';

function Skills() {
  return (

    <article className="article skillset">

      <div className="article__header skillset-header">
        <h2 className="article__headline" id="skillset">Skillset</h2>
        <p className="article__description">I love to create <strong>structured and clean code</strong> and to <strong>see great designs come to life</strong>.</p>
        <p className="article__description">The most rewarding aspect of coding is to <strong>put in the work</strong> to achieve the best results: <strong>Responsive pages</strong> that work on any device and provide <strong>accessible information</strong> as well as <strong>smooth and user-friendly</strong> interactions.</p>

        <p className="article__description"><FontAwesomeIcon icon={faCubes} className="list__item-icon" />marks <strong>practical experience gained through various projects</strong>, whilst <FontAwesomeIcon icon={faCube} className="list__item-icon list__item-icon--small" />skills were mostly part of training and coursework.</p>
        {/* Check if text is long enough for anchor-link positioning or if ::before block needs to be adapted */}
      </div>

      <SkillsCollection />

    </article>
);
}

export default Skills;
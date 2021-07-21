import React from 'react';

function Skills() {
  return (
    <article className="skillset">

      <div className="article__header">
        <h1 className="article__headline" id="skillset">
        Skillset / About Me
        </h1>
        <p className="article__description">Reprehenderit esse labore id <strong>veniam</strong> ut veniam <strong>adipisicing amet</strong> non ex ullamco dolor proident. <strong>Exercitation velit</strong> ea incididunt.</p>
      </div>

      <div className="skillset__collection">

        <div className="skillset__category">
          <h3 className="skillset__category-headline">The Basics</h3>
          <ul className="skillset__list">
            <li className="skillset__list-item marker">HTML/5</li>
            <li className="skillset__list-item marker">CSS/3</li>
            <li className="skillset__list-item marker">SASS</li>
            <li className="skillset__list-item marker">BEM</li>
            <li className="skillset__list-item">Bootstrap</li>
            <li className="skillset__list-item marker">JavaScript</li>
            <li className="skillset__list-item marker">JSON</li>
            <li className="skillset__list-item marker">Git version control</li>
          </ul>
        </div>

        <div className="skillset__category">
          <h3 className="skillset__category-headline">Frameworks<sup>*</sup></h3>
          <ul className="skillset__list">
            <li className="skillset__list-item marker">REACT</li>
            <li className="skillset__list-item">jQuery</li>
            <li className="skillset__list-item marker">APIs</li>
            <li className="skillset__list-item marker">RESTful APIs</li>
            <li className="skillset__list-item marker">Node.js</li>
            <li className="skillset__list-item marker">NPM</li>
            <li className="skillset__list-item marker">Express</li>
            <li className="skillset__list-item">MongoDB</li>
            <li className="skillset__list-item">Mongoose</li>
            <li className="skillset__list-item">EJS view engine</li>
          </ul>
        </div>

        <div className="skillset__category">
          <h3 className="skillset__category-headline">Software<sup>*</sup></h3>
          <ul className="skillset__list">
            <li className="skillset__list-item marker">VS Code</li>
            <li className="skillset__list-item marker">GitHub</li>
            <li className="skillset__list-item marker">Terminal/Commandline</li>
            <li className="skillset__list-item marker">robo3t</li>
            <li className="skillset__list-item marker">Postman</li>
            <li className="skillset__list-item marker">Figma</li>
            <li className="skillset__list-item">Codepen</li>
          </ul>
        </div>

        <div className="skillset__category">
          <h3 className="skillset__category-headline">Conceptual</h3>
          <ul className="skillset__list">
            <li className="skillset__list-item marker">Version control workflow</li>
            <li className="skillset__list-item marker">Problem solving strategies</li>
            <li className="skillset__list-item marker">Refactoring</li>
            <li className="skillset__list-item">Web design principles</li>
          </ul>
        </div>

        <div className="skillset__category">
          <h3 className="skillset__category-headline">Etcetera</h3>
          <ul className="skillset__list">
            <li className="skillset__list-item marker">Nature lover</li>
            <li className="skillset__list-item">Japanophile</li>
            <li className="skillset__list-item">Photography dabbler</li>
            <li className="skillset__list-item marker">Fool for cats ^^ </li>
          </ul>
        </div>

      </div>

    </article>
  );
}

export default Skills;
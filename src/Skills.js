import React from 'react';

function Skills() {
  return (
    <article className="skillset">

      <div className="article__header skillset-header">
        <h1 className="article__headline" id="skillset">
        Skillset
        </h1>
        <p className="article__description">Reprehenderit esse labore id <strong>veniam</strong> ut veniam <strong>adipisicing amet</strong> non ex ullamco dolor proident. <strong>Exercitation velit</strong> ea incididunt.</p>
        
        <p className="article__description">Coursework vs. practical usage & experience.</p>
      </div>

      <div className="skillset__collection">

        <div className="skillset__category">
          <h4 className="skillset__category-headline">The Basics</h4>
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
          <h4 className="skillset__category-headline">Frameworks<sup>*</sup></h4>
          <ul className="skillset__list">
            <li className="skillset__list-item marker">REACT</li>
            <li className="skillset__list-item">jQuery</li>
            <li className="skillset__list-item">EJS</li>
            <li className="skillset__list-item marker">APIs</li>
            <li className="skillset__list-item marker">RESTful APIs</li>
            <li className="skillset__list-item">MongoDB</li>
            <li className="skillset__list-item">Mongoose</li>
            <li className="skillset__list-item marker">Node.js</li>
            <li className="skillset__list-item marker">NPM</li>
            <li className="skillset__list-item marker">Express</li>
          </ul>
        </div>

        <div className="skillset__category">
          <h4 className="skillset__category-headline">Software<sup>*</sup></h4>
          <ul className="skillset__list">
            <li className="skillset__list-item marker">VS Code</li>
            <li className="skillset__list-item marker">GitHub</li>
            <li className="skillset__list-item marker">Terminal/Commandline</li>
            <li className="skillset__list-item marker">Figma</li>
            <li className="skillset__list-item marker">Codepen</li>
            <li className="skillset__list-item">robo3t</li>
            <li className="skillset__list-item">Postman</li>
          </ul>
        </div>

        <div className="skillset__category">
          <h4 className="skillset__category-headline">Conceptual</h4>
          <ul className="skillset__list">
            <li className="skillset__list-item marker">Version control workflow</li>
            <li className="skillset__list-item marker">Problem solving strategies</li>
            <li className="skillset__list-item marker">Refactoring</li>
            <li className="skillset__list-item">Web design principles</li>
          </ul>
        </div>

        <div className="skillset__category">
          <h4 className="skillset__category-headline">[AFK]</h4>
          <ul className="skillset__list">
            <li className="skillset__list-item">Nature explorer</li>
            <li className="skillset__list-item">Japanophile</li>
            <li className="skillset__list-item">Photography dabbler</li>
            <li className="skillset__list-item">Art lover</li>
            <li className="skillset__list-item">Fool for cats and all things cute ^._.^ฅ</li>
          </ul>
        </div>

      </div>

    </article>
  );
}

export default Skills;
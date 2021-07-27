import React from 'react';

function Skills() {
  return (
    <article className="skillset">

      <div className="article__header skillset-header">
        <h1 className="article__headline" id="skillset">Skillset</h1>
        <p className="article__description">Reprehenderit esse labore id <strong>veniam</strong> ut veniam <strong>adipisicing amet</strong> non ex ullamco dolor proident. <strong>Exercitation velit</strong> ea incididunt.</p>
        <p className="article__description">Coursework vs. practical usage & experience.</p>
      </div>

      <div className="skillset__collection">

        <div className="list__category">
          <h4 className="list__category-headline">The Basics</h4>
          <ul className="list">
            <li className="list__item list__item--highlighted">HTML/5</li>
            <li className="list__item list__item--highlighted">CSS/3</li>
            <li className="list__item list__item--highlighted">SASS</li>
            <li className="list__item list__item--highlighted">BEM</li>
            <li className="list__item">Bootstrap</li>
            <li className="list__item list__item--highlighted">JavaScript</li>
            <li className="list__item list__item--highlighted">JSON</li>
            <li className="list__item list__item--highlighted">Git version control</li>
          </ul>
        </div>

        <div className="list__category">
          <h4 className="list__category-headline">Frameworks<sup>*</sup></h4>
          <ul className="list">
            <li className="list__item list__item--highlighted">REACT</li>
            <li className="list__item">jQuery</li>
            <li className="list__item">EJS</li>
            <li className="list__item list__item--highlighted">APIs</li>
            <li className="list__item list__item--highlighted">RESTful APIs</li>
            <li className="list__item">MongoDB</li>
            <li className="list__item">Mongoose</li>
            <li className="list__item list__item--highlighted">Node.js</li>
            <li className="list__item list__item--highlighted">NPM</li>
            <li className="list__item list__item--highlighted">Express</li>
          </ul>
        </div>

        <div className="list__category">
          <h4 className="list__category-headline">Software<sup>*</sup></h4>
          <ul className="list">
            <li className="list__item list__item--highlighted">VS Code</li>
            <li className="list__item list__item--highlighted">GitHub</li>
            <li className="list__item list__item--highlighted">Terminal/Commandline</li>
            <li className="list__item list__item--highlighted">Figma</li>
            <li className="list__item list__item--highlighted">Codepen</li>
            <li className="list__item">robo3t</li>
            <li className="list__item">Postman</li>
          </ul>
        </div>

        <div className="list__category">
          <h4 className="list__category-headline">Conceptual</h4>
          <ul className="list">
            <li className="list__item list__item--highlighted">Version control workflow</li>
            <li className="list__item list__item--highlighted">Problem solving strategies</li>
            <li className="list__item list__item--highlighted">Refactoring</li>
            <li className="list__item">Web design principles</li>
          </ul>
        </div>

        <div className="list__category">
          <h4 className="list__category-headline">[AFK]</h4>
          <ul className="list">
            <li className="list__item">Nature explorer</li>
            <li className="list__item">Japanophile</li>
            <li className="list__item">Photography dabbler</li>
            <li className="list__item">Art lover</li>
            <li className="list__item">A fool for cats and all things cute ^._.^ฅ</li>
          </ul>
        </div>

      </div>

    </article>
  );
}

export default Skills;
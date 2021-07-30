import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCube, faCubes, faStar } from '@fortawesome/free-solid-svg-icons';
// alternative icons: faHeart, faPlay, faCertificate, faCircle

function Skills() {
  return (

    <article className="article skillset">

      <div className="article__header skillset-header">
        <h2 className="article__headline" id="skillset">Skillset</h2>
        <p className="article__description">Reprehenderit esse labore id <strong>veniam</strong> ut veniam <strong>adipisicing amet</strong> non ex ullamco dolor proident. <strong>Exercitation velit</strong> ea incididunt. Reprehenderit esse labore id <strong>veniam</strong> ut veniam <strong>adipisicing amet</strong> non ex ullamco dolor proident. <strong>Exercitation velit</strong> ea incididunt.</p>
        <p className="article__description">Reprehenderit esse labore id <strong>veniam</strong> ut veniam <strong>adipisicing amet</strong> non ex ullamco dolor proident. <strong>Exercitation velit</strong> ea incididunt.</p>
        <p className="article__description">Coursework vs. practical usage & experience.</p>
        {/* Check if text is long enough for anchor-link positioning or if ::before block needs to be adapted */}
      </div>

      <div className="skillset__collection">

        <div className="list__category">
          <h3 className="list__category-headline">The Basics</h3>
          <ul className="list">
            <li className="list__item list__item--highlighted">
              <FontAwesomeIcon icon={faCubes} className="list__item-icon" />
              HTML/5
            </li>
            <li className="list__item list__item--highlighted">
              <FontAwesomeIcon icon={faCubes} className="list__item-icon" />
              CSS/3
            </li>
            <li className="list__item list__item--highlighted">
              <FontAwesomeIcon icon={faCubes} className="list__item-icon" />
              SASS
            </li>
            <li className="list__item list__item--highlighted">
              <FontAwesomeIcon icon={faCubes} className="list__item-icon" />
              BEM
            </li>
            <li className="list__item">
              <FontAwesomeIcon icon={faCube} className="list__item-icon list__item-icon--small" />
              Bootstrap
            </li>
            <li className="list__item list__item--highlighted">
              <FontAwesomeIcon icon={faCubes} className="list__item-icon" />
              JavaScript
            </li>
            <li className="list__item list__item--highlighted">
              <FontAwesomeIcon icon={faCubes} className="list__item-icon" />
              JSON
            </li>
            <li className="list__item list__item--highlighted">
              <FontAwesomeIcon icon={faCubes} className="list__item-icon" />
              Git version control
            </li>
          </ul>
        </div>

        <div className="list__category">
          <h3 className="list__category-headline">
          Frameworks /<sub>etc.</sub>
          </h3>
          <ul className="list">
            <li className="list__item list__item--highlighted">
              <FontAwesomeIcon icon={faCubes} className="list__item-icon" />
              REACT
            </li>
            <li className="list__item">
              <FontAwesomeIcon icon={faCube} className="list__item-icon list__item-icon--small" />
              jQuery
            </li>
            <li className="list__item">
              <FontAwesomeIcon icon={faCube} className="list__item-icon list__item-icon--small" />
              EJS</li>
            <li className="list__item list__item--highlighted">
              <FontAwesomeIcon icon={faCubes} className="list__item-icon" />
              APIs</li>
            <li className="list__item list__item--highlighted">
              <FontAwesomeIcon icon={faCubes} className="list__item-icon" />
              RESTful APIs
            </li>
            <li className="list__item">
              <FontAwesomeIcon icon={faCube} className="list__item-icon list__item-icon--small" />
              MongoDB
            </li>
            <li className="list__item">
              <FontAwesomeIcon icon={faCube} className="list__item-icon list__item-icon--small" />
              Mongoose
            </li>
            <li className="list__item list__item--highlighted">
              <FontAwesomeIcon icon={faCubes} className="list__item-icon" />
              Node.js
            </li>
            <li className="list__item list__item--highlighted">
              <FontAwesomeIcon icon={faCubes} className="list__item-icon" />
              NPM
            </li>
            <li className="list__item list__item--highlighted">
              <FontAwesomeIcon icon={faCubes} className="list__item-icon" />
              Express
            </li>
          </ul>
        </div>

        <div className="list__category">
          <h3 className="list__category-headline">Software /<sub>etc.</sub></h3>
          <ul className="list">
            <li className="list__item list__item--highlighted">
              <FontAwesomeIcon icon={faCubes} className="list__item-icon" />
              VS Code
            </li>
            <li className="list__item list__item--highlighted">
              <FontAwesomeIcon icon={faCubes} className="list__item-icon" />
              GitHub
            </li>
            <li className="list__item list__item--highlighted">
              <FontAwesomeIcon icon={faCubes} className="list__item-icon" />
              Terminal/Commandline
            </li>
            <li className="list__item list__item--highlighted">
              <FontAwesomeIcon icon={faCubes} className="list__item-icon" />
              Figma
            </li>
            <li className="list__item list__item--highlighted">
              <FontAwesomeIcon icon={faCubes} className="list__item-icon" />
              Codepen
            </li>
            <li className="list__item">
              <FontAwesomeIcon icon={faCube} className="list__item-icon list__item-icon--small" />
              robo3t</li>
            <li className="list__item">
              <FontAwesomeIcon icon={faCube} className="list__item-icon list__item-icon--small" />
              Postman</li>
          </ul>
        </div>

        <div className="list__category">
          <h3 className="list__category-headline">Conceptual</h3>
          <ul className="list">
            <li className="list__item list__item--highlighted">
              <FontAwesomeIcon icon={faCubes} className="list__item-icon" />
              Version control workflow
            </li>
            <li className="list__item list__item--highlighted">
              <FontAwesomeIcon icon={faCubes} className="list__item-icon" />
              Refactoring
            </li>
            <li className="list__item list__item--highlighted">
              <FontAwesomeIcon icon={faCubes} className="list__item-icon" />
              Problem solving strategies
            </li>
            <li className="list__item">
              <FontAwesomeIcon icon={faCube} className="list__item-icon list__item-icon--small" />
              Web design principles
            </li>
          </ul>
        </div>

        <div className="list__category">
          <h3 className="list__category-headline">[AFK]</h3>
          <ul className="list">
            <li className="list__item">
              <FontAwesomeIcon icon={faStar} className="list__item-icon list__item-icon--small" />
              Nature explorer
            </li>
            <li className="list__item">
              <FontAwesomeIcon icon={faStar} className="list__item-icon list__item-icon--small" />
              Japanophile
            </li>
            <li className="list__item">
              <FontAwesomeIcon icon={faStar} className="list__item-icon list__item-icon--small" />
              Photography dabbler
            </li>
            <li className="list__item">
              <FontAwesomeIcon icon={faStar} className="list__item-icon list__item-icon--small" />
              Art lover
            </li>
            <li className="list__item">
              <FontAwesomeIcon icon={faStar} className="list__item-icon list__item-icon--small" />
              Fool for cats and all things cute ^._.^ฅ
            </li>
          </ul>
        </div>

      </div>

    </article>
);
}

export default Skills;
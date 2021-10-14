import React from 'react';
import Skills from "./skills.json";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCube, faCubes, faStar } from '@fortawesome/free-solid-svg-icons';

function selectIcon(highlight, category) {

  if (highlight) {
    return(<FontAwesomeIcon icon={faCubes} className="list__item-icon" />);
  } else if (category !== "[AFK]") {
    return(<FontAwesomeIcon icon={faCube} className="list__item-icon list__item-icon--small" />);
  } else {
    return(<FontAwesomeIcon icon={faStar} className="list__item-icon list__item-icon--small" />);
  }
}

function SkillsCollection() {
  return (

    <div className="skillset__collection">

      {Skills.map((category) => 

          <div key={category.id} className="list__category">
            <h3 className="list__category-headline">{category.category}</h3>
            <ul className="list">

            {category.skillset.map((skill, index) => 

                <li key={index} className={`list__item${skill.highlight ? " list__item--highlighted" : ""}`}>
                  {selectIcon(skill.highlight, category.category)}
                  {skill.name}
                </li>
                
            )} 

            </ul>
          </div>

      )}

    </div>

  );
}

export default SkillsCollection;
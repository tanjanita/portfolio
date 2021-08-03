import React from 'react';
import SkillsCollection from './SkillsCollection';

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

      <SkillsCollection />

    </article>
);
}

export default Skills;
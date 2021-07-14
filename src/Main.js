import React from 'react';
import Scroll from './Scroll';
import Hero from './Hero';
import Portfolio from './Portfolio';
import Skills from './Skills';

function Main() {
  return (
    <main className="main">

      <Scroll />
      <Hero />
      <Portfolio />
      <Skills />
      
    </main>
  );
}

export default Main;
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

import Logo from './Logo';
import Scroll from './Scroll';
import Hero from './Hero';
import Portfolio from './Portfolio';
import Skills from './Skills';

const svgString = encodeURIComponent(renderToStaticMarkup(<Logo colour="#e5ecf0" filter="blur" />));

function Main() {
  return (
    <main className="main">

      <div className="watermark scrollFade" style={{backgroundImage: `url("data:image/svg+xml,${svgString}")`}}></div>
      
      <Scroll />
      <Hero />
      <Portfolio />
      <Skills />
      
    </main>
  );
}

export default Main;
import React from 'react';

function Hero() {
  return (
    <article className="hero">
      <div>
        <p className="hero__headline" id="home">Hey, I'm <strong>Tanja</strong>.</p>
        <h1 className="hero__title"><strong>Front-End Web Developer</strong></h1>
        <p className="hero__subtitle">based in Glasgow.</p>
        <p className="hero__introduction">I love to create <strong>clean and structured code</strong> and to see <strong>great designs come to life</strong>.</p>
        <p className="hero__welcome">Welcome to my portfolio!</p>
      </div>
    </article>
  );
}

export default Hero;
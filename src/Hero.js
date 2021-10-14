import React from 'react';

function Hero() {
  return (
    <article className="hero">
      <div>
        <p className="hero__headline" id="home">Hey, I'm <strong>Tanja</strong>.</p>
        <h1 className="hero__title"><strong>Front-End Web Developer</strong></h1>
        <p className="hero__subtitle">based in Glasgow.</p>
        <p className="hero__introduction">I love to create <strong>structured and clean code</strong> and to <strong>see great designs come to life</strong>.<br /><br />
        What I enjoy most is <strong>putting in the work</strong> to achieve the best results: <strong>Responsive pages</strong> that work on any device and provide <strong>accessible information</strong> as well as <strong>smooth and user-friendly</strong> interactions.</p>
        <p className="hero__welcome">Welcome to my portfolio!</p>
      </div>
    </article>
  );
}

export default Hero;
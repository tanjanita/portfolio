import React, { useEffect } from 'react';
import Header from './Header';
import Main from './Main.js';
import Footer from './Footer';

function App() {

  // Add event listeners for fading watermark on scrolling
  useEffect(() => {
    const scrollFadePoint = window.screen.availHeight/1.8;
      function handleScroll(event) {
        const currentScroll = window.pageYOffset;
        let opacity;
        let opacityFadeIn;

        if (currentScroll <= scrollFadePoint) {
          opacity = 1 - currentScroll / scrollFadePoint;
          opacityFadeIn = currentScroll / scrollFadePoint;
        } else {
          opacity = 0;
          opacityFadeIn = 1;
        }

        document.querySelectorAll(".scrollFade").forEach(function(item) {
          item.style.opacity = opacity;
        });

        // Only on larger screens: Fade in background (always 100% on smaller screens)
        if (window.screen.availWidth > 992) {
          document.querySelectorAll('.scrollFadeIn').forEach(function(item) {
            item.style.opacity = opacityFadeIn;
          });
        } else {
          document.querySelectorAll('.scrollFadeIn').forEach(function(item) {
            item.style.opacity = 1;
          });
        }
      }

    window.addEventListener('scroll', handleScroll);
     // cleanup this component
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="top">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
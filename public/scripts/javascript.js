const scrollFadePoint = window.screen.availHeight/1.7;
 
window.addEventListener("scroll", () => {
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
    document.querySelectorAll(".scrollFadeIn").forEach(function(item) {
      item.style.opacity = opacityFadeIn;
    });
  }
});
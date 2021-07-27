const scrollFadePoint = window.screen.availHeight/2;
 
window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  let opacity;
  if (currentScroll <= scrollFadePoint) {
    opacity = 1 - currentScroll / scrollFadePoint;
  } else {
    opacity = 0;
  }
  // const scrollFadeItems = document.querySelectorAll(".scrollFade");
  document.querySelectorAll(".scrollFade").forEach(function(item) {
    item.style.opacity = opacity;
  });
});
import React from "react";

function Logo(props) {
  let blurFilter = (props.filter === "blur") ? true : false;
  
  return (
    <svg {...(blurFilter ? {className: 'watermark scrollFade'} : {className: 'header__logo'})} width="110" height="108" viewBox="0 0 29.104 28.575" xmlns="http://www.w3.org/2000/svg" aria-labelledby="trLogo" role="img">
    <title id="trLogo">Tanja Riethmüller Logo</title>
      { blurFilter &&
        <defs>
          <filter id="blurFilter" x="0" y="0"><feGaussianBlur in="SourceGraphic" stdDeviation=".15" result="blur" /></filter>
        </defs>
      }
      <g fill={props.colour} stroke={props.colour} strokeWidth=".265" {...(blurFilter && {filter: 'url(#blurFilter)'})} >
        <path d="M9.769 10.208h5.885l.677-3.81h-5.842L11.632.133h-3.81C6.382 4.45 4.478 6.399.668 7.415l-.51 2.793h2.92l-2.071 11.6c-.254 1.44-.338 1.905-.338 2.413 0 2.667 1.99 4.19 5.503 4.19 3.217 0 6.689-1.44 9.102-3.767l-1.778-2.836c-1.482 1.058-3.6 2.032-4.488 2.032-.846 0-1.397-.508-1.397-1.313 0-.211.043-.592.085-.93z"/>
        <path d="M8.16 28.032h6.69l.888-4.741a128.96 128.96 0 0 1 1.016-4.87c.72-2.962 1.1-4.063 1.947-5.418.678-1.016 1.65-1.735 2.456-1.735.423 0 .677.127 1.227.55 1.016.762 1.694 1.016 2.71 1.016 2.2 0 3.81-1.482 3.81-3.514 0-1.947-1.736-3.302-4.15-3.302-2.37 0-4.656 1.228-6.561 3.599l.593-3.219h-2.201c-3.09.975-4.996 1.314-8.128 1.483l-.635 3.43.508.04c1.862.17 2.497.55 2.497 1.483 0 .339-.084 1.058-.17 1.609z"/>
      </g>
    </svg>
  );
}

export default Logo;
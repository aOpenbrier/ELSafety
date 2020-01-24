"use strict";

isHomePage = true;

function fixBodyHeight() {
  if (window.matchMedia('(pointer:coarse)').matches) {
    console.log('matches coarse');
    document.body.style.minHeight = window.innerHeight + 'px';
  }
}

fixBodyHeight();
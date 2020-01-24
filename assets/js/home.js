"use strict";

isHomePage = true;

function fixBodyHeight() {
  if (window.matchMedia('(pointer:coarse)').matches) {
    document.body.style.minHeight = window.innerHeight + 'px';
  }
}

fixBodyHeight();
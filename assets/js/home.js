"use strict";

function fixBodyHeight() {
  if (window.matchMedia('(pointer:coarse)').matches) {
    console.log('matches coarse');
    document.body.style.minHeight = window.innerHeight + 'px';
  }
}

window.addEventListener("resize", throttle(fixBodyHeight, 33));

function throttle(callback, limit) {
  var wait = false;
  return function () {
    if (!wait) {
      callback.call();
      wait = true;
      setTimeout(function () {
        wait = false;
      }, limit);
    }
  };
}

fixBodyHeight();
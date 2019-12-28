"use strict";

// store tab list for keyboard accessibility 
var tabsArr = [];
var tablinks = document.getElementsByClassName('tablinks');

for (var i = 0; i < tablinks.length; i++) {
  tabsArr.push(tablinks[i].id);
}

function keyTab(evt, tabpanel) {
  var current = tabsArr.indexOf(evt.currentTarget.id);

  switch (evt.key) {
    case 'Enter':
      openTab(evt, tabpanel);
      break;

    case "ArrowLeft":
      if (current > 0) {
        document.getElementById(tabsArr[current - 1]).focus();
        centerTab(document.getElementById(tabsArr[current - 1]));
      } else {
        tabsArr[tabsArr.length - 1];
        document.getElementById(tabsArr[tabsArr.length - 1]).focus();
        centerTab(document.getElementById(tabsArr[tabsArr.length - 1]));
      }

      break;

    case 'ArrowRight':
      if (current < tabsArr.length - 1) {
        document.getElementById(tabsArr[current + 1]).focus();
        centerTab(document.getElementById(tabsArr[current + 1]));
      } else {
        document.getElementById(tabsArr[0]).focus();
        centerTab(document.getElementById(tabsArr[0]));
      }

      break;

    default:
      break;
  }
}

function openTab(evt, tabId) {
  // Get all elements with class="tab-content" and hide them
  var tabcontent = document.getElementsByClassName('tab-content');

  for (var _i = 0; _i < tabcontent.length; _i++) {
    tabcontent[_i].style.display = 'none';
  } // Get all elements with class="tablinks" and remove the class "active"


  var tablinks = document.getElementsByClassName('tablinks');

  for (var _i2 = 0; _i2 < tablinks.length; _i2++) {
    tablinks[_i2].setAttribute('aria-selected', false);

    tablinks[_i2].setAttribute('tabindex', -1);

    tablinks[_i2].className = tablinks[_i2].className.replace(' active', '');
  } // Show the current tab, and add an "active" class to the button that opened the tab 


  document.getElementById(tabId).style.display = 'block';
  evt.currentTarget.className += ' active';
  evt.currentTarget.setAttribute('aria-selected', true);
  evt.currentTarget.setAttribute('tabindex', 0);
}

document.getElementsByClassName('default-open')[0].click();
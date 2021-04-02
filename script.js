
"use strict";

// **********************************
// first way to add sticky navbar
// **********************************

// window.onscroll = function() {myFunction()};
// function myFunction() {
//   if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//     document.getElementById("navbar_id").className = "navbar navbar-expand-lg navbar-light sticky-top navbar_bg_Color";
//   } else {
//     document.getElementById("navbar_id").className = "navbar navbar-expand-lg navbar-light sticky-top";
//   }
// }


// **********************************
// second way to add sticky navbar
// **********************************

// window.onscroll = function() {
// 	  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//     document.getElementById("navbar_id").className = "navbar navbar-expand-lg navbar-light sticky-top navbar_bg_Color";
//   } else {
//     document.getElementById("navbar_id").className = "navbar navbar-expand-lg navbar-light sticky-top";
//   }
// };


// --------------------------------------------
// recommended way to add sticky navbar
// ---------------------------------------------
window.onscroll = function() {
	  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("navbar_id").classList.add('navbar_bg_Color');
  } else {
    document.getElementById("navbar_id").classList.remove('navbar_bg_Color');
  }
};


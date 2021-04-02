
"use strict";


// fst way

// window.onscroll = function() {myFunction()};

// function myFunction() {
//   if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//     document.getElementById("myP").className = "navbar navbar-expand-lg navbar-light sticky-top test";
//   } else {
//     document.getElementById("myP").className = "navbar navbar-expand-lg navbar-light sticky-top";
//   }
// }


// second way

// window.onscroll = function() {
// 	  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//     document.getElementById("myP").className = "navbar navbar-expand-lg navbar-light sticky-top test";
//   } else {
//     document.getElementById("myP").className = "navbar navbar-expand-lg navbar-light sticky-top";
//   }
// };



// recomend way
window.onscroll = function() {
	  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("myP").classList.add('test');
  } else {
    document.getElementById("myP").classList.remove('test');
  }
};


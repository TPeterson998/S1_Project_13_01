"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 11
   Case Problem 1

   Author: Trent Peterson 
   Date:   3.12.19
   
   Filename: bw_review.js
	
   Functions List:

   init()
      Initializes the contents of the web page and sets up the
      event handlers.
      
   lightStars(e)
      Function that colors the stars representing the user rating
      for the book.
      
   turnOffStars(e)
      Function that restores the stars to empty colors, removing
      the user rating for the book.

   updateCount()
      Updates the count of characters in the wordCountBox
      element.

   countCharacters(textStr)
      Returns the number of a non-whitespace characters
      within textStr

*/
// This calls in the init function when the window loads
window.onload = init();

function init() {
      // this creates somthing like an array with all of the img tags in the span with the id of stars
      var stars = document.querySelectorAll("span#stars img");
      // This for loop goes through all of the array created above add changes the mouse when it is on any of those images and it calls in the lightstars function whenever the mouse enters the img
      for (var i = 0; i < stars.length; i++) {
            stars[i].style.cursor = "pointer";
            stars[i].addEventListener("mouseenter", lightStars);
      }
      // This loads the update count function every time you press a char key
      document.addEventListener("keyup", updateCount);
}

function lightStars() {
      // This grabs the alt in the img tags for the targeted img
      var starNumber = event.target.alt;
      // this creates somthing like an array with all of the img tags in the span with the id of stars
      var stars = document.querySelectorAll("span#stars img");
      // this for loop chages the img tags src for every img below the one the mouse is over from the array above
      for (var i = 0; i < starNumber; i++) {
            stars[i].src = "bw_star2.png";
      };
      //this keeps all of the stars above the img that the mouse is over white
      for (var i = starNumber; i < 5; i++) {
            stars[i].src = "bw_star.png";
      }
      // this adds in the number of stars in words depending on how many stars are colored in
      document.getElementById("rating").value = starNumber + " Stars";
      // this makes it so when the mouse leaves the images it runs the turnOffStars
      event.target.addEventListener("mouseleave", turnOffStars);
      //this aynnomus function is called every time you click the image and it takes away the turnoffstars function and makes the stars stay what they are when you leave them 
      event.target.addEventListener("click", function () {
            event.target.removeEventListener("mouseleave", turnOffStars);
      })
};

function turnOffStars() {
      // this creates somthing like an array with all of the img tags in the span with the id of stars
      var stars = document.querySelectorAll("span#stars img");
      //this changes the star images back to white as soon as this function is called in
      for (var i = 0; i < stars.length; i++) {
            stars[i].src = "bw_star.png";
      };
      //this sets the value of the element with the rating id is set to an empty string
      document.getElementById("rating").value = "";
};

function updateCount() {
      // this gets the value of the text area comment
      var commentText = document.getElementById("comment").value;
      // this calls in the provided function using the above variable as the parameter
      var charCount = countCharacters(commentText);
      // this sets the value of the element with the id with the wordCount 
      document.getElementById("wordCount").value = charCount + "/1000";
      // this if changes the color if the number count got over 1000
      if (charCount > 1000) {
            document.getElementById("wordCount").style.backgroundColor = "rgb(255, 0, 0)";
            document.getElementById("wordCount").style.color = "rgb(255, 255, 255)";

      } else {
            document.getElementById("wordCount").style.backgroundColor = "rgb(255, 255, 255)";
            document.getElementById("wordCount").style.color = "rgb(0, 0, 0)";
      };
}






/*=================================================================*/

function countCharacters(textStr) {
      var commentregx = /\s/g;
      var chars = textStr.replace(commentregx, "");
      return chars.length;
}
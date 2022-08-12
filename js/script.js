"use strict";

const sectionFrontEl = document.querySelector(".section-front");
const sectionResultEl = document.querySelector(".section-result");
const strongEl = document.querySelector("strong");
const btnRatingEl = document.querySelectorAll(".btn--rating");
const btnSubmitEl = document.querySelector(".btn--submit");

let ratingSelected = false;
btnSubmitEl.setAttribute("disabled", "");
let rating = 5;
let selectedBtn = 0;

// When a rating is selected
for (let i = 0; i < btnRatingEl.length; i++) {
  btnRatingEl[i].addEventListener("click", function () {
    // If a rating is already selected, deselect it
    if (btnRatingEl[i].classList.contains("btn--selected")) {
      ratingSelected = false;
      btnSubmitEl.setAttribute("disabled", "");
      btnRatingEl[i].classList.remove("btn--selected");
      rating = 5;

      // Select it
    } else {
      ratingSelected = true;
      btnSubmitEl.removeAttribute("disabled", "");
      btnRatingEl[selectedBtn].classList.remove("btn--selected");
      btnRatingEl[i].classList.add("btn--selected");
      selectedBtn = i;
      rating = i + 1;
    }
  });
}

btnSubmitEl.addEventListener("click", function () {
  if (ratingSelected) {
    console.log("disabled inner");
    strongEl.textContent = rating;
    sectionFrontEl.classList.toggle("hidden");
    sectionResultEl.classList.toggle("hidden");
  }
});

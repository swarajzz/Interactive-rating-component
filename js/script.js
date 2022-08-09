"use strict";

const sectionFrontEl = document.querySelector(".section-front");
const sectionResultEl = document.querySelector(".section-result");
const strongEl = document.querySelector("strong");
const btnRatingEl = document.querySelectorAll(".btn--rating");
const btnSubmitEl = document.querySelector(".btn--submit");

let rating = 5;
let selectedBtn = 0;

for (let i = 0; i < btnRatingEl.length; i++) {
  btnRatingEl[i].addEventListener("click", function () {
    if (btnRatingEl[i].classList.contains("btn--selected")) {
      btnRatingEl[i].classList.remove("btn--selected");
      rating = 5;
    } else {
      btnRatingEl[selectedBtn].classList.remove("btn--selected");
      btnRatingEl[i].classList.add("btn--selected");
      selectedBtn = i;
      rating = i + 1;
    }
  });
}

btnSubmitEl.addEventListener("click", function () {
  strongEl.textContent = rating;
  sectionFrontEl.classList.toggle("hidden");
  sectionResultEl.classList.toggle("hidden");
});

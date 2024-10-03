/*
import warriorModule from "./modules/warriorModule.js";

const warriors =  warriorModule().getWarriors();
console.log(warriors);
*/

 
// The code above will log the warriors array to the console.
// The code below will log the warriors array to the console.

const armyDisplay = document.querySelector(" .your-army-display");

let purchasedWarriors = JSON.parse(localStorage.getItem(purchasedWarriors)) || [];

const displayPurchasedWarriors = () => {
  if (purchasedWarriors.length === 0) {
    armyDisplay.innerHTML = "<p> You have not purchased any warriors yet.</p>"
  } else {
    let htmlTxt = "";

    purchasedWarriors.forEach(warrior => {
      htmlTxt += `
      <article class="product-box col-xs-12 col-sm-6">
      <h3>${warrior.name}</h3>
      <img src="images/${warrior.image}" alt="${warrior.name}">
      </article>
      `;
    });
    armyDisplay.innerHTML = htmlTxt;
  }
};

displayPurchasedWarriors();
/*
import warriorModule from "./modules/warriorModule.js";

const warriors =  warriorModule().getWarriors();
console.log(warriors);
*/

 
// The code above will log the warriors array to the console.
// The code below will log the warriors array to the console.



let purchasedWarriors = JSON.parse(localStorage.getItem("purchasedWarriors")) || [];
let purchasedWeapons = JSON.parse(localStorage.getItem("purchasedWeapons")) || [];

const armyDisplay = document.querySelector(" .your-army-display");

const displayPurchasedWarriors = () => {
  let htmlTxt = "<h2>Dine krigere</h2>";

  if (purchasedWarriors.length === 0) {
    htmlTxt += "<p>Du har ikke kjøpt noen krigere enda. </p>";
  } else {
    purchasedWarriors.forEach(warrior => {
      htmlTxt += `
      <article class="product-box">
      <h3>${warrior.name}</h3>
      <img src="images/${warrior.image}" alt="${warrior.name}">
      </article>
      `;
    });
  }

  armyDisplay.innerHTML = htmlTxt;
};


const displayPurchasedWeapons = () => {
  let htmlTxt = "<h2>Dine våpen</h2>";

  if (purchasedWeapons.length === 0) {
    htmlTxt += "<p>Du har ikke kjøpt våpen enda </p>";
  } else {
    purchasedWeapons.forEach(weapon => {
      htmlTxt += `
      <article class="product-box2">
      <h3>${weapon.name}</h3>
      <img src="images/${weapon.image}" alt="${weapon.name}">
      </article>
      `;
    });
  }

armyDisplay.innerHTML += htmlTxt;
};

displayPurchasedWarriors();
displayPurchasedWeapons();
/*
import warriorModule from "./modules/warriorModule.js";

const warriors =  warriorModule().getWarriors();
console.log(warriors);
*/

 
// The code above will log the warriors array to the console.
// The code below will log the warriors array to the console.

const outputSection = document.querySelector("#output-section");

const showWarriors = () => {
  if(localStorage.getItem("purchasedWarriors") != null);{

  const purchasedWarriors = localStorage.getItem("purchasedWarriors");
  console.log(localStorage);

  console.log(localStorage.getItem("purchasedWarriors"));

  outputSection.innerHTML = `
   <article>
   <h3>${purchasedWarriors}</h3>
   <img src="images/${purchasedWarriors}.jpg>
   </article>
  `;
  }
}

(() =>{
  showWarriors();
})();
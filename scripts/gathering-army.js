/*import warriorModule from "./modules/warriorModule.js"
const warriorDisplay = document.querySelector("#warriordisplay"); // i parantesen til querySelector legger vi inn CSS-velgere slik vi ville gjort i CSS-kode


//this code will display the warriors to the page and make them clickable to be added to the army;


const warriors = warriorModule().getWarriors();

const displayWarriors = () => {
    let htmlTxt = "";

    warriors.forEach(warrior => {
        htmlTxt += `
        <article class="product-box col-xs-12 col-sm-6">
        <h3>${warrior.name}</h3>
        <img src="images/warriors/${warrior.image}">
    </article>  
        `;
    }); 
}//forEach
    warriorDisplay.innerHTML = htmlTxt; 

    displayWarriors();

*/
import warriorModule from "./modules/warriorModule.js";

const warriorDisplay = document.querySelector(".warrior-display");

const warriors = warriorModule().getWarriors();

const displayWarriors = () => {
    let htmlTxt = "";

    warriors.forEach(warrior => {
        htmlTxt += `
        <article class="product-box col-xs-12 col-sm-6">
            <h3>${warrior.name}</h3>
            <img src="images/${warrior.image}" alt="${warrior.name}">
            <button class="buy-button" data-id="${warrior.id}">Kjøp</button>
        </article>  
        `;
    });

    warriorDisplay.innerHTML = htmlTxt; 

    // Legg til event listeners på knappene
    document.querySelectorAll(".buy-button").forEach(button => {
        button.addEventListener("click", (event) => {
            const warriorId = event.target.getAttribute("data-id");
            buyWarrior(warriorId);
        });
    });
};

const buyWarrior = (id) => {
    const warrior = warriors.find(warrior => warrior.id == id);
    let purchasedWarriors = JSON.parse(localStorage.getItem("purchasedWarriors")) || [];
    purchasedWarriors.push(warrior);
    localStorage.setItem("purchasedWarriors", JSON.stringify(purchasedWarriors));
    alert(`${warrior.name} er lagt til i din hær!`);
};

displayWarriors();

import warriorModule from "./modules/warriorModule.js"
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
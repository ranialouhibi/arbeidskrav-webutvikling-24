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

import WeaponModule from "./modules/WeaponModule.js";
const weaponDisplay = document.querySelector(".weapon-display");
const weapons = WeaponModule().getWeapons();

const displayWeapons = () => {
    let htmlTxt = "";
weapons.forEach(weapons => {
    htmlTxt += `
    <article class="product-box2">
        <h3>${weapons.name}</h3>
        <img src="images/${weapons.image}" alt="${weapons.name}">
        <button class="buy-button" data-id="${weapons.id}">Kjøp</button>
    </article>  
    `;
});
weaponDisplay.innerHTML = htmlTxt;
}

document.querySelectorAll(".buy-button2").forEach(button => {
    button.addEventListener("click", (event) => {
        const weaponId = event.target .getAttribute("data-id");
        buyWeapon(weaponId);
    });
});

const buyWeapon = (id) => {
    const weapon = weapon.find(weapon => weapon.id == id);
    let purchasedWeapon = JSON.parse(localStorage.getItem("purchasedWeapon")) || [];
    purchasedWeapon.push(weapon);
    localStorage.setItem("purchasedWeapon", JSON.stringify(purchasedWeapon));
    alert(`${weapon.name} er lagt til i din hær!`);
};


displayWarriors();
displayWeapons();




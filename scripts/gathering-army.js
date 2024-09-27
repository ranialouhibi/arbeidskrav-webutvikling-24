import warriorModule from "./modules/warriorModule.js"

//this code will display the warriors to the page and make them clickable to be added to the army;

const warriors = warriorModule().getWarriors();
const warriorsDiv = document.getElementById("warriors");

warriors.forEach(warrior => {
    const warriorDiv = document.createElement("div");
    warriorDiv.innerHTML = warrior.name;
    warriorDiv.addEventListener("click", () => {
        warriorModule().addWarriorToArmy(warrior);
        warriorDiv.remove();
    });
    warriorsDiv.appendChild(warriorDiv);
}
);
//this code will display the warriors in the army to the page and make them clickable to be removed from the army;
const armyDiv = document.getElementById("army");
const army = warriorModule().getArmy();

army.forEach(warrior => {
    const warriorDiv = document.createElement("div");
    warriorDiv.innerHTML = warrior.name;
    warriorDiv.addEventListener("click", () => {
        warriorModule().removeWarriorFromArmy(warrior);
        warriorDiv.remove();
    });
    armyDiv.appendChild(warriorDiv);
}
);
//this code will display the total power of the army to the page;
const totalPower = warriorModule().getTotalPower();
const powerDiv = document.getElementById("power");
powerDiv.innerHTML = totalPower;
//this code will display the total power of the army to the page;
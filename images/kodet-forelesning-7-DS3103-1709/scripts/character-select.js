/*
    Innhenting av HTML-objekters
*/
const characterSelect = document.querySelector("#character-select");
const saveRaceBtn = document.querySelector("#save-race-btn");
const deleteRaceBtn = document.querySelector("#delete-race-btn");

// Funksjon for å lagre valget brukeren gjør samt teste ut setItem med noen flere keys
const saveRace = () => {    
    const race = characterSelect.value;
    localStorage.setItem("race", race);

    /*
        Legger til noen ekstra ting i localStorage manuelt for testens skyld
    */
    localStorage.setItem("weapon", "Slingshot");
    localStorage.setItem("money", "100");

    // Et objekt som 3 properties
    const pigObject = {
        name: "Mr. Pig",
        image: "pig.png",
        gold: "270"
    };

    // JSON - JavaScript Object Notation
    // Må stringify objektet først før vi lagrer i localStorage. Det er ikke lov å lagre objekter direkte
    localStorage.setItem("pigObject", JSON.stringify( pigObject )  );

    // Når vi henter pigObject ut av localStorage vil vi måtte bruke JSON.parse() for å forvandle det tilbake fra JSON til objekt

}

// Funksjon for å slette flere keys. clear() er også mulig, men er litt "farlig" da den sletter absolutt alt fra localStorage
const deleteRace = () => {
    localStorage.removeItem("race");
    localStorage.removeItem("weapon");
    localStorage.removeItem("money");
}

/*
    Setter event på knappene
*/
saveRaceBtn.addEventListener("click", saveRace);
deleteRaceBtn.addEventListener("click", deleteRace);
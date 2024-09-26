const outputSection = document.querySelector("#output-section");

// Funksjon for å hente valg brukeren har gjort på character-select.html
const showCharacter = () => {    

    if( localStorage.getItem("race") != null ) { // sjekker om key race eksisterer
        
        const race = localStorage.getItem("race"); // henter race key

        // Sjekke hva localStorage gir oss tom/ikke tom. Denne utskriften sjekkes i fanen Console i Web Console-panelet i nettleseren
        console.log(localStorage);

        // Sjekke hva localStorage.getItem("race") gir oss tom/ikke tom
        console.log(localStorage.getItem("race"));

        outputSection.innerHTML = `
            <article>
                <h3>${race}</h3>
                <img src="images/${race}.png"/>
            </article>
        `;

    } else { // hvis ikke race er satt
        outputSection.innerHTML = "<p>Du har ikke valgt noen rase enda. Velg rase på character select-siden.</p>";
    }
    
}

(()=>{ // INIT-blokk: her kan man samle alle funksjonskall som skal gjøres ved sidelast.
    showCharacter();
})();


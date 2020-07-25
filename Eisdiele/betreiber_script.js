"use strict";
var Eisdiele;
(function (Eisdiele) {
    //Buttons zum Datenbank leeren und reloaden werden verknüpft.
    document.getElementById("buttonShow")?.addEventListener("click", reloadDatabase);
    document.getElementById("buttonDeleteAll")?.addEventListener("click", deleteAllEntrys);
    //Die Bestellungen werden über die Datenbank und einem Interface abgerufen.
    generateBestellungen();
    async function generateBestellungen() {
        await Eisdiele.communicateBestellungen("https://gissose2020-danielmeisler.herokuapp.com/show");
        //await communicateBestellungen("http://localhost:8100/show");
        showOrders();
    }
    Eisdiele.generateBestellungen = generateBestellungen;
    //Allgemeines Div zum rest reinpacken und ansprechen erstellt.
    let xOberDiv = document.createElement("div");
    xOberDiv.id = "OberDIV";
    document.getElementById("aktuelleBestellungenID")?.appendChild(xOberDiv);
    //Zeigt alle Bestellungen aus der DB an, leert vorher beim aktualisieren den Inhalt der Divs.
    //Bei manchen Interface strings werden die Veränderungen für die URL rückgängig gemacht.
    async function showOrders() {
        xOberDiv.innerHTML = "";
        for (let i = 0; i < Eisdiele.bestellArray.length; i++) {
            let xDiv = document.createElement("div");
            xDiv.id = "aktuelleBestellungenDIV" + i;
            xDiv.classList.add("aktuelleBestellungenClass");
            xOberDiv.appendChild(xDiv);
            xDiv.setAttribute("aktuellerZaehler", i.toString());
            let xBestellung = document.createElement("h2");
            xBestellung.innerHTML = "Bestellung: " + (i + 1);
            xDiv.appendChild(xBestellung);
            let xVorname = document.createElement("p");
            xVorname.innerHTML = "Vorname: " + Eisdiele.bestellArray[i].vorname;
            xDiv.appendChild(xVorname);
            let xNachname = document.createElement("p");
            xNachname.innerHTML = "Nachname: " + Eisdiele.bestellArray[i].nachname;
            xDiv.appendChild(xNachname);
            let xStrasse = document.createElement("p");
            xStrasse.innerHTML = "Straße: " + Eisdiele.bestellArray[i].strasse;
            xDiv.appendChild(xStrasse);
            let xPlz = document.createElement("p");
            xPlz.innerHTML = "PLZ: " + Eisdiele.bestellArray[i].plz;
            xDiv.appendChild(xPlz);
            let xWohnort = document.createElement("p");
            xWohnort.innerHTML = "Wohnort: " + Eisdiele.bestellArray[i].wohnort;
            xDiv.appendChild(xWohnort);
            let xOrder = document.createElement("h3");
            xOrder.innerHTML = "Inhalt: ";
            xDiv.appendChild(xOrder);
            let xEissorte = document.createElement("p");
            let eissorteFinal = (Eisdiele.bestellArray[i].eissorte);
            if (eissorteFinal.includes("_")) {
                eissorteFinal = eissorteFinal.replace("_", " ");
            }
            xEissorte.innerHTML = "Eissorte: " + eissorteFinal;
            xDiv.appendChild(xEissorte);
            let xBasis = document.createElement("p");
            xBasis.innerHTML = "Basis: " + Eisdiele.bestellArray[i].basis;
            xDiv.appendChild(xBasis);
            let xTopping = document.createElement("p");
            xTopping.innerHTML = "Topping: " + Eisdiele.bestellArray[i].topping;
            xDiv.appendChild(xTopping);
            let xGesamtSumme = document.createElement("p");
            let summeFinal = Eisdiele.bestellArray[i].summe;
            summeFinal = summeFinal.replace("-", ".");
            xGesamtSumme.innerHTML = "Gesamtsumme: " + summeFinal + "0€";
            xDiv.appendChild(xGesamtSumme);
            let xBearbeitet = document.createElement("button");
            xBearbeitet.id = "bestellungBearbeitet" + i;
            xBearbeitet.innerHTML = "Bestellung bearbeitet";
            xBearbeitet.addEventListener("click", handleBearbeitet);
            xDiv.appendChild(xBearbeitet);
            let xButton = document.createElement("button");
            xButton.id = "bestellungEntfernen" + i;
            xButton.classList.add("loeschenButton");
            xButton.innerHTML = "Bestellung löschen";
            xButton.addEventListener("click", handleBestellungEntfernen);
            xDiv.appendChild(xButton);
        }
    }
    //Löscht komplette Datenbank.
    async function deleteAllEntrys() {
        let url = "https://gissose2020-danielmeisler.herokuapp.com";
        //let url: string = "http://localhost:8100";
        url += "/deleteAll";
        await fetch(url);
    }
    //Entfernt einzelne Bestellungen, indem es den aktuellen Zähler mit in die URL packt, um dort den richtigen Eintrag zu entfernen.
    async function handleBestellungEntfernen(_event) {
        (_event.currentTarget.parentElement).remove();
        let targetZaehler = _event.currentTarget.parentElement.getAttribute("aktuellerZaehler");
        let url = "https://gissose2020-danielmeisler.herokuapp.com" + "/delete" + "?" + targetZaehler;
        //let url: string = "http://localhost:8100" + "/delete" + "?" + targetZaehler;
        await fetch(url);
    }
    //Aktualisiert die Datenbank, indem es die Seite neulädt, weil meine alte Methode aus Aufgabe11 hat nicht mehr funktioniert.
    async function reloadDatabase() {
        location.reload();
    }
    //Beim Klicken dieser Buttons wird die komplette Bestellung ausgegraut und als "bearbeitet" abgestempelt.
    function handleBearbeitet(_event) {
        let targetZaehler = _event.currentTarget.parentElement.getAttribute("aktuellerZaehler");
        document.getElementById("aktuelleBestellungenDIV" + targetZaehler).style.borderColor = "lightgrey";
        document.getElementById("aktuelleBestellungenDIV" + targetZaehler).style.color = "lightgrey";
        document.getElementById("bestellungBearbeitet" + targetZaehler).style.backgroundColor = "lightgrey";
        document.getElementById("bestellungEntfernen" + targetZaehler).style.backgroundColor = "lightgrey";
    }
})(Eisdiele || (Eisdiele = {}));
//# sourceMappingURL=betreiber_script.js.map
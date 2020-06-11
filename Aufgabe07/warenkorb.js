"use strict";
var Aufgabe07;
(function (Aufgabe07) {
    let preisTemp = 0;
    let summe = 0;
    for (let i = 0; i < localStorage.artikelZaehler; i++) {
        let xDiv = document.createElement("div");
        xDiv.id = "warenkorbID" + i;
        xDiv.classList.add("warenkorbClass");
        document.getElementById("conWarenkorb")?.appendChild(xDiv);
        let xImg = document.createElement("img");
        xImg.src = localStorage.getItem("bildString" + i);
        xDiv.appendChild(xImg);
        let xH2 = document.createElement("h2");
        xH2.innerHTML = localStorage.getItem("titelString" + i);
        xDiv.appendChild(xH2);
        let xP = document.createElement("p");
        xP.innerHTML = localStorage.getItem("textString" + i);
        xDiv.appendChild(xP);
        let xH3 = document.createElement("h3");
        xH3.innerHTML = "Preis: " + localStorage.getItem("preisString" + i) + "0 €";
        preisTemp = parseFloat(localStorage.getItem("preisString" + i));
        summe = summe + preisTemp;
        xDiv.setAttribute("preis", preisTemp + "");
        xDiv.appendChild(xH3);
        let xButton = document.createElement("button");
        xButton.innerHTML = "Löschen";
        xButton.addEventListener("click", handleDeleteContent);
        xDiv.appendChild(xButton);
    }
    let xSumme = document.createElement("h2");
    xSumme.id = "summeID";
    xSumme.innerHTML = "Gesamtwert: " + summe.toFixed(2) + "€";
    document.getElementById("gesamtwertID")?.appendChild(xSumme);
    let xDelete = document.createElement("button");
    xDelete.id = "deleteButtonID";
    xDelete.innerHTML = "Alle Artikel entfernen";
    xDelete.addEventListener("click", handleDelete);
    document.getElementById("deleteButton")?.appendChild(xDelete);
    function handleDelete(_event) {
        document.getElementById("conWarenkorb")?.remove();
        localStorage.clear();
        xSumme.innerHTML = "Gesamtwert: 0 €";
    }
    function handleDeleteContent(_event) {
        (_event.currentTarget.parentElement).remove();
        let temp = _event.currentTarget.parentElement.getAttribute("preis");
        summe = summe - parseFloat(temp);
        document.getElementById("summeID").innerHTML = "Gesamtwert: " + summe.toFixed(2) + "€";
    }
})(Aufgabe07 || (Aufgabe07 = {}));
//# sourceMappingURL=warenkorb.js.map
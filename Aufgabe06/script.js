"use strict";
var Aufgabe06;
(function (Aufgabe06) {
    let waffelPreis = 0;
    let becherPreis = 0;
    for (let i = 0; i < Aufgabe06.eissorte.length; i++) {
        if (Aufgabe06.eissorte[i].kategorie == 1) {
            let xDiv = document.createElement("div");
            xDiv.id = "waffelDiv" + i;
            xDiv.classList.add("waffelClass");
            document.getElementById("conWaff")?.appendChild(xDiv);
            xDiv.setAttribute("waffKat", i.toString());
            let xImg = document.createElement("img");
            xImg.src = Aufgabe06.eissorte[i].bild;
            xDiv.appendChild(xImg);
            let xH2 = document.createElement("h2");
            xH2.innerHTML = Aufgabe06.eissorte[i].titel;
            xDiv.appendChild(xH2);
            let xP = document.createElement("p");
            xP.innerHTML = Aufgabe06.eissorte[i].text;
            xDiv.appendChild(xP);
            let xH3 = document.createElement("h3");
            xH3.innerHTML = "Preis: " + Aufgabe06.eissorte[i].preis + "0 €";
            waffelPreis = Aufgabe06.eissorte[i].preis;
            xDiv.appendChild(xH3);
            let xButton = document.createElement("button");
            xButton.innerHTML = "In den Warenkorb";
            xButton.addEventListener("click", handleWarenkorb);
            xDiv.appendChild(xButton);
        }
        if (Aufgabe06.eissorte[i].kategorie == 2) {
            let xDiv = document.createElement("div");
            xDiv.id = "becherDiv" + i;
            xDiv.classList.add("becherClass");
            document.getElementById("conBech")?.appendChild(xDiv);
            xDiv.setAttribute("bechKat", i.toString());
            let xImg = document.createElement("img");
            xImg.src = Aufgabe06.eissorte[i].bild;
            xDiv.appendChild(xImg);
            let xH2 = document.createElement("h2");
            xH2.innerHTML = Aufgabe06.eissorte[i].titel;
            xDiv.appendChild(xH2);
            let xP = document.createElement("p");
            xP.innerHTML = Aufgabe06.eissorte[i].text;
            xDiv.appendChild(xP);
            let xH3 = document.createElement("h3");
            xH3.innerHTML = "Preis: " + Aufgabe06.eissorte[i].preis + "0 €";
            becherPreis = Aufgabe06.eissorte[i].preis;
            xDiv.appendChild(xH3);
            let xButton = document.createElement("button");
            xButton.innerHTML = "In den Warenkorb";
            xButton.addEventListener("click", handleWarenkorb);
            xDiv.appendChild(xButton);
        }
    }
    let ergebnis = 0;
    let temp = 0;
    let artikelZaehler = 0;
    let blasenDiv = document.createElement("div");
    blasenDiv.id = "kaufBlase";
    function handleWarenkorb(_event) {
        if (artikelZaehler >= 0) {
            document.getElementById("warenkorb")?.appendChild(blasenDiv);
        }
        artikelZaehler++;
        blasenDiv.innerHTML = artikelZaehler + "";
        if (_event.currentTarget.parentElement?.getAttribute("waffKat")) {
            ergebnis = temp + waffelPreis;
            temp = ergebnis;
        }
        else if (_event.currentTarget.parentElement?.getAttribute("bechKat")) {
            ergebnis = temp + becherPreis;
            temp = ergebnis;
        }
        console.log("Summe: " + ergebnis.toFixed(2) + "€");
    }
    let xAlleKategorien = document.createElement("a");
    xAlleKategorien.id = "homeButt";
    xAlleKategorien.addEventListener("click", handleKategorie);
    let xTestBild = document.createElement("img");
    xTestBild.src = "home.png";
    document.getElementById("homeButton")?.appendChild(xAlleKategorien).appendChild(xTestBild);
    let xWaffelKategorie = document.createElement("a");
    xWaffelKategorie.id = "waffButt";
    xWaffelKategorie.innerHTML = "Waffeleis";
    xWaffelKategorie.addEventListener("click", handleKategorie);
    document.getElementById("waffelButton")?.appendChild(xWaffelKategorie);
    let xBecherKategorie = document.createElement("a");
    xBecherKategorie.id = "bechButt";
    xBecherKategorie.innerHTML = "Bechereis";
    xBecherKategorie.addEventListener("click", handleKategorie);
    document.getElementById("becherButton")?.appendChild(xBecherKategorie);
    function handleKategorie(_event) {
        if (_event.currentTarget.getAttribute("id") == "homeButt") {
            document.getElementById("eisWaffelID").style.display = "block";
            document.getElementById("eisBecherID").style.display = "block";
        }
        else if (_event.currentTarget.getAttribute("id") == "waffButt") {
            document.getElementById("eisBecherID").style.display = "none";
            document.getElementById("eisWaffelID").style.display = "block";
        }
        else if (_event.currentTarget.getAttribute("id") == "bechButt") {
            document.getElementById("eisWaffelID").style.display = "none";
            document.getElementById("eisBecherID").style.display = "block";
        }
    }
})(Aufgabe06 || (Aufgabe06 = {}));
//# sourceMappingURL=script.js.map
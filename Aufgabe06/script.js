"use strict";
var Aufgabe06;
(function (Aufgabe06) {
    let testPreis = 0;
    let testPreis2 = 0;
    for (let i = 0; i < Aufgabe06.eissorte.length; i++) {
        if (Aufgabe06.eissorte[i].kategorie == 1) {
            let xDiv = document.createElement("div");
            xDiv.id = "waffelDiv" + i;
            xDiv.classList.add("waffelClass");
            document.getElementById("conWaff")?.appendChild(xDiv);
            xDiv.setAttribute("testid", i.toString());
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
            testPreis = Aufgabe06.eissorte[i].preis;
            console.log(testPreis);
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
            xDiv.setAttribute("testid2", i.toString());
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
            testPreis2 = Aufgabe06.eissorte[i].preis;
            console.log(testPreis2);
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
    function handleWarenkorb(_event) {
        if (artikelZaehler >= 0) {
            document.getElementById("kaufBlase")?.appendChild(blasenDiv);
        }
        artikelZaehler++;
        blasenDiv.innerHTML = artikelZaehler + "";
        if (_event.currentTarget.parentElement?.getAttribute("testid")) {
            ergebnis = temp + testPreis;
            temp = ergebnis;
        }
        else if (_event.currentTarget.parentElement?.getAttribute("testid2")) {
            ergebnis = temp + testPreis2;
            temp = ergebnis;
        }
        console.log(ergebnis.toFixed(2));
    }
})(Aufgabe06 || (Aufgabe06 = {}));
//# sourceMappingURL=script.js.map
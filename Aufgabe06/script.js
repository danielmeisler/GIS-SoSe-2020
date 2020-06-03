"use strict";
var Aufgabe06;
(function (Aufgabe06) {
    for (let i = 0; i < Aufgabe06.eissorte.length; i++) {
        if (Aufgabe06.eissorte[i].kategorie == 1) {
            let xDiv = document.createElement("div");
            xDiv.id = "waffelDiv" + i;
            xDiv.classList.add("waffelClass");
            document.getElementById("conWaff")?.appendChild(xDiv);
            let xImg = document.createElement("img");
            xImg.src = Aufgabe06.eissorte[i].bild;
            document.getElementById("waffelDiv" + i)?.appendChild(xImg);
            let xH2 = document.createElement("h2");
            xH2.innerHTML = Aufgabe06.eissorte[i].titel;
            document.getElementById("waffelDiv" + i)?.appendChild(xH2);
            let xP = document.createElement("p");
            xP.innerHTML = Aufgabe06.eissorte[i].text;
            document.getElementById("waffelDiv" + i)?.appendChild(xP);
            let xH3 = document.createElement("h3");
            xH3.innerHTML = "Preis: " + Aufgabe06.eissorte[i].preis + "0 €";
            document.getElementById("waffelDiv" + i)?.appendChild(xH3);
            let xButton = document.createElement("button");
            xButton.innerHTML = "In den Warenkorb";
            document.getElementById("waffelDiv" + i)?.appendChild(xButton);
        }
        if (Aufgabe06.eissorte[i].kategorie == 2) {
            let xDiv = document.createElement("div");
            xDiv.id = "becherDiv" + i;
            xDiv.classList.add("becherClass");
            document.getElementById("conBech")?.appendChild(xDiv);
            let xImg = document.createElement("img");
            xImg.src = Aufgabe06.eissorte[i].bild;
            document.getElementById("becherDiv" + i)?.appendChild(xImg);
            let xH2 = document.createElement("h2");
            xH2.innerHTML = Aufgabe06.eissorte[i].titel;
            document.getElementById("becherDiv" + i)?.appendChild(xH2);
            let xP = document.createElement("p");
            xP.innerHTML = Aufgabe06.eissorte[i].text;
            document.getElementById("becherDiv" + i)?.appendChild(xP);
            let xH3 = document.createElement("h3");
            xH3.innerHTML = "Preis: " + Aufgabe06.eissorte[i].preis + "0 €";
            document.getElementById("becherDiv" + i)?.appendChild(xH3);
            let input = document.createElement("button");
            input.innerHTML = "In den Warenkorb";
            document.getElementById("becherDiv" + i)?.appendChild(input);
        }
    }
})(Aufgabe06 || (Aufgabe06 = {}));
//# sourceMappingURL=script.js.map
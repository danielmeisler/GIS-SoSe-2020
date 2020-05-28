"use strict";
var Aufgabe05;
(function (Aufgabe05) {
    for (let i = 0; i < Aufgabe05.waffel.length; i++) {
        let xDiv = document.createElement("div");
        xDiv.id = "divNr" + i;
        document.getElementById("cw")?.appendChild(xDiv);
        let xImg = document.createElement("img");
        xImg.src = Aufgabe05.waffel[i].bild;
        document.getElementById("divNr" + i)?.appendChild(xImg);
        let xH2 = document.createElement("h2");
        xH2.innerHTML = Aufgabe05.waffel[i].titel;
        document.getElementById("divNr" + i)?.appendChild(xH2);
        let xP = document.createElement("p");
        xP.innerHTML = Aufgabe05.waffel[i].text;
        document.getElementById("divNr" + i)?.appendChild(xP);
        let xH3 = document.createElement("h3");
        xH3.innerHTML = Aufgabe05.waffel[i].preis;
        document.getElementById("divNr" + i)?.appendChild(xH3);
        let xButton = document.createElement("button");
        xButton.innerHTML = "In den Warenkorb";
        document.getElementById("divNr" + i)?.appendChild(xButton);
    }
    for (let i = 0; i < Aufgabe05.becher.length; i++) {
        let xDiv = document.createElement("div");
        xDiv.id = "divNr2" + i;
        document.getElementById("cb")?.appendChild(xDiv);
        let xImg = document.createElement("img");
        xImg.src = Aufgabe05.becher[i].bild;
        document.getElementById("divNr2" + i)?.appendChild(xImg);
        let xH2 = document.createElement("h2");
        xH2.innerHTML = Aufgabe05.becher[i].titel;
        document.getElementById("divNr2" + i)?.appendChild(xH2);
        let xP = document.createElement("p");
        xP.innerHTML = Aufgabe05.becher[i].text;
        document.getElementById("divNr2" + i)?.appendChild(xP);
        let xH3 = document.createElement("h3");
        xH3.innerHTML = Aufgabe05.becher[i].preis;
        document.getElementById("divNr2" + i)?.appendChild(xH3);
        let input = document.createElement("button");
        input.innerHTML = "In den Warenkorb";
        document.getElementById("divNr2" + i)?.appendChild(input);
    }
})(Aufgabe05 || (Aufgabe05 = {}));
//# sourceMappingURL=script.js.map
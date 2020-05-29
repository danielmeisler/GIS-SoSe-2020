"use strict";
var Aufgabe05;
(function (Aufgabe05) {
    for (let i = 0; i < Aufgabe05.waffel.length; i++) {
        let xDiv = document.createElement("div");
        xDiv.id = "waffelDiv" + i;
        xDiv.classList.add("waffelClass");
        document.getElementById("cw")?.appendChild(xDiv);
        let xImg = document.createElement("img");
        xImg.src = Aufgabe05.waffel[i].bild;
        document.getElementById("waffelDiv" + i)?.appendChild(xImg);
        let xH2 = document.createElement("h2");
        xH2.innerHTML = Aufgabe05.waffel[i].titel;
        document.getElementById("waffelDiv" + i)?.appendChild(xH2);
        let xP = document.createElement("p");
        xP.innerHTML = Aufgabe05.waffel[i].text;
        document.getElementById("waffelDiv" + i)?.appendChild(xP);
        let xH3 = document.createElement("h3");
        xH3.innerHTML = Aufgabe05.waffel[i].preis;
        document.getElementById("waffelDiv" + i)?.appendChild(xH3);
        let xButton = document.createElement("button");
        xButton.innerHTML = "In den Warenkorb";
        document.getElementById("waffelDiv" + i)?.appendChild(xButton);
    }
    for (let i = 0; i < Aufgabe05.becher.length; i++) {
        let xDiv = document.createElement("div");
        xDiv.id = "becherDiv" + i;
        xDiv.classList.add("becherClass");
        document.getElementById("cb")?.appendChild(xDiv);
        let xImg = document.createElement("img");
        xImg.src = Aufgabe05.becher[i].bild;
        document.getElementById("becherDiv" + i)?.appendChild(xImg);
        let xH2 = document.createElement("h2");
        xH2.innerHTML = Aufgabe05.becher[i].titel;
        document.getElementById("becherDiv" + i)?.appendChild(xH2);
        let xP = document.createElement("p");
        xP.innerHTML = Aufgabe05.becher[i].text;
        document.getElementById("becherDiv" + i)?.appendChild(xP);
        let xH3 = document.createElement("h3");
        xH3.innerHTML = Aufgabe05.becher[i].preis;
        document.getElementById("becherDiv" + i)?.appendChild(xH3);
        let input = document.createElement("button");
        input.innerHTML = "In den Warenkorb";
        document.getElementById("becherDiv" + i)?.appendChild(input);
    }
})(Aufgabe05 || (Aufgabe05 = {}));
//# sourceMappingURL=script.js.map
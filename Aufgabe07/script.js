"use strict";
var Aufgabe07;
(function (Aufgabe07) {
    artikel();
    async function artikel() {
        await Aufgabe07.communicate("data.json");
        createContent();
    }
    Aufgabe07.artikel = artikel;
    function createContent() {
        let artikelDiv;
        let artikelClass;
        let artikelContainer;
        for (let i = 0; i < Aufgabe07.eissorte.length; i++) {
            if (Aufgabe07.eissorte[i].kategorie == 1) {
                artikelDiv = "waffelDiv";
                artikelClass = "waffelClass";
                artikelContainer = "conWaff";
            }
            else {
                artikelDiv = "becherDiv";
                artikelClass = "becherClass";
                artikelContainer = "conBech";
            }
            let xDiv = document.createElement("div");
            xDiv.id = artikelDiv + i;
            xDiv.classList.add(artikelClass);
            document.getElementById(artikelContainer)?.appendChild(xDiv);
            xDiv.setAttribute("artikelKat", i.toString());
            let xImg = document.createElement("img");
            xImg.src = Aufgabe07.eissorte[i].bild;
            xDiv.appendChild(xImg);
            let xH2 = document.createElement("h2");
            xH2.innerHTML = Aufgabe07.eissorte[i].titel;
            xDiv.appendChild(xH2);
            let xP = document.createElement("p");
            xP.innerHTML = Aufgabe07.eissorte[i].text;
            xDiv.appendChild(xP);
            let xH3 = document.createElement("h3");
            xH3.innerHTML = "Preis: " + Aufgabe07.eissorte[i].preis + "0 €";
            xDiv.appendChild(xH3);
            let xButton = document.createElement("button");
            xButton.innerHTML = "In den Warenkorb";
            xButton.addEventListener("click", handleWarenkorb);
            xDiv.appendChild(xButton);
        }
    }
    Aufgabe07.createContent = createContent;
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
    let j = 0;
    let artikelZaehler = 0;
    let blasenDiv = document.createElement("div");
    blasenDiv.id = "kaufBlase";
    function handleWarenkorb(_event) {
        if (artikelZaehler >= 0) {
            document.getElementById("warenkorb")?.appendChild(blasenDiv);
        }
        if (localStorage.artikelZaehler) {
            localStorage.artikelZaehler = Number(localStorage.artikelZaehler) + 1;
        }
        else {
            localStorage.artikelZaehler = 1;
        }
        blasenDiv.innerHTML = localStorage.artikelZaehler + "";
        // Beim Befehl drunter Tipp von Samuel Kasper dem Ehrenmann bekommen, weil war lost.
        let targetZaehler = _event.currentTarget.parentElement.getAttribute("artikelKat");
        localStorage.setItem("bildString" + j, Aufgabe07.eissorte[parseInt(targetZaehler)].bild + "");
        localStorage.setItem("titelString" + j, Aufgabe07.eissorte[parseInt(targetZaehler)].titel + "");
        localStorage.setItem("textString" + j, Aufgabe07.eissorte[parseInt(targetZaehler)].text + "");
        localStorage.setItem("preisString" + j, Aufgabe07.eissorte[parseInt(targetZaehler)].preis + "");
        j++;
    }
    Aufgabe07.handleWarenkorb = handleWarenkorb;
})(Aufgabe07 || (Aufgabe07 = {}));
//# sourceMappingURL=script.js.map
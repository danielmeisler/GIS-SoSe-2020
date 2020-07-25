"use strict";
var Eisdiele;
(function (Eisdiele) {
    artikel();
    async function artikel() {
        await Eisdiele.communicate("data.json");
        createEiskugeln();
        createBasis();
        createTopping();
        createButtons();
        preisBerechnung();
    }
    Eisdiele.artikel = artikel;
    let globalEiskugel = 0;
    let globalBasis = 15;
    let globalTopping = 12;
    let idToppings;
    function createTopping() {
        let xDiv = document.createElement("div");
        xDiv.id = "showTopping" + globalTopping;
        xDiv.classList.add("showcaseToppingClass");
        document.getElementById("showcase")?.appendChild(xDiv);
        xDiv.setAttribute("idToppingsAttribut", globalTopping.toString());
        idToppings = xDiv.getAttribute("idToppingsAttribut");
        let xImg = document.createElement("img");
        xImg.src = Eisdiele.eiskugelnArray[globalTopping].source;
        xDiv.appendChild(xImg);
        let xName = document.createElement("h3");
        xName.id = "showToppingName" + globalTopping;
        xName.innerHTML = "Topping: " + Eisdiele.eiskugelnArray[globalTopping].name;
        document.getElementById("rechnungID")?.appendChild(xName);
        let xPreis = document.createElement("h4");
        xPreis.id = "showToppingPrice" + globalTopping;
        xPreis.innerHTML = "Preis: " + Eisdiele.eiskugelnArray[globalTopping].price.toFixed(2).toString() + "€";
        document.getElementById("rechnungID")?.appendChild(xPreis);
    }
    let idEiskugeln;
    function createEiskugeln() {
        let xDiv = document.createElement("div");
        xDiv.id = "showEiskugeln" + globalEiskugel;
        xDiv.classList.add("showcaseEiskugelnClass");
        document.getElementById("showcase")?.appendChild(xDiv);
        xDiv.setAttribute("idAttribut", globalEiskugel.toString());
        idEiskugeln = xDiv.getAttribute("idAttribut");
        let xImg = document.createElement("img");
        xImg.src = Eisdiele.eiskugelnArray[globalEiskugel].source;
        xDiv.appendChild(xImg);
        let xName = document.createElement("h3");
        xName.id = "showEiskugelnName" + globalEiskugel;
        xName.innerHTML = "Eissorte: " + Eisdiele.eiskugelnArray[globalEiskugel].name;
        document.getElementById("rechnungID")?.appendChild(xName);
        let xPreis = document.createElement("h4");
        xPreis.id = "showEiskugelnPrice" + globalEiskugel;
        xPreis.innerHTML = "Preis: " + Eisdiele.eiskugelnArray[globalEiskugel].price.toFixed(2).toString() + "€";
        document.getElementById("rechnungID")?.appendChild(xPreis);
    }
    let idBasis;
    function createBasis() {
        let xDiv = document.createElement("div");
        xDiv.id = "showBasis" + globalBasis;
        xDiv.classList.add("showcaseBasisClass");
        document.getElementById("showcase")?.appendChild(xDiv);
        xDiv.setAttribute("idBasisAttribut", globalBasis.toString());
        idBasis = xDiv.getAttribute("idBasisAttribut");
        let xImg = document.createElement("img");
        xImg.src = Eisdiele.eiskugelnArray[globalBasis].source;
        xDiv.appendChild(xImg);
        let xName = document.createElement("h3");
        xName.id = "showBasisName" + globalBasis;
        xName.innerHTML = "Basis: " + Eisdiele.eiskugelnArray[globalBasis].name;
        document.getElementById("rechnungID")?.appendChild(xName);
        let xPreis = document.createElement("h4");
        xPreis.id = "showBasisPrice" + globalBasis;
        xPreis.innerHTML = "Preis: " + Eisdiele.eiskugelnArray[globalBasis].price.toFixed(2).toString() + "€";
        document.getElementById("rechnungID")?.appendChild(xPreis);
    }
    function createButtons() {
        for (let i = 0; i < 3; i++) {
            let xLeftButtons = document.createElement("button");
            xLeftButtons.id = "leftButtons" + i;
            xLeftButtons.classList.add("buttonLeftClass");
            xLeftButtons.innerHTML = "Zurueck";
            xLeftButtons.setAttribute("kategorieShowcase", i.toString());
            xLeftButtons.addEventListener("click", handleButtons);
            document.getElementById("leftButtons")?.appendChild(xLeftButtons);
            let xRightButtons = document.createElement("button");
            xRightButtons.id = "rightButtons" + i;
            xRightButtons.classList.add("buttonRightClass");
            xRightButtons.innerHTML = "Weiter";
            xRightButtons.addEventListener("click", handleButtons);
            document.getElementById("rightButtons")?.appendChild(xRightButtons);
        }
    }
    function handleButtons(_event) {
        document.getElementById("summenID")?.remove();
        if (globalTopping >= 12 && globalTopping <= 14) {
            let xDiv = document.createElement("div");
            xDiv.classList.add("showcaseToppingClass");
            document.getElementById("showTopping" + idToppings)?.remove();
            document.getElementById("showToppingName" + idToppings)?.remove();
            document.getElementById("showToppingPrice" + idToppings)?.remove();
            if (_event.currentTarget.getAttribute("id") == "leftButtons0") {
                if (globalTopping > 12 && globalTopping <= 14) {
                    globalTopping--;
                }
                else if (globalTopping == 12) {
                    globalTopping = 14;
                }
            }
            if (_event.currentTarget.getAttribute("id") == "rightButtons0") {
                if (globalTopping >= 12 && globalTopping < 14) {
                    globalTopping++;
                }
                else if (globalTopping == 14) {
                    globalTopping = 12;
                }
            }
            createTopping();
        }
        if (globalEiskugel >= 0 && globalEiskugel <= 11) {
            let xDiv = document.createElement("div");
            xDiv.classList.add("showcaseEiskugelnClass");
            document.getElementById("showEiskugeln" + idEiskugeln)?.remove();
            document.getElementById("showEiskugelnName" + idEiskugeln)?.remove();
            document.getElementById("showEiskugelnPrice" + idEiskugeln)?.remove();
            if (_event.currentTarget.getAttribute("id") == "leftButtons1") {
                if (globalEiskugel > 0 && globalEiskugel <= 11) {
                    globalEiskugel--;
                }
                else if (globalEiskugel == 0) {
                    globalEiskugel = 11;
                }
            }
            if (_event.currentTarget.getAttribute("id") == "rightButtons1") {
                if (globalEiskugel >= 0 && globalEiskugel < 11) {
                    globalEiskugel++;
                }
                else if (globalEiskugel == 11) {
                    globalEiskugel = 0;
                }
            }
            createEiskugeln();
        }
        if (globalBasis >= 15 && globalBasis <= 16) {
            let xDiv = document.createElement("div");
            xDiv.classList.add("showcaseBasisClass");
            document.getElementById("showBasis" + idBasis)?.remove();
            document.getElementById("showBasisName" + idBasis)?.remove();
            document.getElementById("showBasisPrice" + idBasis)?.remove();
            if (_event.currentTarget.getAttribute("id") == "leftButtons2") {
                if (globalBasis > 15 && globalBasis <= 16) {
                    globalBasis--;
                }
                else if (globalBasis == 15) {
                    globalBasis = 16;
                }
            }
            if (_event.currentTarget.getAttribute("id") == "rightButtons2") {
                if (globalBasis >= 15 && globalBasis < 16) {
                    globalBasis++;
                }
                else if (globalBasis == 16) {
                    globalBasis = 15;
                }
            }
            createBasis();
        }
        preisBerechnung();
    }
    function preisBerechnung() {
        let summe;
        summe = Eisdiele.eiskugelnArray[globalBasis].price + Eisdiele.eiskugelnArray[globalEiskugel].price + Eisdiele.eiskugelnArray[globalTopping].price;
        let xSumme = document.createElement("h3");
        xSumme.id = "summenID";
        xSumme.innerHTML = "Summe: " + summe.toFixed(2) + "€";
        document.getElementById("summeDIV")?.appendChild(xSumme);
        localStorage.setItem("summe", summe.toFixed(2));
    }
    let mainpageButton = document.createElement("button");
    mainpageButton.id = "shopButtonID";
    mainpageButton.innerHTML = "In Warenkorb legen";
    mainpageButton.addEventListener("click", handleAddWarenkorb);
    document.getElementById("shopButton")?.appendChild(mainpageButton);
    function handleAddWarenkorb(_event) {
        let rechnungsArray = [];
        let summenArray = [];
        if (localStorage.zaehler) {
            localStorage.zaehler = Number(localStorage.zaehler) + 1;
        }
        else {
            localStorage.zaehler = 1;
        }
        rechnungsArray[localStorage.zaehler] = document.getElementById("rechnungID")?.innerHTML;
        localStorage.setItem("rechnung" + localStorage.zaehler, rechnungsArray[localStorage.zaehler]);
        summenArray[localStorage.zaehler] = localStorage.getItem("summe");
        localStorage.setItem("summenArray" + localStorage.zaehler, summenArray[localStorage.zaehler]);
        localStorage.setItem("globalEiskugel", globalEiskugel.toString());
        localStorage.setItem("globalBasis", globalBasis.toString());
        localStorage.setItem("globalTopping", globalTopping.toString());
    }
    Eisdiele.handleAddWarenkorb = handleAddWarenkorb;
})(Eisdiele || (Eisdiele = {}));
//# sourceMappingURL=mainpage_script.js.map
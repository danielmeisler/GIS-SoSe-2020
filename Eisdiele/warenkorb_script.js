"use strict";
var Eisdiele;
(function (Eisdiele) {
    let entferneAllesButton = document.createElement("button");
    entferneAllesButton.id = "allesEntfernen";
    entferneAllesButton.innerHTML = "Alles entfernen";
    entferneAllesButton.addEventListener("click", handleAllesEntfernen);
    document.getElementById("deleteButtons")?.appendChild(entferneAllesButton);
    let warenkorbButton = document.createElement("button");
    warenkorbButton.id = "bestellButton";
    warenkorbButton.innerHTML = "Zahlungspflichtig bestellen";
    warenkorbButton.addEventListener("click", handleWarenkorb);
    document.getElementById("orderButton")?.appendChild(warenkorbButton);
    async function handleWarenkorb() {
        await Eisdiele.communicate("data.json");
        handleBestellung();
    }
    Eisdiele.handleWarenkorb = handleWarenkorb;
    bestellungenAnzeigen();
    function bestellungenAnzeigen() {
        let bestellungsArray = [];
        if (localStorage.length != 0) {
            for (let i = 1; i <= localStorage.zaehler; i++) {
                bestellungsArray[i] = localStorage.getItem("rechnung" + i);
                let xDiv = document.createElement("div");
                xDiv.id = "warenkorbBestellung" + i;
                xDiv.classList.add("orderClass");
                xDiv.innerHTML = bestellungsArray[i];
                document.getElementById("ordersID")?.appendChild(xDiv);
                xDiv.setAttribute("aktuellerZaehler", i.toString());
                let xButton = document.createElement("button");
                xButton.id = "bestellungEntfernen" + i;
                xButton.innerHTML = "Bestellung löschen";
                xButton.addEventListener("click", handleBestellungEntfernen);
                xDiv.appendChild(xButton);
                xDiv.setAttribute("test" + i, bestellungsArray[i]);
            }
            summeWarenkorb();
        }
        else {
            document.getElementById("ordersID")?.remove();
            document.getElementById("allesEntfernen")?.remove();
            document.getElementById("summeWarenkorbID")?.remove();
        }
    }
    function summeWarenkorb() {
        let summe = 0;
        let temp = 0;
        for (let i = 1; i <= localStorage.zaehler; i++) {
            temp = parseFloat(localStorage.getItem("summenArray" + i));
            summe = summe + temp;
        }
        localStorage.setItem("summe", summe.toString());
        let xSumme = document.createElement("h3");
        xSumme.id = "summeWarenkorbID";
        xSumme.innerHTML = "Summe: " + summe.toFixed(2) + "€";
        document.getElementById("summeWarenkorb")?.appendChild(xSumme);
    }
    function handleAllesEntfernen(_event) {
        localStorage.clear();
        document.getElementById("summeWarenkorbID")?.remove();
        bestellungenAnzeigen();
    }
    function handleBestellungEntfernen(_event) {
        (_event.currentTarget.parentElement).remove();
        let summe = parseFloat(localStorage.getItem("summe"));
        let zaehler = _event.currentTarget.parentElement.getAttribute("aktuellerZaehler");
        let temp = parseFloat(localStorage.getItem("summenArray" + zaehler));
        summe = summe - temp;
        document.getElementById("summeWarenkorbID").innerHTML = "Gesamtwert: " + summe.toFixed(2) + "€";
        localStorage.setItem("summe", summe.toString());
        localStorage.zaehler--;
    }
    async function handleBestellung() {
        let formData = new FormData(document.forms[0]);
        let url = "https://gissose2020-danielmeisler.herokuapp.com";
        //let url: string = "http://localhost:8100";
        url += "/add";
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        document.getElementById("orderData")?.reset();
        let eissorteString = Eisdiele.eiskugelnArray[parseFloat(localStorage.getItem("globalEiskugel"))].name;
        eissorteString = eissorteString.replace(/\s/g, "_");
        let summenString = localStorage.getItem("summe");
        summenString = summenString.replace(".", "-");
        url = url + "&" + "eissorte=" + eissorteString + "&basis=" + Eisdiele.eiskugelnArray[parseFloat(localStorage.getItem("globalBasis"))].name
            + "&topping=" + Eisdiele.eiskugelnArray[parseFloat(localStorage.getItem("globalTopping"))].name + "&summe=" + summenString;
        await fetch(url);
    }
    Eisdiele.handleBestellung = handleBestellung;
})(Eisdiele || (Eisdiele = {}));
//# sourceMappingURL=warenkorb_script.js.map
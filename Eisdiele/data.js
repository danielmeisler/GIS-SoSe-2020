"use strict";
var Eisdiele;
(function (Eisdiele) {
    async function communicate(_url) {
        let response = await fetch(_url);
        let respJSON = await response.json();
        Eisdiele.eiskugelnArray = JSON.parse(JSON.stringify(respJSON));
    }
    Eisdiele.communicate = communicate;
    async function communicateBestellungen(_url) {
        let response = await fetch(_url);
        let respJSON = await response.json();
        if (respJSON != "[]") {
            Eisdiele.bestellArray = JSON.parse(JSON.stringify(respJSON));
        }
    }
    Eisdiele.communicateBestellungen = communicateBestellungen;
})(Eisdiele || (Eisdiele = {}));
//# sourceMappingURL=data.js.map
"use strict";
var Aufgabe07;
(function (Aufgabe07) {
    async function communicate(_url) {
        let response = await fetch(_url);
        let respJSON = await response.json();
        Aufgabe07.eissorte = JSON.parse(JSON.stringify(respJSON));
    }
    Aufgabe07.communicate = communicate;
})(Aufgabe07 || (Aufgabe07 = {}));
//# sourceMappingURL=data.js.map
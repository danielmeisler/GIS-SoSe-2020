"use strict";
var Aufgabe09;
(function (Aufgabe09) {
    document.getElementById("buttonHTML")?.addEventListener("click", communicateHTML);
    document.getElementById("buttonJSON")?.addEventListener("click", communicateJSON);
    async function communicateHTML() {
        let formData = new FormData(document.forms[0]);
        let url = "https://gissose2020-danielmeisler.herokuapp.com";
        url += "/html";
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        let response = await fetch(url, { method: "get" });
        let response2 = await response.text();
        document.getElementById("responseDIV").innerHTML = response2;
    }
    async function communicateJSON() {
        let formData = new FormData(document.forms[0]);
        let url = "https://gissose2020-danielmeisler.herokuapp.com";
        url += "/json";
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        let response = await fetch(url, { method: "get" });
        let response2 = await response.text();
        let jsonString = JSON.parse(response2);
        console.log(jsonString);
    }
})(Aufgabe09 || (Aufgabe09 = {}));
//# sourceMappingURL=skript.js.map
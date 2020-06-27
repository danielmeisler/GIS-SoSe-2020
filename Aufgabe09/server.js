"use strict";
var Aufgabe09;
(function (Aufgabe09) {
    document.getElementById("buttonHTML")?.addEventListener("click", handleButtonHTML);
    document.getElementById("buttonJSON")?.addEventListener("click", handleButtonJSON);
    function handleButtonHTML() {
        let formData = new FormData(document.forms[0]);
        let url = "https://gissose2020-danielmeisler.herokuapp.com/";
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        communicateHTML(url);
    }
    function handleButtonJSON() {
        let formData = new FormData(document.forms[0]);
        let url = "https://gissose2020-danielmeisler.herokuapp.com/";
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        communicateJSON(url);
    }
    async function communicateHTML(_url) {
        let response = await fetch(_url, { method: "get" });
        let response2 = await response.text();
        let arraySplit = response2.split("###");
        document.getElementById("responseDIV").innerHTML = arraySplit[0];
    }
    async function communicateJSON(_url) {
        let response = await fetch(_url, { method: "get" });
        let response2 = await response.text();
        let arraySplit = response2.split("###");
        let jsonString = JSON.parse(arraySplit[1]);
        console.log(jsonString);
    }
})(Aufgabe09 || (Aufgabe09 = {}));
//# sourceMappingURL=server.js.map
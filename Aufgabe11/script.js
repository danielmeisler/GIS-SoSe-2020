"use strict";
var Aufgabe11;
(function (Aufgabe11) {
    document.getElementById("buttonAdd")?.addEventListener("click", communicateAdd);
    document.getElementById("buttonShow")?.addEventListener("click", communicateShow);
    async function communicateAdd() {
        let formData = new FormData(document.forms[0]);
        //let url: string = "https://gissose2020-danielmeisler.herokuapp.com";
        let url = "http://localhost:8100";
        url += "/add";
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        document.getElementById("form")?.reset();
        await fetch(url);
    }
    async function communicateShow() {
        //let url: string = "https://gissose2020-danielmeisler.herokuapp.com";
        let url = "http://localhost:8100";
        url += "/show";
        let response = await fetch(url, { method: "get" });
        let response2 = await response.json();
        let jsonString = JSON.parse(response2);
        document.getElementById("responseDIV").innerHTML = jsonString;
    }
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=script.js.map
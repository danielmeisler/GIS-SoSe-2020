"use strict";
var Aufgabe11;
(function (Aufgabe11) {
    document.getElementById("buttonAdd")?.addEventListener("click", communicateAdd);
    document.getElementById("buttonShow")?.addEventListener("click", communicateShow);
    document.getElementById("buttonDelete")?.addEventListener("click", communicateDelete);
    document.getElementById("buttonDeleteAll")?.addEventListener("click", communicateDeleteAll);
    async function communicateAdd() {
        let formData = new FormData(document.forms[0]);
        let url = "https://gissose2020-danielmeisler.herokuapp.com";
        //let url: string = "http://localhost:8100";
        url += "/add";
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        document.getElementById("form")?.reset();
        await fetch(url);
    }
    async function communicateShow() {
        let url = "https://gissose2020-danielmeisler.herokuapp.com";
        //let url: string = "http://localhost:8100";
        url += "/show";
        let response = await fetch(url, { method: "get" });
        let response2 = await response.text();
        document.getElementById("responseDIV").innerHTML = response2;
    }
    async function communicateDelete() {
        let url = "https://gissose2020-danielmeisler.herokuapp.com";
        //let url: string = "http://localhost:8100";
        url += "/delete";
        await fetch(url);
    }
    async function communicateDeleteAll() {
        let url = "https://gissose2020-danielmeisler.herokuapp.com";
        //let url: string = "http://localhost:8100";
        url += "/deleteAll";
        await fetch(url);
    }
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=script.js.map
namespace Aufgabe11 {

    document.getElementById("buttonAdd")?.addEventListener("click", communicateAdd);
    document.getElementById("buttonShow")?.addEventListener("click", communicateShow);
    document.getElementById("buttonDelete")?.addEventListener("click", communicateDelete);
    document.getElementById("buttonDeleteAll")?.addEventListener("click", communicateDeleteAll);

    async function communicateAdd(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]); 
        let url: string = "https://gissose2020-danielmeisler.herokuapp.com";
        //let url: string = "http://localhost:8100";
        url += "/add";
        let query: URLSearchParams = new URLSearchParams(<any> formData);
        url = url + "?" + query.toString();
        (<HTMLFormElement>document.getElementById("form"))?.reset();
        await fetch(url);
      }

    async function communicateShow(): Promise<void> {
        let url: string = "https://gissose2020-danielmeisler.herokuapp.com";
        //let url: string = "http://localhost:8100";
        url += "/show";
        let response: Response = await fetch(url, { method: "get" });
        let response2: string = await response.text(); 
        (<HTMLElement>document.getElementById("responseDIV")).innerHTML  = response2;
      }

    async function communicateDelete(): Promise<void> {
        let url: string = "https://gissose2020-danielmeisler.herokuapp.com";
        //let url: string = "http://localhost:8100";
        url += "/delete";
        await fetch(url);
    }

    async function communicateDeleteAll(): Promise<void> {
        let url: string = "https://gissose2020-danielmeisler.herokuapp.com";
        //let url: string = "http://localhost:8100";
        url += "/deleteAll";
        await fetch(url);
    }
}
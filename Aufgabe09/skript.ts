namespace Aufgabe09 {

    document.getElementById("buttonHTML")?.addEventListener("click", communicateHTML);
    document.getElementById("buttonJSON")?.addEventListener("click", communicateJSON);

    async function communicateHTML(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]); 
        let url: string = "https://gissose2020-danielmeisler.herokuapp.com";
        //let url: string = "http://localhost:8100";
        url += "/html";
        let query: URLSearchParams = new URLSearchParams(<any> formData);
        url = url + "?" + query.toString();

        let response: Response = await fetch(url, { method: "get" });
        let response2: string = await response.text();
        (<HTMLElement>document.getElementById("responseDIV")).innerHTML  = response2;
      }

    async function communicateJSON(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://gissose2020-danielmeisler.herokuapp.com";
        //let url: string = "http://localhost:8100";
        url += "/json";
        let query: URLSearchParams = new URLSearchParams(<any> formData);
        url = url + "?" + query.toString();

        let response: Response = await fetch(url, { method: "get" });
        let response2: string = await response.json(); 
        console.log(response2);
      }

}
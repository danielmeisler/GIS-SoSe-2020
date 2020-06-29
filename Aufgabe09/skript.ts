namespace Aufgabe09 {

    document.getElementById("buttonHTML")?.addEventListener("click", handleButtonHTML);
    document.getElementById("buttonJSON")?.addEventListener("click", handleButtonJSON);

    function handleButtonHTML(): void {
        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://gissose2020-danielmeisler.herokuapp.com/";
        let query: URLSearchParams = new URLSearchParams(<any> formData);
        url = url + "?" + query.toString();
        communicateHTML(url);
    } 

    function handleButtonJSON(): void {
        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://gissose2020-danielmeisler.herokuapp.com/";
        let query: URLSearchParams = new URLSearchParams(<any> formData);
        url = url + "?" + query.toString();
        communicateJSON(url);
    } 

    async function communicateHTML(_url: RequestInfo): Promise<void> {
        let response: Response = await fetch(_url, { method: "get" });
        let response2: string = await response.text();
        let arraySplit: string[] = response2.split("###");
        (<HTMLElement>document.getElementById("responseDIV")).innerHTML  = arraySplit[0];
      }

    async function communicateJSON(_url: RequestInfo): Promise<void> {
        let response: Response = await fetch(_url, { method: "get" });
        let response2: string = await response.text();
        let arraySplit: string[] = response2.split("###");
        let jsonString: string = JSON.parse(arraySplit[1]);
        console.log(jsonString);
      }

}
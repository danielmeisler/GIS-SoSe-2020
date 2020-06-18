namespace Aufgabe08 {

    document.getElementById("buttonID")?.addEventListener("click", handleButton);

    function handleButton(): void {
        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://gissose2020-danielmeisler.herokuapp.com";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "?" + query.toString();
        communicate(url);
    } 

    async function communicate(_url: RequestInfo): Promise<void> {
        let response: Response = await fetch(_url, { method: "get" });
        let response2: String = await response.text();
        console.log("Response", response2);
      }

}
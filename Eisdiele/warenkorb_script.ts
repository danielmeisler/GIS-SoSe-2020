namespace Eisdiele {

    let entferneAllesButton: HTMLButtonElement = document.createElement("button");
    entferneAllesButton.id = "allesEntfernen";
    entferneAllesButton.innerHTML = "Alles entfernen";
    entferneAllesButton.addEventListener("click", handleAllesEntfernen);
    document.getElementById("deleteButtons")?.appendChild(entferneAllesButton);

    let warenkorbButton: HTMLButtonElement = document.createElement("button");
    warenkorbButton.id = "bestellButton";
    warenkorbButton.innerHTML = "Zahlungspflichtig bestellen";
    warenkorbButton.addEventListener("click", handleWarenkorb);
    document.getElementById("orderButton")?.appendChild(warenkorbButton);

    export async function handleWarenkorb(): Promise<void> {
        await communicate("data.json");
        handleBestellung();
    }

    bestellungenAnzeigen();
    function bestellungenAnzeigen(): void {
        
        let bestellungsArray: string[] = [];

        if (localStorage.length != 0) {

            for (let i: number = 1; i <= localStorage.zaehler; i++) {
                bestellungsArray[i] = localStorage.getItem("rechnung" + i)!;

                let xDiv: HTMLDivElement = document.createElement("div");
                xDiv.id = "warenkorbBestellung" + i;
                xDiv.classList.add("orderClass");
                xDiv.innerHTML = bestellungsArray[i];
                document.getElementById("ordersID")?.appendChild(xDiv);    
                xDiv.setAttribute("aktuellerZaehler", i.toString());
                
                let xButton: HTMLButtonElement = document.createElement("button");
                xButton.id = "bestellungEntfernen" + i;
                xButton.innerHTML = "Bestellung löschen";
                xButton.addEventListener("click", handleBestellungEntfernen);
                xDiv.appendChild(xButton);

                xDiv.setAttribute("test" + i, bestellungsArray[i]);
            }
            summeWarenkorb();

        } else {
            document.getElementById("ordersID")?.remove();
            document.getElementById("allesEntfernen")?.remove();
            document.getElementById("summeWarenkorbID")?.remove();
        }
    }
    
    function summeWarenkorb(): void {
        let summe: number = 0;
        let temp: number = 0;
        for (let i: number = 1; i <= localStorage.zaehler; i++) {
            temp = parseFloat(localStorage.getItem("summenArray" + i )!);
            summe = summe + temp;
        }
        
        localStorage.setItem("summe", summe.toString());

        let xSumme: HTMLElement = document.createElement("h3");
        xSumme.id = "summeWarenkorbID";
        xSumme.innerHTML = "Summe: " + summe.toFixed(2) + "€";
        document.getElementById("summeWarenkorb")?.appendChild(xSumme);
    }

    function handleAllesEntfernen(_event: Event): void {
        localStorage.clear();
        document.getElementById("summeWarenkorbID")?.remove();
        bestellungenAnzeigen();
    }

    function handleBestellungEntfernen(_event: Event): void {
        ((<HTMLDivElement>_event.currentTarget).parentElement!).remove();

        let summe: number = parseFloat(localStorage.getItem("summe")!);
        let zaehler: string = (<HTMLDivElement>(<HTMLElement>_event.currentTarget).parentElement).getAttribute("aktuellerZaehler")!;
        let temp: number = parseFloat(localStorage.getItem("summenArray" + zaehler )!);
        summe = summe - temp;
        (<HTMLElement> document.getElementById("summeWarenkorbID")).innerHTML = "Gesamtwert: " + summe.toFixed(2)  + "€";
        localStorage.setItem("summe", summe.toString());
        localStorage.zaehler--;
    }

    export async function handleBestellung(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]); 
        let url: string = "https://gissose2020-danielmeisler.herokuapp.com";
        //let url: string = "http://localhost:8100";
        url += "/add";
        let query: URLSearchParams = new URLSearchParams(<any> formData);
        url = url + "?" + query.toString();
        (<HTMLFormElement>document.getElementById("orderData"))?.reset();

        let eissorteString: string = eiskugelnArray[parseFloat(localStorage.getItem("globalEiskugel")!)].name;
        eissorteString = eissorteString.replace(/\s/g, "_");

        let summenString: string = localStorage.getItem("summe")!;
        summenString = summenString.replace(".", "-");

        url = url + "&" + "eissorte=" + eissorteString + "&basis=" + eiskugelnArray[parseFloat(localStorage.getItem("globalBasis")!)].name
                + "&topping=" + eiskugelnArray[parseFloat(localStorage.getItem("globalTopping")!)].name + "&summe=" + summenString;

        await fetch(url);
    }
}
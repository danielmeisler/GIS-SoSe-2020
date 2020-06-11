namespace Aufgabe07 {

    let preisTemp: number = 0;
    let summe: number = 0;

    for (let i: number = 0; i < localStorage.artikelZaehler; i++) {
    
        let xDiv: HTMLDivElement = document.createElement("div");
        xDiv.id = "warenkorbID" + i;
        xDiv.classList.add("warenkorbClass");
        document.getElementById("conWarenkorb")?.appendChild(xDiv);

        let xImg: HTMLImageElement = document.createElement("img");
        xImg.src = <string> localStorage.getItem("bildString" + i);
        xDiv.appendChild(xImg);
            
        let xH2: HTMLElement = document.createElement("h2");
        xH2.innerHTML = <string> localStorage.getItem("titelString" + i);
        xDiv.appendChild(xH2);

        let xP: HTMLParagraphElement = document.createElement("p");
        xP.innerHTML = <string> localStorage.getItem("textString" + i);
        xDiv.appendChild(xP);

        let xH3: HTMLElement = document.createElement("h3");
        xH3.innerHTML = "Preis: " + localStorage.getItem("preisString" + i)  + "0 €";
        preisTemp = parseFloat(localStorage.getItem("preisString" + i)!);
        summe = summe + preisTemp;
        xDiv.setAttribute("preis", preisTemp + "");
        xDiv.appendChild(xH3);

        let xButton: HTMLButtonElement = document.createElement("button");
        xButton.innerHTML = "Löschen";
        xButton.addEventListener("click", handleDeleteContent);
        xDiv.appendChild(xButton);
    }

    let xSumme: HTMLElement = document.createElement("h2");
    xSumme.id = "summeID";
    xSumme.innerHTML = "Gesamtwert: " + summe.toFixed(2) + "€";
    document.getElementById("gesamtwertID")?.appendChild(xSumme);

    let xDelete: HTMLButtonElement = document.createElement("button");
    xDelete.id = "deleteButtonID";
    xDelete.innerHTML = "Alle Artikel entfernen";
    xDelete.addEventListener("click", handleDelete);
    document.getElementById("deleteButton")?.appendChild(xDelete);

    function handleDelete(_event: Event): void {
        document.getElementById("conWarenkorb")?.remove();
        localStorage.clear(); 
        xSumme.innerHTML = "Gesamtwert: 0 €";
    }

    function handleDeleteContent(_event: Event): void {
        ((<HTMLDivElement>_event.currentTarget).parentElement!).remove();
        let temp: string = (<HTMLDivElement>(<HTMLElement>_event.currentTarget).parentElement).getAttribute("preis")!;
        summe = summe - parseFloat(temp);
        (<HTMLElement> document.getElementById("summeID")).innerHTML = "Gesamtwert: " + summe.toFixed(2)  + "€";
    }
}
namespace Aufgabe06 {

    let waffelPreis: number = 0;
    let becherPreis: number = 0;

    for (let i: number = 0; i < eissorte.length; i++) {

        if (eissorte[i].kategorie == 1) {

            let xDiv: HTMLDivElement = document.createElement("div");
            xDiv.id = "waffelDiv" + i;
            xDiv.classList.add("waffelClass");
            document.getElementById("conWaff")?.appendChild(xDiv);
            xDiv.setAttribute("waffKat", i.toString());

            let xImg: HTMLImageElement = document.createElement("img");
            xImg.src = eissorte[i].bild;
            xDiv.appendChild(xImg);

            let xH2: HTMLElement = document.createElement("h2");
            xH2.innerHTML = eissorte[i].titel;
            xDiv.appendChild(xH2);

            let xP: HTMLParagraphElement = document.createElement("p");
            xP.innerHTML = eissorte[i].text;
            xDiv.appendChild(xP);

            let xH3: HTMLElement = document.createElement("h3");
            xH3.innerHTML = "Preis: " + eissorte[i].preis + "0 €";
            waffelPreis = eissorte[i].preis;
            xDiv.appendChild(xH3);

            let xButton: HTMLButtonElement = document.createElement("button");
            xButton.innerHTML = "In den Warenkorb";
            xButton.addEventListener("click", handleWarenkorb);
            xDiv.appendChild(xButton);
        }

        if (eissorte[i].kategorie == 2) {
           
            let xDiv: HTMLDivElement = document.createElement("div");
            xDiv.id = "becherDiv" + i;
            xDiv.classList.add("becherClass");
            document.getElementById("conBech")?.appendChild(xDiv);
            xDiv.setAttribute("bechKat", i.toString());

            let xImg: HTMLImageElement = document.createElement("img");
            xImg.src = eissorte[i].bild;
            xDiv.appendChild(xImg);

            let xH2: HTMLElement = document.createElement("h2");
            xH2.innerHTML = eissorte[i].titel;
            xDiv.appendChild(xH2);

            let xP: HTMLParagraphElement = document.createElement("p");
            xP.innerHTML = eissorte[i].text;
            xDiv.appendChild(xP);

            let xH3: HTMLElement = document.createElement("h3");
            xH3.innerHTML = "Preis: " + eissorte[i].preis + "0 €";
            becherPreis = eissorte[i].preis;
            xDiv.appendChild(xH3);

            let xButton: HTMLButtonElement = document.createElement("button");
            xButton.innerHTML = "In den Warenkorb";
            xButton.addEventListener("click", handleWarenkorb);
            xDiv.appendChild(xButton);
        }
        
    }
    
    let ergebnis: number = 0;
    let temp: number = 0;
    let artikelZaehler: number = 0;
    let blasenDiv: HTMLDivElement = document.createElement("div");

    function handleWarenkorb(_event: Event): void {

        if (artikelZaehler > 0) {
            document.getElementById("kaufBlase")?.appendChild(blasenDiv);
        }

        artikelZaehler++;
        blasenDiv.innerHTML = artikelZaehler + "";

        if ( (<HTMLDivElement>_event.currentTarget).parentElement?.getAttribute("waffKat") ) {
            ergebnis = temp + waffelPreis;
            temp = ergebnis;
        } else if ((<HTMLDivElement>_event.currentTarget).parentElement?.getAttribute("becherKat")) {
            ergebnis = temp + becherPreis;
            temp = ergebnis;
        }
        console.log("Summe: " + ergebnis.toFixed(2) + "€");
    }

    let xWaffelKategorie: HTMLAnchorElement = document.createElement("a");
    xWaffelKategorie.id = "waffButt";
    xWaffelKategorie.innerHTML = "Waffeleis";
    xWaffelKategorie.addEventListener("click", handleKategorie);
    document.getElementById("waffelButton")?.appendChild(xWaffelKategorie);

    let xBecherKategorie: HTMLAnchorElement = document.createElement("a");
    xBecherKategorie.id = "bechButt";
    xBecherKategorie.innerHTML = "Bechereis";
    xBecherKategorie.addEventListener("click", handleKategorie);
    document.getElementById("becherButton")?.appendChild(xBecherKategorie);

    function handleKategorie(_event: Event): void {

        if ((<HTMLDivElement>_event.currentTarget).getAttribute("id") == "waffButt") {
            console.log("Kategorie1");
            (<HTMLDivElement>document.getElementById("eisBecherID")).style.display = "none";
            (<HTMLDivElement>document.getElementById("eisWaffelID")).style.display = "block";
        } else if ((<HTMLDivElement>_event.currentTarget).getAttribute("id") == "bechButt") {
            console.log("Kategorie2");  
            (<HTMLDivElement>document.getElementById("eisWaffelID")).style.display = "none";
            (<HTMLDivElement>document.getElementById("eisBecherID")).style.display = "block";
            (<HTMLDivElement>document.getElementById("eisBecherID")).style.marginTop = "-280px";
        }
    }
}
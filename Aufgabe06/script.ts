namespace Aufgabe06 {

    let testPreis: number = 0;
    let testPreis2: number = 0;

    for (let i: number = 0; i < eissorte.length; i++) {

        if (eissorte[i].kategorie == 1) {

            let xDiv: HTMLDivElement = document.createElement("div");
            xDiv.id = "waffelDiv" + i;
            xDiv.classList.add("waffelClass");
            document.getElementById("conWaff")?.appendChild(xDiv);
            xDiv.setAttribute("testid", i.toString());

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
            testPreis = eissorte[i].preis;
            console.log(testPreis);
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
            xDiv.setAttribute("testid2", i.toString());

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
            testPreis2 = eissorte[i].preis;
            console.log(testPreis2);
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

        if (artikelZaehler >= 0) {
            document.getElementById("kaufBlase")?.appendChild(blasenDiv);
        }

        artikelZaehler++;
        blasenDiv.innerHTML = artikelZaehler + "";

        if ( (<HTMLDivElement>_event.currentTarget).parentElement?.getAttribute("testid") ) {
            ergebnis = temp + testPreis;
            temp = ergebnis;
        } else if ((<HTMLDivElement>_event.currentTarget).parentElement?.getAttribute("testid2")) {
            ergebnis = temp + testPreis2;
            temp = ergebnis;
        }
        console.log(ergebnis.toFixed(2));
    }
}
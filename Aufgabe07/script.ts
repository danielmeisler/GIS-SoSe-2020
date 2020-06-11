namespace Aufgabe07 {

    export function createContent(): void {

        let artikelDiv: string;
        let artikelClass: string;
        let artikelContainer: string;

        for (let i: number = 0; i < eissorte.length; i++) {

            if (eissorte[i].kategorie == 1) {

                artikelDiv = "waffelDiv";
                artikelClass = "waffelClass";
                artikelContainer = "conWaff";
                
            } else {
    
                artikelDiv = "becherDiv";
                artikelClass = "becherClass";
                artikelContainer = "conBech";
    
            }
            
            let xDiv: HTMLDivElement = document.createElement("div");
            xDiv.id = artikelDiv + i;
            xDiv.classList.add(artikelClass);
            document.getElementById(artikelContainer)?.appendChild(xDiv);
            xDiv.setAttribute("artikelKat", i.toString());

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
            xDiv.appendChild(xH3);

            let xButton: HTMLButtonElement = document.createElement("button");
            xButton.innerHTML = "In den Warenkorb";
            xButton.addEventListener("click", handleWarenkorb);
            xDiv.appendChild(xButton);

        }
    }

    let xAlleKategorien: HTMLAnchorElement = document.createElement("a");
    xAlleKategorien.id = "homeButt";
    xAlleKategorien.addEventListener("click", handleKategorie);
    let xTestBild: HTMLImageElement = document.createElement("img");
    xTestBild.src = "home.png";
    document.getElementById("homeButton")?.appendChild(xAlleKategorien).appendChild(xTestBild);

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

        if ((<HTMLDivElement>_event.currentTarget).getAttribute("id") == "homeButt") {
            (<HTMLDivElement>document.getElementById("eisWaffelID")).style.display = "block";
            (<HTMLDivElement>document.getElementById("eisBecherID")).style.display = "block";
        } else if ((<HTMLDivElement>_event.currentTarget).getAttribute("id") == "waffButt") {
            (<HTMLDivElement>document.getElementById("eisBecherID")).style.display = "none";
            (<HTMLDivElement>document.getElementById("eisWaffelID")).style.display = "block";
        } else if ((<HTMLDivElement>_event.currentTarget).getAttribute("id") == "bechButt") {
            (<HTMLDivElement>document.getElementById("eisWaffelID")).style.display = "none";
            (<HTMLDivElement>document.getElementById("eisBecherID")).style.display = "block";
        }
    }
   
    let j: number = 0;
    let artikelZaehler: number = 0;
    let blasenDiv: HTMLDivElement = document.createElement("div");
    blasenDiv.id = "kaufBlase";

    export function handleWarenkorb(_event: Event): void {

        if (artikelZaehler >= 0) {
            document.getElementById("warenkorb")?.appendChild(blasenDiv);
        }
        
        if (localStorage.artikelZaehler) {
            localStorage.artikelZaehler = Number(localStorage.artikelZaehler) + 1;
          } else {
            localStorage.artikelZaehler = 1;
          }
        
        blasenDiv.innerHTML = localStorage.artikelZaehler + "";
        

        // Beim Befehl drunter Tipp von Samuel Kasper dem Ehrenmann bekommen, weil war lost.
        let targetZaehler: string = (<HTMLDivElement>(<HTMLElement>_event.currentTarget).parentElement).getAttribute("artikelKat")!;
        localStorage.setItem("bildString" + j, eissorte[parseInt(targetZaehler)].bild + "");
        localStorage.setItem("titelString" + j, eissorte[parseInt(targetZaehler)].titel + "");
        localStorage.setItem("textString" + j, eissorte[parseInt(targetZaehler)].text + "");
        localStorage.setItem("preisString" + j, eissorte[parseInt(targetZaehler)].preis + "");
        j++;
        
    }
}
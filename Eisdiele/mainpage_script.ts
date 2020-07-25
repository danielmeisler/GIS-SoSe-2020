namespace Eisdiele {

    // Data.json Datei mit allen Artikeln wird übergeben und ruft darauf alle Klassen zur Erstellung der Showcase auf.
    artikel();
    export async function artikel(): Promise<void> {
        await communicate("data.json");
        createEiskugeln();
        createBasis();
        createTopping();
        createButtons();
        preisBerechnung();
    }

    //Globale Variabeln werden für die einzelnen Kategorien mit den Startwerten deklariert, in welchen sie sich im Array befinden.
    let globalEiskugel: number = 0;
    let globalBasis: number = 15;
    let globalTopping: number = 12;

    //Erstellt die Toppings für die Showcase
    let idToppings: string;
    function createTopping(): void {
        let xDiv: HTMLDivElement = document.createElement("div");
        xDiv.id = "showTopping" + globalTopping;
        xDiv.classList.add("showcaseToppingClass");
        document.getElementById("showcase")?.appendChild(xDiv);
        xDiv.setAttribute("idToppingsAttribut", globalTopping.toString());
        idToppings = xDiv.getAttribute("idToppingsAttribut")!;
        let xImg: HTMLImageElement = document.createElement("img");
        xImg.src = eiskugelnArray[globalTopping].source;
        xDiv.appendChild(xImg);

        let xName: HTMLElement = document.createElement("h3");
        xName.id = "showToppingName" + globalTopping;
        xName.innerHTML = "Topping: " + eiskugelnArray[globalTopping].name;
        document.getElementById("rechnungID")?.appendChild(xName);

        let xPreis: HTMLElement = document.createElement("h4");
        xPreis.id = "showToppingPrice" + globalTopping;
        xPreis.innerHTML = "Preis: " + eiskugelnArray[globalTopping].price.toFixed(2).toString() + "€";
        document.getElementById("rechnungID")?.appendChild(xPreis);
    }

    //Erstellt die Eiskugeln für die Showcase
    let idEiskugeln: string;
    function createEiskugeln(): void {
        let xDiv: HTMLDivElement = document.createElement("div");
        xDiv.id = "showEiskugeln" + globalEiskugel;
        xDiv.classList.add("showcaseEiskugelnClass");
        document.getElementById("showcase")?.appendChild(xDiv);
        xDiv.setAttribute("idAttribut", globalEiskugel.toString());
        idEiskugeln = xDiv.getAttribute("idAttribut")!;
        let xImg: HTMLImageElement = document.createElement("img");
        xImg.src = eiskugelnArray[globalEiskugel].source;
        xDiv.appendChild(xImg);

        let xName: HTMLElement = document.createElement("h3");
        xName.id = "showEiskugelnName" + globalEiskugel;
        xName.innerHTML = "Eissorte: " + eiskugelnArray[globalEiskugel].name;
        document.getElementById("rechnungID")?.appendChild(xName);

        let xPreis: HTMLElement = document.createElement("h4");
        xPreis.id = "showEiskugelnPrice" + globalEiskugel;
        xPreis.innerHTML = "Preis: " + eiskugelnArray[globalEiskugel].price.toFixed(2).toString() + "€";
        document.getElementById("rechnungID")?.appendChild(xPreis);
    }

    //Erstellt die Basis für die Showcase
    let idBasis: string;
    function createBasis(): void {
        let xDiv: HTMLDivElement = document.createElement("div");
        xDiv.id = "showBasis" + globalBasis;
        xDiv.classList.add("showcaseBasisClass");
        document.getElementById("showcase")?.appendChild(xDiv);
        xDiv.setAttribute("idBasisAttribut", globalBasis.toString());
        idBasis = xDiv.getAttribute("idBasisAttribut")!;
        let xImg: HTMLImageElement = document.createElement("img");
        xImg.src = eiskugelnArray[globalBasis].source;
        xDiv.appendChild(xImg);

        let xName: HTMLElement = document.createElement("h3");
        xName.id = "showBasisName" + globalBasis;
        xName.innerHTML = "Basis: " + eiskugelnArray[globalBasis].name;
        document.getElementById("rechnungID")?.appendChild(xName);

        let xPreis: HTMLElement = document.createElement("h4");
        xPreis.id = "showBasisPrice" + globalBasis;
        xPreis.innerHTML = "Preis: " + eiskugelnArray[globalBasis].price.toFixed(2).toString() + "€";
        document.getElementById("rechnungID")?.appendChild(xPreis);
    }

    //Erstellt die "Zurueck" und "Weiter" Buttons zum weiterklicken.
    function createButtons(): void {
        for (let i: number = 0; i < 3; i++) {
            let xLeftButtons: HTMLButtonElement = document.createElement("button");
            xLeftButtons.id = "leftButtons" + i;
            xLeftButtons.classList.add("buttonLeftClass");
            xLeftButtons.innerHTML = "Zurueck";
            xLeftButtons.setAttribute("kategorieShowcase", i.toString());
            xLeftButtons.addEventListener("click", handleButtons);
            document.getElementById("leftButtons")?.appendChild(xLeftButtons);

            let xRightButtons: HTMLButtonElement = document.createElement("button");
            xRightButtons.id = "rightButtons" + i;
            xRightButtons.classList.add("buttonRightClass");
            xRightButtons.innerHTML = "Weiter";
            xRightButtons.addEventListener("click", handleButtons);
            document.getElementById("rightButtons")?.appendChild(xRightButtons);
        }
    }

    //Logik der Buttons um weiter oder zurück zu klicken. Dabei wird immer das alte Bild removet und das neue drauf geladen.
    //Das wird dann für alle drei Kategorien gemacht und neu aufgebaut.
    function handleButtons (_event: Event): void {
        document.getElementById("summenID")?.remove();
        if (globalTopping >= 12 && globalTopping <= 14) {
            let xDiv: HTMLDivElement = document.createElement("div");
            xDiv.classList.add("showcaseToppingClass");
            document.getElementById("showTopping" + idToppings)?.remove();
            document.getElementById("showToppingName" + idToppings)?.remove();
            document.getElementById("showToppingPrice" + idToppings)?.remove();
            if ((<HTMLDivElement>_event.currentTarget).getAttribute("id") == "leftButtons0") {
                if (globalTopping > 12 && globalTopping <= 14) {
                    globalTopping--;
                } else if (globalTopping == 12) {
                    globalTopping = 14;
                }
            }
            if ((<HTMLDivElement>_event.currentTarget).getAttribute("id") == "rightButtons0") {
                if (globalTopping >= 12 && globalTopping < 14) {
                    globalTopping++;
                } else if (globalTopping == 14) {
                    globalTopping = 12;
                }
            }     
            createTopping();
        }

        if (globalEiskugel >= 0 && globalEiskugel <= 11) {
            let xDiv: HTMLDivElement = document.createElement("div");
            xDiv.classList.add("showcaseEiskugelnClass");
            document.getElementById("showEiskugeln" + idEiskugeln)?.remove();
            document.getElementById("showEiskugelnName" + idEiskugeln)?.remove();
            document.getElementById("showEiskugelnPrice" + idEiskugeln)?.remove();
            if ((<HTMLDivElement>_event.currentTarget).getAttribute("id") == "leftButtons1") {
                if (globalEiskugel > 0 && globalEiskugel <= 11) {
                    globalEiskugel--;
                } else if (globalEiskugel == 0) {
                    globalEiskugel = 11;
                }
            }
            if ((<HTMLDivElement>_event.currentTarget).getAttribute("id") == "rightButtons1") {
                if (globalEiskugel >= 0 && globalEiskugel < 11) {
                    globalEiskugel++;
                } else if (globalEiskugel == 11) {
                    globalEiskugel = 0;
                }
            }
            createEiskugeln();
        }

        if (globalBasis >= 15 && globalBasis <= 16) {
            let xDiv: HTMLDivElement = document.createElement("div");
            xDiv.classList.add("showcaseBasisClass");
            document.getElementById("showBasis" + idBasis)?.remove();
            document.getElementById("showBasisName" + idBasis)?.remove();
            document.getElementById("showBasisPrice" + idBasis)?.remove();
            if ((<HTMLDivElement>_event.currentTarget).getAttribute("id") == "leftButtons2") {
                if (globalBasis > 15 && globalBasis <= 16) {
                    globalBasis--;
                } else if (globalBasis == 15) {
                    globalBasis = 16;
                }
            }
            if ((<HTMLDivElement>_event.currentTarget).getAttribute("id") == "rightButtons2") {
                if (globalBasis >= 15 && globalBasis < 16) {
                    globalBasis++;
                } else if (globalBasis == 16) {
                    globalBasis = 15;
                }
            }
            createBasis();
        }
        preisBerechnung();
    }

    //Der Preis wird berechnet und in den LocalStorage gepackt, damit im Warenkorb damit gearbeitet werden kann.
    function preisBerechnung(): void {
        let summe: number;
        summe = eiskugelnArray[globalBasis].price + eiskugelnArray[globalEiskugel].price + eiskugelnArray[globalTopping].price;

        let xSumme: HTMLElement = document.createElement("h3");
        xSumme.id = "summenID";
        xSumme.innerHTML = "Summe: " + summe.toFixed(2) + "€";
        document.getElementById("summeDIV")?.appendChild(xSumme);

        localStorage.setItem("summe", summe.toFixed(2));
    }
    
    //Button zum Hinzufügen in den Warenkorb wird generiert.
    let mainpageButton: HTMLButtonElement = document.createElement("button");
    mainpageButton.id = "shopButtonID";
    mainpageButton.innerHTML = "In Warenkorb legen";
    mainpageButton.addEventListener("click", handleAddWarenkorb);
    document.getElementById("shopButton")?.appendChild(mainpageButton);

    //Logik für den Button: Bei jedem Klick wird alles in den LocalStorage gepackt.
    //Somit kann man im Warenkorb mit arbeiten. Der localStorage.zaehler ermöglicht mehrere Bestellungen.
    export function handleAddWarenkorb(_event: Event): void {      
        let rechnungsArray: string[] = [];
        let summenArray: string[] = [];
        
        if (localStorage.zaehler) {
            localStorage.zaehler = Number(localStorage.zaehler) + 1;
          } else {
            localStorage.zaehler = 1;
          }

        rechnungsArray[localStorage.zaehler] = document.getElementById("rechnungID")?.innerHTML!;
        localStorage.setItem("rechnung" + localStorage.zaehler, rechnungsArray[localStorage.zaehler]);

        summenArray[localStorage.zaehler] = localStorage.getItem("summe")!;
        localStorage.setItem("summenArray" + localStorage.zaehler, summenArray[localStorage.zaehler]);

        localStorage.setItem("globalEiskugel", globalEiskugel.toString());
        localStorage.setItem("globalBasis", globalBasis.toString());
        localStorage.setItem("globalTopping", globalTopping.toString());
    }
}
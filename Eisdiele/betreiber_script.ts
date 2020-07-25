namespace Eisdiele {
  document.getElementById("buttonShow")?.addEventListener("click", reloadDatabase);
  document.getElementById("buttonDeleteAll")?.addEventListener("click", deleteAllEntrys);

  generateBestellungen();
  export async function generateBestellungen(): Promise<void> {
      await communicateBestellungen("ttps://gissose2020-danielmeisler.herokuapp.com/show");
      //await communicateBestellungen("http://localhost:8100/show");
      showOrders();
  }
  
  let xOberDiv: HTMLDivElement = document.createElement("div");
  xOberDiv.id = "OberDIV";
  document.getElementById("aktuelleBestellungenID")?.appendChild(xOberDiv);

  async function showOrders(): Promise<void> {
  
        xOberDiv.innerHTML = "";

        for (let i: number = 0; i < bestellArray.length ; i++) {

          let xDiv: HTMLDivElement = document.createElement("div");
          xDiv.id = "aktuelleBestellungenDIV" + i;
          xDiv.classList.add("aktuelleBestellungenClass");
          xOberDiv.appendChild(xDiv);
          xDiv.setAttribute("aktuellerZaehler", i.toString());

          let xBestellung: HTMLElement =  document.createElement("h2");
          xBestellung.innerHTML = "Bestellung: " + (i + 1);
          xDiv.appendChild(xBestellung);
  
          let xVorname: HTMLElement = document.createElement("p");
          xVorname.innerHTML = "Vorname: " + bestellArray[i].vorname;
          xDiv.appendChild(xVorname);

          let xNachname: HTMLElement = document.createElement("p");
          xNachname.innerHTML = "Nachname: " + bestellArray[i].nachname;
          xDiv.appendChild(xNachname);

          let xStrasse: HTMLElement = document.createElement("p");
          xStrasse.innerHTML = "Straße: " + bestellArray[i].strasse;
          xDiv.appendChild(xStrasse);

          let xPlz: HTMLElement = document.createElement("p");
          xPlz.innerHTML = "PLZ: " + bestellArray[i].plz;
          xDiv.appendChild(xPlz);

          let xWohnort: HTMLElement = document.createElement("p");
          xWohnort.innerHTML = "Wohnort: " + bestellArray[i].wohnort;
          xDiv.appendChild(xWohnort);

          let xOrder: HTMLDivElement = document.createElement("h3");
          xOrder.innerHTML = "Inhalt: ";
          xDiv.appendChild(xOrder);

          let xEissorte: HTMLElement = document.createElement("p");
          let eissorteFinal: string = (bestellArray[i].eissorte);
          if (eissorteFinal.includes("_")) {
            eissorteFinal = eissorteFinal.replace("_", " ");
          }
          xEissorte.innerHTML = "Eissorte: " + eissorteFinal;
          xDiv.appendChild(xEissorte);

          let xBasis: HTMLElement = document.createElement("p");
          xBasis.innerHTML = "Basis: " + bestellArray[i].basis;
          xDiv.appendChild(xBasis);
          
          let xTopping: HTMLElement = document.createElement("p");
          xTopping.innerHTML = "Topping: " + bestellArray[i].topping;
          xDiv.appendChild(xTopping);

          let xGesamtSumme: HTMLElement = document.createElement("p");
          let summeFinal: string = bestellArray[i].summe;
          summeFinal = summeFinal.replace("-", ".");
          xGesamtSumme.innerHTML = "Gesamtsumme: " + summeFinal + "0€";
          xDiv.appendChild(xGesamtSumme);

          let xBearbeitet: HTMLButtonElement = document.createElement("button");
          xBearbeitet.id = "bestellungBearbeitet" + i;
          xBearbeitet.innerHTML = "Bestellung bearbeitet";
          xBearbeitet.addEventListener("click", handleBearbeitet);
          xDiv.appendChild(xBearbeitet);

          let xButton: HTMLButtonElement = document.createElement("button");
          xButton.id = "bestellungEntfernen" + i;
          xButton.classList.add("loeschenButton");
          xButton.innerHTML = "Bestellung löschen";
          xButton.addEventListener("click", handleBestellungEntfernen);
          xDiv.appendChild(xButton);

        }
       
      }

  async function deleteAllEntrys(): Promise<void> {
    let url: string = "https://gissose2020-danielmeisler.herokuapp.com";
    //let url: string = "http://localhost:8100";
    url += "/deleteAll";
    await fetch(url);
  }

  async function handleBestellungEntfernen(_event: Event): Promise<void> {
    ((<HTMLDivElement>_event.currentTarget).parentElement!).remove();
    let targetZaehler: string = (<HTMLDivElement>(<HTMLElement>_event.currentTarget).parentElement).getAttribute("aktuellerZaehler")!;
    let url: string = "https://gissose2020-danielmeisler.herokuapp.com" + "/delete" + "?" + targetZaehler;
    //let url: string = "http://localhost:8100" + "/delete" + "?" + targetZaehler;
    //url += 
    //let urlZaehler: string = "http://localhost:8100/zaehler" + "?" + targetZaehler;
    //await fetch(urlZaehler);
    await fetch(url);
  }

  async function reloadDatabase(): Promise<void> {
    location.reload();
  }

  function handleBearbeitet(_event: Event): void {
    let targetZaehler: string = (<HTMLDivElement>(<HTMLElement>_event.currentTarget).parentElement).getAttribute("aktuellerZaehler")!;
    (<HTMLDivElement>document.getElementById("aktuelleBestellungenDIV" + targetZaehler)).style.borderColor = "lightgrey";
    (<HTMLDivElement>document.getElementById("aktuelleBestellungenDIV" + targetZaehler)).style.color = "lightgrey";
    (<HTMLDivElement>document.getElementById("bestellungBearbeitet" + targetZaehler)).style.backgroundColor = "lightgrey";
    (<HTMLDivElement>document.getElementById("bestellungEntfernen" + targetZaehler)).style.backgroundColor = "lightgrey";
  }
}
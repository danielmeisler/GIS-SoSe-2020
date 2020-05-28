namespace Aufgabe05 {

for (let i: number = 0; i < waffel.length; i++) {
  
    let xDiv: HTMLDivElement = document.createElement("div");
    xDiv.id = "divNr" + i;
    document.getElementById("cw")?.appendChild(xDiv);

    let xImg: HTMLImageElement = document.createElement("img");
    xImg.src = waffel[i].bild;
    document.getElementById("divNr" + i)?.appendChild(xImg);

    let xH2: HTMLElement = document.createElement("h2");
    xH2.innerHTML = waffel[i].titel;
    document.getElementById("divNr" + i)?.appendChild(xH2);

    let xP: HTMLParagraphElement = document.createElement("p");
    xP.innerHTML = waffel[i].text;
    document.getElementById("divNr" + i)?.appendChild(xP);

    let xH3: HTMLElement = document.createElement("h3");
    xH3.innerHTML = waffel[i].preis;
    document.getElementById("divNr" + i)?.appendChild(xH3);

    let xButton: HTMLButtonElement = document.createElement("button");
    xButton.innerHTML = "In den Warenkorb";
    document.getElementById("divNr" + i)?.appendChild(xButton);

}
for (let i: number = 0; i < becher.length; i++) {
  
    let xDiv: HTMLDivElement = document.createElement("div");
    xDiv.id = "divNr2" + i;
    document.getElementById("cb")?.appendChild(xDiv);

    let xImg: HTMLImageElement = document.createElement("img");
    xImg.src = becher[i].bild;
    document.getElementById("divNr2" + i)?.appendChild(xImg);

    let xH2: HTMLElement = document.createElement("h2");
    xH2.innerHTML = becher[i].titel;
    document.getElementById("divNr2" + i)?.appendChild(xH2);

    let xP: HTMLParagraphElement = document.createElement("p");
    xP.innerHTML = becher[i].text;
    document.getElementById("divNr2" + i)?.appendChild(xP);

    let xH3: HTMLElement = document.createElement("h3");
    xH3.innerHTML = becher[i].preis;
    document.getElementById("divNr2" + i)?.appendChild(xH3);

    let input: HTMLButtonElement = document.createElement("button");
    input.innerHTML = "In den Warenkorb";
    document.getElementById("divNr2" + i)?.appendChild(input);

}

}
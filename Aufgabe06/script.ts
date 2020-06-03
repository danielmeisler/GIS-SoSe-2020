namespace Aufgabe06 {

    for (let i: number = 0; i < eissorte.length; i++) {

        if (eissorte[i].kategorie == 1) {
            let xDiv: HTMLDivElement = document.createElement("div");
            xDiv.id = "waffelDiv" + i;
            xDiv.classList.add("waffelClass");
            document.getElementById("conWaff")?.appendChild(xDiv);

            let xImg: HTMLImageElement = document.createElement("img");
            xImg.src = eissorte[i].bild;
            document.getElementById("waffelDiv" + i)?.appendChild(xImg);

            let xH2: HTMLElement = document.createElement("h2");
            xH2.innerHTML = eissorte[i].titel;
            document.getElementById("waffelDiv" + i)?.appendChild(xH2);

            let xP: HTMLParagraphElement = document.createElement("p");
            xP.innerHTML = eissorte[i].text;
            document.getElementById("waffelDiv" + i)?.appendChild(xP);

            let xH3: HTMLElement = document.createElement("h3");
            xH3.innerHTML = "Preis: " + eissorte[i].preis + "0 €";
            document.getElementById("waffelDiv" + i)?.appendChild(xH3);

            let xButton: HTMLButtonElement = document.createElement("button");
            xButton.innerHTML = "In den Warenkorb";
            document.getElementById("waffelDiv" + i)?.appendChild(xButton);
        }

        if (eissorte[i].kategorie == 2) {
            let xDiv: HTMLDivElement = document.createElement("div");
            xDiv.id = "becherDiv" + i;
            xDiv.classList.add("becherClass");
            document.getElementById("conBech")?.appendChild(xDiv);
    
            let xImg: HTMLImageElement = document.createElement("img");
            xImg.src = eissorte[i].bild;
            document.getElementById("becherDiv" + i)?.appendChild(xImg);
    
            let xH2: HTMLElement = document.createElement("h2");
            xH2.innerHTML = eissorte[i].titel;
            document.getElementById("becherDiv" + i)?.appendChild(xH2);
    
            let xP: HTMLParagraphElement = document.createElement("p");
            xP.innerHTML = eissorte[i].text;
            document.getElementById("becherDiv" + i)?.appendChild(xP);
    
            let xH3: HTMLElement = document.createElement("h3");
            xH3.innerHTML = "Preis: " + eissorte[i].preis + "0 €";
            document.getElementById("becherDiv" + i)?.appendChild(xH3);
    
            let input: HTMLButtonElement = document.createElement("button");
            input.innerHTML = "In den Warenkorb";
            document.getElementById("becherDiv" + i)?.appendChild(input);
        }
    }
}
namespace Aufgabe05 {

    for (let i: number = 0; i < waffel.length; i++) {

        let xDiv: HTMLDivElement = document.createElement("div");
        xDiv.id = "waffelDiv" + i;
        xDiv.classList.add("waffelClass");
        document.getElementById("cw")?.appendChild(xDiv);

        let xImg: HTMLImageElement = document.createElement("img");
        xImg.src = waffel[i].bild;
        document.getElementById("waffelDiv" + i)?.appendChild(xImg);

        let xH2: HTMLElement = document.createElement("h2");
        xH2.innerHTML = waffel[i].titel;
        document.getElementById("waffelDiv" + i)?.appendChild(xH2);

        let xP: HTMLParagraphElement = document.createElement("p");
        xP.innerHTML = waffel[i].text;
        document.getElementById("waffelDiv" + i)?.appendChild(xP);

        let xH3: HTMLElement = document.createElement("h3");
        xH3.innerHTML = waffel[i].preis;
        document.getElementById("waffelDiv" + i)?.appendChild(xH3);

        let xButton: HTMLButtonElement = document.createElement("button");
        xButton.innerHTML = "In den Warenkorb";
        document.getElementById("waffelDiv" + i)?.appendChild(xButton);

    }
    for (let i: number = 0; i < becher.length; i++) {

        let xDiv: HTMLDivElement = document.createElement("div");
        xDiv.id = "becherDiv" + i;
        xDiv.classList.add("becherClass");
        document.getElementById("cb")?.appendChild(xDiv);

        let xImg: HTMLImageElement = document.createElement("img");
        xImg.src = becher[i].bild;
        document.getElementById("becherDiv" + i)?.appendChild(xImg);

        let xH2: HTMLElement = document.createElement("h2");
        xH2.innerHTML = becher[i].titel;
        document.getElementById("becherDiv" + i)?.appendChild(xH2);

        let xP: HTMLParagraphElement = document.createElement("p");
        xP.innerHTML = becher[i].text;
        document.getElementById("becherDiv" + i)?.appendChild(xP);

        let xH3: HTMLElement = document.createElement("h3");
        xH3.innerHTML = becher[i].preis;
        document.getElementById("becherDiv" + i)?.appendChild(xH3);

        let input: HTMLButtonElement = document.createElement("button");
        input.innerHTML = "In den Warenkorb";
        document.getElementById("becherDiv" + i)?.appendChild(input);

    }

}
namespace Aufgabe07 {

    export interface Eissorte {
        bild: string;
        titel: string;
        text: string;
        preis: number;
        kategorie: number;
    }
    
    export let eissorte: Eissorte[];
    
    async function communicate(_url: RequestInfo): Promise<void> {
        let response: Response = await fetch(_url);
        let respJSON: String = await response.json();
        eissorte = JSON.parse(JSON.stringify(respJSON));
        createContent();
    }
    communicate("data.json");
    
}
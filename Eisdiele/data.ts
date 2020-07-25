namespace Eisdiele {
   
    interface Eiskugeln {
        source: string;
        name: string;
        price: number;
    }
    
    export let eiskugelnArray: Eiskugeln[];
    
    export async function communicate(_url: RequestInfo): Promise<void> {
        let response: Response = await fetch(_url);
        let respJSON: string = await response.json();

        eiskugelnArray = JSON.parse(JSON.stringify(respJSON));
    }

    interface Bestellungen {
      id: string;
      vorname: string;
      nachname: string;
      strasse: string;
      plz: string;
      wohnort: string;
      eissorte: string;
      basis: string;
      topping: string;
      summe: string;
    } 

    export let bestellArray: Bestellungen[];

    export async function communicateBestellungen(_url: RequestInfo): Promise<void> {
        let response: Response = await fetch(_url);
        let respJSON: string = await response.json();
        if (respJSON != "[]") {
            bestellArray = JSON.parse(JSON.stringify(respJSON));
        }
    }
}
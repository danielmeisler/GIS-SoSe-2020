namespace Aufgabe06 {

    interface Eissorte {
        bild: string;
        titel: string;
        text: string;
        preis: number;
        kategorie: number;
    }

    let aftereight: Eissorte = { bild: "waffel_aftereight.jpg", titel: "After Eight", text: "Perfektes Eis um es nach Achte zu genießen.", preis: 0.80, kategorie: 1};
    let blackmamba: Eissorte = { bild: "waffel_blackmamba.jpg", titel: "Black Mamba", text: "Genau so lecker-gefährlich wie sein Namensgeber.", preis: 0.80, kategorie: 1};
    let buttermilchmango: Eissorte = { bild: "waffel_buttermilchmango.jpg", titel: "Buttermilch", text: "Buttermilch und Mango - Was will man mehr?", preis: 0.80, kategorie: 1};
    let erdbeere: Eissorte = { bild: "waffel_erdbeere.jpg", titel: "Erdbeere", text: "Frisch gepflückt für die fröhlichen Früchtchen.", preis: 0.80, kategorie: 1};
    let erdbeerkaese: Eissorte = { bild: "waffel_erdbeerkaese.jpg", titel: "Käsekuchen", text: "Da ist Kuchen drin, muss ich mehr sagen?", preis: 0.80, kategorie: 1};
    let mango: Eissorte = { bild: "waffel_mango.jpg", titel: "Mango", text: "Mehr exotischer Genuss geht nicht mehr.", preis: 0.80, kategorie: 1};
    let schokolade: Eissorte = { bild: "waffel_schoko.jpg", titel: "Schokolade", text: "Gegen Kummer und Sorgen - Ein Klassiker", preis: 0.80, kategorie: 1};
    let schwarzejohannisbeere: Eissorte = { bild: "waffel_schwarzejohannisbeere.jpg", titel: "Johannisbeere", text: "Tiefsinniger Geschmack für jeden Beerenboy.", preis: 0.80, kategorie: 1};
    let stracciatella: Eissorte = { bild: "waffel_stracciatella.jpg", titel: "Stracciatella", text: "Ein großer Favorit unter Feinschmeckern.", preis: 0.80, kategorie: 1};
    let vanille: Eissorte = { bild: "waffel_vanille.jpg", titel: "Vanille", text: "Einfach Lecker - Einfach ein Klassiker", preis: 0.80, kategorie: 1};
    let waldmeister: Eissorte = { bild: "waffel_waldmeister.jpg", titel: "Waldmeister", text: "Der Meister vom Wald persönlich.", preis: 0.80, kategorie: 1};
    let wassermelone: Eissorte = { bild: "waffel_wassermelone.jpg", titel: "Wassermelone", text: "Besonders erfrischend im Sommer.", preis: 0.80, kategorie: 1};
    let amarena: Eissorte = { bild: "eis_amarena.jpg", titel: "Amarena", text: "Italienischer Liebhaber", preis: 1.20, kategorie: 2};
    let bubblegum: Eissorte = { bild: "eis_bubblegum.jpg", titel: "Bubblegum", text: "Es gibt bestimmt Käufer", preis: 1.20, kategorie: 2};
    let cookieamericano: Eissorte = { bild: "eis_cookiesamericano.jpg", titel: "Cookie-Americano", text: "Kekse nach amerikanischer Art", preis: 1.20, kategorie: 2};
    let heidelbeere: Eissorte = { bild: "eis_heidelbeere.jpg", titel: "Heidelbeere", text: "Frisch vom Strauch", preis: 1.20, kategorie: 2};
    let kinderschoko: Eissorte = { bild: "eis_kinderschokolade.jpg", titel: "Kinder Schokolade", text: "Enthält leichte Spuren von Kindern", preis: 1.20, kategorie: 2};
    let minzeschoko: Eissorte = { bild: "eis_minze.jpg", titel: "Minzschokolade", text: "Einfach erfrischend", preis: 1.20, kategorie: 2};
    let orangezartbitter: Eissorte = { bild: "eis_orangezartbitter.jpg", titel: "Orange-Zartbitter", text: "Das schmeckt einfach gut", preis: 1.20, kategorie: 2};
    let quarkhimbeere: Eissorte = { bild: "eis_quarkhimbeer.jpg", titel: "Quark-Himbeere", text: "Himbeeren in Quark getauft", preis: 1.20, kategorie: 2};
    let schlumpf: Eissorte = { bild: "eis_schlumpf.jpg", titel: "Schlumpf", text: "Für Kinder und Erwachsene", preis: 1.20, kategorie: 2};
    let schwarzevanille: Eissorte = { bild: "eis_schwarzevanille.jpg", titel: "Schwarze Vanille", text: "Edel und elegant", preis: 1.20, kategorie: 2};
    let snikey: Eissorte = { bild: "eis_sniky.jpg", titel: "Sniky", text: "Wieder zur Diva geworden?", preis: 1.20, kategorie: 2};
    let waldmeister2: Eissorte = { bild: "eis_waldmeister.jpg", titel: "Waldmeister", text: "Wo sind die Waldmeister-Fans? Hier!", preis: 1.20, kategorie: 2};

    export let eissorte: Eissorte[] = [aftereight, blackmamba, buttermilchmango, erdbeere, erdbeerkaese, mango, schokolade, schwarzejohannisbeere, stracciatella, vanille, waldmeister, wassermelone, amarena, bubblegum, cookieamericano, heidelbeere, kinderschoko, minzeschoko, orangezartbitter, quarkhimbeere, schlumpf, schwarzevanille, snikey, waldmeister2];

}
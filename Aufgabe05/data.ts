namespace Aufgabe05 {

    interface Waffeleis {
        bild: string;
        titel: string;
        text: string;
        preis: string;
    }

    let aftereight: Waffeleis = { bild: "waffel_aftereight.jpg", titel: "After Eight", text: "Perfektes Eis um es nach Achte zu genießen.", preis: "Preis: 1.00€" };
    let blackmamba: Waffeleis = { bild: "waffel_blackmamba.jpg", titel: "Black Mamba", text: "Genau so lecker-gefährlich wie sein Namensgeber.", preis: "Preis: 1.00€" };
    let buttermilchmango: Waffeleis = { bild: "waffel_buttermilchmango.jpg", titel: "Buttermilch", text: "Buttermilch und Mango - Was will man mehr?", preis: "Preis: 1.00€" };
    let erdbeere: Waffeleis = { bild: "waffel_erdbeere.jpg", titel: "Erdbeere", text: "Frisch gepflückt für die fröhlichen Früchtchen.", preis: "Preis: 1.00€" };
    let erdbeerkaese: Waffeleis = { bild: "waffel_erdbeerkaese.jpg", titel: "Käsekuchen", text: "Da ist Kuchen drin, muss ich mehr sagen?", preis: "Preis: 1.00€" };
    let mango: Waffeleis = { bild: "waffel_mango.jpg", titel: "Mango", text: "Mehr exotischer Genuss geht nicht mehr.", preis: "Preis: 1.00€" };
    let schokolade: Waffeleis = { bild: "waffel_schoko.jpg", titel: "Schokolade", text: "Gegen Kummer und Sorgen - Ein Klassiker", preis: "Preis: 1.00€" };
    let schwarzejohannisbeere: Waffeleis = { bild: "waffel_schwarzejohannisbeere.jpg", titel: "Johannisbeere", text: "Tiefsinniger Geschmack für jeden Beerenboy.", preis: "Preis: 1.00€" };
    let stracciatella: Waffeleis = { bild: "waffel_stracciatella.jpg", titel: "Stracciatella", text: "Ein großer Favorit unter Feinschmeckern.", preis: "Preis: 1.00€" };
    let vanille: Waffeleis = { bild: "waffel_vanille.jpg", titel: "Vanille", text: "Einfach Lecker - Einfach ein Klassiker", preis: "Preis: 1.00€" };
    let waldmeister: Waffeleis = { bild: "waffel_waldmeister.jpg", titel: "Waldmeister", text: "Der Meister vom Wald persönlich.", preis: "Preis: 1.00€" };
    let wassermelone: Waffeleis = { bild: "waffel_wassermelone.jpg", titel: "Wassermelone", text: "Besonders erfrischend im Sommer.", preis: "Preis: 1.00€" };

    export let waffel: Waffeleis[] = [aftereight, blackmamba, buttermilchmango, erdbeere, erdbeerkaese, mango, schokolade, schwarzejohannisbeere, stracciatella, vanille, waldmeister, wassermelone];

    interface Bechereis {
        bild: string;
        titel: string;
        text: string;
        preis: string;
    }

    let amarena: Bechereis = { bild: "eis_amarena.jpg", titel: "Amarena", text: "Italienischer Liebhaber", preis: "Preis: 1.00€" };
    let bubblegum: Bechereis = { bild: "eis_bubblegum.jpg", titel: "Bubblegum", text: "Es gibt bestimmt Käufer", preis: "Preis: 1.00€" };
    let cookieamericano: Bechereis = { bild: "eis_cookiesamericano.jpg", titel: "Cookie-Americano", text: "Kekse nach amerikanischer Art", preis: "Preis: 1.00€" };
    let heidelbeere: Bechereis = { bild: "eis_heidelbeere.jpg", titel: "Heidelbeere", text: "Frisch vom Strauch", preis: "Preis: 1.00€" };
    let kinderschoko: Bechereis = { bild: "eis_kinderschokolade.jpg", titel: "Kinder Schokolade", text: "Enthält leichte Spuren von Kindern", preis: "Preis: 1.00€" };
    let minzeschoko: Bechereis = { bild: "eis_minze.jpg", titel: "Minzschokolade", text: "Einfach erfrischend", preis: "Preis: 1.00€" };
    let orangezartbitter: Bechereis = { bild: "eis_orangezartbitter.jpg", titel: "Orange-Zartbitter", text: "Das schmeckt einfach gut", preis: "Preis: 1.00€" };
    let quarkhimbeere: Bechereis = { bild: "eis_quarkhimbeer.jpg", titel: "Quark-Himbeere", text: "Himbeeren in Quark getauft", preis: "Preis: 1.00€" };
    let schlumpf: Bechereis = { bild: "eis_schlumpf.jpg", titel: "Schlumpf", text: "Für Kinder und Erwachsene", preis: "Preis: 1.00€" };
    let schwarzevanille: Bechereis = { bild: "eis_schwarzevanille.jpg", titel: "Schwarze Vanille", text: "Edel und elegant", preis: "Preis: 1.00€" };
    let snikey: Bechereis = { bild: "eis_sniky.jpg", titel: "Sniky", text: "Wieder zur Diva geworden?", preis: "Preis: 1.00€" };
    let waldmeister2: Bechereis = { bild: "eis_waldmeister.jpg", titel: "Waldmeister", text: "Wo sind die Waldmeister-Fans? Hier!", preis: "Preis: 1.00€" };

    export let becher: Bechereis[] = [amarena, bubblegum, cookieamericano, heidelbeere, kinderschoko, minzeschoko, orangezartbitter, quarkhimbeere, schlumpf, schwarzevanille, snikey, waldmeister2];

}
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Eisdiele = void 0;
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var Eisdiele;
(function (Eisdiele) {
    let eisDatenbank;
    //Konsolen Ausgabe, dass der Server startet.
    console.log("Starting server");
    //Port wird als Variable typ number gespeichert.
    let port = Number(process.env.PORT);
    //Wenn es keinen Port gibt, dann setzt er ihn auf 8100.
    if (!port)
        port = 8100;
    //let databaseURL: string = "mongodb://localhost:27017";
    let databaseURL = "mongodb+srv://dbUser:pw123@gis-sose2020-vjhd2.mongodb.net/Eisdiele?retryWrites=true&w=majority";
    startServer(port);
    connectToDatabase(databaseURL);
    function startServer(_port) {
        //Server wird als Variable typ Http.Server gespeichert.
        let server = Http.createServer();
        //Handler werden dem Server als Listener hinzugefügt.
        server.addListener("request", handleRequest);
        server.addListener("listening", handleListen);
        //Server hört den Port ab.
        server.listen(_port);
    }
    async function connectToDatabase(_url) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        eisDatenbank = mongoClient.db("Eisdiele").collection("Bestellungen");
        console.log("Database connection: ", eisDatenbank != undefined);
    }
    //Konsole gibt beim Aufruf "Listening" aus.
    function handleListen() {
        console.log("Listening");
    }
    async function handleRequest(_request, _response) {
        //Konsole gibt beim Aufruf "I hear voices!" aus.
        console.log("I hear voices!");
        //Parameter werden für die Response festgelegt.
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let urlQuery = Url.parse(_request.url, true);
            let path = urlQuery.pathname;
            let jsonString = "";
            let results = await eisDatenbank.find().toArray();
            if (path == "/add") {
                eisDatenbank.insertOne(urlQuery.query);
            }
            if (path == "/show") {
                jsonString += "[";
                for (let i = 0; i < results.length; i++) {
                    jsonString += JSON.stringify(results[i]);
                    if (i < results.length - 1) {
                        jsonString += ",";
                    }
                }
                jsonString += "]";
            }
            if (path == "/delete") {
                for (let i = 0; i < results.length; i++) {
                    let stringQuery = JSON.stringify(urlQuery.query);
                    let deleteCounter = parseFloat(stringQuery.replace(/\D/g, ""));
                    jsonString += JSON.stringify(eisDatenbank.deleteOne(results[deleteCounter]));
                }
            }
            if (path == "/deleteAll") {
                for (let i = 0; i < results.length; i++) {
                    jsonString += JSON.stringify(eisDatenbank.deleteOne(results[i]));
                }
            }
            _response.write(jsonString);
            _response.end();
        }
    }
    Eisdiele.handleRequest = handleRequest;
})(Eisdiele = exports.Eisdiele || (exports.Eisdiele = {}));
//# sourceMappingURL=server.js.map
import * as Http from "http";

export namespace A08Server {
  //Konsolen Ausgabe, dass der Server startet.
  console.log("Starting server"); 
  //Port wird als Variable typ number gespeichert.
  let port: number = Number(process.env.PORT);
  //Wenn es keinen Port gibt, dann setzt er ihn auf 8100.
  if (!port)
    port = 8100;

  //Server wird als Variable typ Http.Server gespeichert.
  let server: Http.Server = Http.createServer();
  //Handler werden dem Server als Listener hinzugefügt.
  server.addListener("request", handleRequest);
  server.addListener("listening", handleListen);
  //Server hört den Port ab.
  server.listen(port);

  //Konsole gibt beim Aufruf "Listening" aus.
  function handleListen(): void {
    console.log("Listening");
  }

  function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
    //Konsole gibt beim Aufruf "I hear voices!" aus.
    console.log("I hear voices!");

    //Parameter werden für die Response festgelegt.
    _response.setHeader("content-type", "text/html; charset=utf-8");
    _response.setHeader("Access-Control-Allow-Origin", "*");

    //URL wird ausgegeben.
    _response.write(_request.url);
    console.log(_request.url);

    //Response wird beendet.
    _response.end();
  }
}
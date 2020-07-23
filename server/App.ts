import * as Http from "http";
import * as Url from "url";

export namespace App {
    Http.createServer(function (req, res) {
        res.write('Hello World!'); //write a response to the client
        res.end(); //end the response
    }).listen(8080);
}
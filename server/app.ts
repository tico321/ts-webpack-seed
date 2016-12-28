import * as express from "express";

export class Server {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.app.get('/', function(request, response) {
      response.json('Typescript seed!');
    });
  }
}
import * as bodyParser from 'body-parser';
import * as express from 'express';
import { Test } from './routes/test';

export class Server {
  public app : express.Application;

  constructor() {
    this.app = express();
    this.configure(this.app);
    this.addRoutes(this.app);
  }

  private configure(app : express.Application) : void {
    app.use(express.static('client'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
      extended: true
    }));
  }

  private addRoutes(app : express.Application) : void {
    app.use('/test', (new Test()).getRouter());
  }
}
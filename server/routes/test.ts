import * as express from 'express';

export class Test {
  private router : express.Router;

  constructor() {
    this.router = express.Router();
    this.configureGet();
  }

  public getRouter() : express.Router {
    return this.router;
  }

  private configureGet() {
    this.router.get('/', (_, response : express.Response) => {
      response.json(['test response']);
    });
  }
}
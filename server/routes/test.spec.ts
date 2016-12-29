import 'mocha';
import * as supertest from 'supertest';
import { Server } from '../app';
const app = new Server().app;

describe('/test', () => {
  it('should return 200 status', done => {
    supertest(app)
      .get('/test')
      .expect(200, done);
  });

  it('should have a json content type', done => {
    supertest(app)
      .get('/test')
      .expect('Content-Type', /json/, done);
  });

  it('the body is an array with one element', done => {
    supertest(app)
      .get('/test')
      .expect(['test response'], done);
  });
});
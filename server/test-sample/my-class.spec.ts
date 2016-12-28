import 'mocha';
import { MyClass } from './my-class';
import * as chai from 'chai';
chai.should();

const sut = new MyClass();

describe('MyClass', () => {
  describe('Add', () => {
    it('should return the result from a + b', (done) => {
      let actual = sut.add(2, 2);
      chai.assert.equal(4, 4, '2 + 2 should be 4');
      done();
    });
  });

  describe('Add async', () => {
    it('should return the result from a + b', (done) => {
      let actual = sut.asyncAdd(2, 2)
        .then(result => {
          chai.assert.equal(4, 4, '2 + 2 should be 4');
          done();
        });
    });
  });
});



/**
 * Created by gabrielkunkel on 11/8/16 in JavaScript.
 */

import chai from 'chai'
import seneca from '../answers/01_sum'

const should = chai.should()

describe("Sum ans for Seneca in Practice", function () {

  it("should have a functioning test suite", function() {
    [].should.be.empty;
  }); // end it

  it("should have a seneca object", function() {
    seneca.should.be.ok;
    seneca.add.should.be.ok;
    seneca.act.should.be.ok;
    seneca.sub.should.be.ok;
    seneca.use.should.be.ok;
  }); // end it

  it('should return the sum when tested with an action', function () {
    seneca.ready(function(err) {
      seneca.act({role: 'math', cmd: 'sum', left: 3, right: 3}, (err, res) => {
        res.answer.should.not.be.equal(7)
        res.answer.should.be.equal(6)
      })
    })
  });

}); // end describe

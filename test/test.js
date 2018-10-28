var assert = require('assert');
const sumOfOther = require('../sumOfOther');
describe('Test "sumOfOther" function', function() {
  describe('Should return right array.', function() {
    it('#1', function() {
      const result = sumOfOther([2, 3, 4, 1]);
      assert.deepEqual(result, [8, 7, 6, 9]);
    });
    it('#2', function() {
      const result = sumOfOther([5, 8, 10, 15]);
      assert.deepEqual(result, [33, 30, 28, 23]);
    });
    it('#3', function() {
      const result = sumOfOther([0, 0, 0]);
      assert.deepEqual(result, [0, 0, 0]);
    });
    it('#4', function() {
      const result = sumOfOther([55, -55, 55, -55]);
      assert.deepEqual(result, [-55, 55, -55, 55]);
    });
  });
});

const make = require('../make');
describe('Test "make" function', function() {
  describe('#1 Block. Function sum. Should return right sum', function() {
    function sum(a, b) { return a + b; }
    it('#1', function() {
      const result = make(15)(34, 21, 666)(41)(sum);
      assert.equal(result, 777);
    });
    it('#2', function() {
      result = make(17)(34, 21, 666)(41)(sum);
      assert.equal(result, 779);
    });
    it('#3', function() {
      result = make(32, 48)(1, 88)(sum);
      assert.equal(result, 169);
    });
    it('#4', function() {
      result = make(46, 5)(5, 11)(1)(sum);
      assert.equal(result, 68);
    });
  });
  describe('#2 Block. Function subtract. Should return right number', function() {
    function subtract(a, b) { return a - b; }
    it('#1', function() {
      let result = make(15)(34, 21, 666)(41)(subtract);
      assert.equal(result, -747);
    });
    it('#2', function() {
      result = make(17)(34, 21, 666)(41)(subtract);
      assert.equal(result, -745);
    });
    it('#3', function() {
      result = make(32, 48)(1, 88)(subtract);
      assert.equal(result, -105);
    });
    it('#4', function() {
      result = make(46, 5)(5, 11)(1)(subtract);
      assert.equal(result, 24);
    });
  });
});

const recursion = require('../recursion');
describe('Test "recursion" function', function() {
  describe('Should return right array.', function() {
    it('#1', function() {
      let tree = {"value":100,"left":{"value":90,"left":{"value":70},"right":{"value":99}},"right":{"value":120,"left":{"value":110},"right":{"value":130}}};
      const result = recursion(tree);
      assert.deepEqual(result, [[100], [90, 120], [70,99,110,130]]);
    });
    it('#2', function() {
      let tree = {"value":100,"left":{"value":90,"left":{"value":70, "left": {"value":69}, "right": {"value":71}},"right":{"value":95, "left": {"value":91}, "right": {"value":96}}},"right":{"value":120,"left":{"value":110, "left": {"value":109}, "right": {"value":112}},"right":{"value":130, "left": {"value":125}, "right": {"value":135}}}};
      const result = recursion(tree);
      assert.deepEqual(result, [[100], [90, 120], [70,95,110,130], [69,71,91,96,109,112,125,135]]);
    });
  });
})
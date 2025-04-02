const test = require('node:test');
const assert = require('node:assert');
const { fizzbuzz } = require('./fizzbuzz.js')


test('fizzbuzz(3)', (t) => {
  assert.strictEqual(fizzbuzz(3), "Fizz");
});
test('fizzbuzz(5)', (t) => {
  assert.strictEqual(fizzbuzz(5), "buzz");
});

test('fizzbuzz(15)', (t) => {
  assert.strictEqual(fizzbuzz(15), "Fizzbuzz");
});

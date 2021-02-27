const sum = require('./jest.js');

test('it will add 5 + 5 to equal 10', () => {
  expect(sum(5, 5)).toBe(10);
})
const captalizeString = require('./captalizeString');

test('capitalizes string', () => {
    expect(captalizeString('hello')).toEqual('HELLO');
  });
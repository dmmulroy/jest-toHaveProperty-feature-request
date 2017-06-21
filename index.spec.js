const getFlattenedObject = require('./index');

test('getFlattenedObject should flatten an object', () => {
  const myObject = {
    key: 'value',
    nested: {
      key: 'value'
    }
  };

  const expectedResult = {
    key: 'value',
    'nested.key': 'value'
  };

  // Passes as expected
  expect(getFlattenedObject(myObject)).toEqual(expectedResult);
  // Fails because it's using dot notation to search for the property
  expect(getFlattenedObject(myObject)).toHaveProperty('nested.key', 'value');
});

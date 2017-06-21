const getFlattenedObject = require('./index');

test('getFlattenedObject should flatten an object', () => {
  const myObject = {
    arbitraryKey: 'arbitraryValue',
    nestedObject: {
      arbitraryKey: 'arbitraryValue'
    }
  };

  const expectedResult = {
    arbitraryKey: 'arbitraryValue',
    'nestedObject.arbitraryKey': 'arbitraryValue'
  };

  // Passes as expected
  expect(getFlattenedObject(myObject)).toEqual(expectedResult);
  // Fails because it's using dot notation to search for the property
  expect(getFlattenedObject(myObject)).toHaveProperty(
    'nestedObject.arbitraryKey',
    'arbitraryValue'
  );
});

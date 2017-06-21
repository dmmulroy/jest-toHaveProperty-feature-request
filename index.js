const flatten = require('flat');

const getFlattenedObject = obj => {
  const flattenedObject = flatten(obj);

  return flattenedObject;
};

module.exports = getFlattenedObject;

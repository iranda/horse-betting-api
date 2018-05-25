function getElementInArrayByKey(array, key, value) {
  return array.find(item => item[key] === value);
};

function isObjectWithKeyInArray(array, key, value) {
  return array.filter(item => item[key] === value).length > 0;
};

function isObjectEmpty(obj) {
  return !Object.keys(obj).length > 0;
};

module.exports = {
  getElementInArrayByKey,
  isObjectWithKeyInArray,
  isObjectEmpty,
};

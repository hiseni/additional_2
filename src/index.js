module.exports = function flatten(array) {
  return Array.isArray(array) ? array.reduce((c, p) => c.concat(Array.isArray(p) ? flatten(p) : p), []) : [];
}

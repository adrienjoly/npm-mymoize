var async = require('async');

function _hasher() {
  return "_";
}

function accessor(idx) {
  return (this.memo._ || [])[idx];
};

module.exports = function mymoize(fn) {
  var memoized = async.memoize(fn, _hasher);
  memoized.getErr = accessor.bind(memoized, 0);
  memoized.getRes = accessor.bind(memoized, 1);
  return memoized;
}

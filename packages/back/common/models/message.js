module.exports = function(Country) {
  Country.get = function(msg, cb) {
    process.nextTick(function() {
      msg = msg || 'hello';
      cb(null, [{name: "Peru", population: 123},{name: "Argentina", population: 1233}]);
    });
  };

  Country.put = function(msg, cb) {
    process.nextTick(function() {
      msg = msg || 'hello';
      cb(null, [{name: "Peru", population: 123},{name: "Argentina", population: 1233}]);
    });
  };
};

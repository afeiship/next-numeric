(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var sum = function(inArray) {
    return inArray.reduce(function(num1, num2) {
      return num1 * 1 + num2 * 1;
    });
  };

  var NxNumeric = nx.declare('nx.Numeric', {
    statics: {
      compare: function(inNum1, inNum2) {
        var str1 = String(inNum1);
        var str2 = String(inNum2);
        var len1 = str1.length;
        var len2 = str2.length;

        if (len1 === len2) {
          var sum1 = sum(str1.split(''));
          var sum2 = sum(str2.split(''));
          var result = sum1 - sum2;
          return result !== 0 ? result / Math.abs(result) : 0;
        } else {
          var result = len1 - len2;
          return result / Math.abs(result);
        }
      },
      add: function() {},
      sub: function() {},
      mul: function() {},
      div: function() {}
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxNumeric;
  }
})();

(function() {
  var assert = require('assert');
  var nx = require('next-js-core2');
  var NxNumeric = require('../src/next-numeric');

  describe('NxNumeric.methods', function() {
    test('NxNumeric.compare length is equal', function() {
      var num1 = '1001';
      var num2 = '1000';
      var num3 = '1005';
      var num4 = '1001';
      var rs1 = NxNumeric.compare(num1, num2);
      var rs2 = NxNumeric.compare(num1, num3);
      var rs3 = NxNumeric.compare(num1, num4);

      expect(rs1).toBe(1);
      expect(rs2).toBe(-1);
      expect(rs3).toBe(0);
    });
  });
})();

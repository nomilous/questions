describe('Which is faster?', function() {

  context('Deep Copying:', function() {

    /*
      ✓ clone with "json" 10000 times (273ms)
      ✓ clone with "deepcopy" 10000 times (953ms)
      ✓ clone with "deep-copy" 10000 times (177ms) <--------- winner
      ✓ clone with "clone" 10000 times (226ms)
      ✓ clone with "node-deepcopy" 10000 times (395ms)
      ✓ clone with "json" 10000 times (again) (264ms)
    */


    before(function() {
      this.SolarSystem = require('./solar_system');
      this.deepcopy = require('deepcopy');
      this.deepCopy = require('deep-copy');
      this.clone = require('clone');
      this.nodeDeepcopy = require('node-deepcopy').deepCopy;
    });

    it('clone with "json" 10000 times', function() {
      var copy;
      var i = 10000;
      while (i--) {
        copy = JSON.parse(JSON.stringify(this.SolarSystem));
      }
    });

    it('clone with "deepcopy" 10000 times', function() {
      var copy;
      var i = 10000;
      while (i--) {
        copy = this.deepcopy(this.SolarSystem);
      }
    });

    it('clone with "deep-copy" 10000 times', function() {
      var copy;
      var i = 10000;
      while (i--) {
        copy = this.deepCopy(this.SolarSystem);
      }

      // var withFn = {
      //   fn: function() {return 1}
      // }
      // copy = this.deepCopy(withFn);
      // console.log(copy.fn());

    });

    it('clone with "clone" 10000 times', function() {
      var copy;
      var i = 10000;
      while (i--) {
        copy = this.clone(this.SolarSystem);
      }
    });

    it('clone with "node-deepcopy" 10000 times', function() {
      var copy;
      var i = 10000;
      while (i--) {
        copy = this.nodeDeepcopy(this.SolarSystem);
      }
    });

    it('clone with "json" 10000 times (again)', function() {
      var copy;
      var i = 10000;
      while (i--) {
        copy = JSON.parse(JSON.stringify(this.SolarSystem));
      }
    });

  });

});
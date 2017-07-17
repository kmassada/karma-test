'use strict';

/*
 * Unit tests for lib/rororify.js
 */

describe('rororify', function() {

  // API for interacting with the page.
  var controls =  {
    get roro() {
      return document.getElementById('roroToBe').className;
    },
    get x() {
      return document.getElementById('x').value;
    },
    set x(val) {
      document.getElementById('x').value = val;
    },
    changeClassToRoro: function() {
      document.getElementById('rororify').click();
    }
  };

  // inject the HTML fixture for the tests
  beforeEach(function() {
    fixture.base = 'test';
    fixture.load('rororify.fixture.html');

    // init js lib
    window.rororify.init();
  });

  // remove the html fixture from the DOM
  afterEach(function() {
    fixture.cleanup();
  });

  it('change the div class to roro', function() {
    controls.x = 1;
    controls.changeClassToRoro();
    controls.roro.should.equal('roro');
  });
});
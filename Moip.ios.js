/**
 * @providesModule Moip
 * @flow
 */
'use strict';

var NativeMoip = require('NativeModules').Moip;

/**
 * High-level docs for the Moip iOS API can be written here.
 */

var Moip = {
  test: function() {
    NativeMoip.test();
  }
};

module.exports = Moip;

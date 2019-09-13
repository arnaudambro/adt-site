/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
var smoothscroll = require('smoothscroll-polyfill');
var windowExists = require('./src/helpers/windowExists').default;
var isTouchDevice = require('./src/helpers/isTouchDevice').default;

exports.onInitialClientRender = (args) => {
  if (windowExists()) {
    window.isTouchDevice = isTouchDevice()
    // kick off the polyfill!
    smoothscroll.polyfill();
  }
}

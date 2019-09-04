/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
var smoothscroll = require('smoothscroll-polyfill');
var windowExists = require('./src/helpers/windowExists').default;
var windowPathNameIncludes = require('./src/helpers/windowPathNameIncludes').default;

function isTouchDevice() {
  var el = document.createElement('div');
  el.setAttribute('ongesturestart', 'return;'); // or try "ontouchstart"
  return typeof el.ongesturestart === "function";
}

exports.onClientEntry = () => {
  if (windowExists()) {
    window.showWelcomePage = windowPathNameIncludes()
    console.log('window.showWelcomePage', window.showWelcomePage)
    window.isTouchDevice = isTouchDevice()
    // kick off the polyfill!
    smoothscroll.polyfill();
  }
}

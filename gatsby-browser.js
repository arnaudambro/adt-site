/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

exports.onInitialClientRender = () =>{
  window.showWelcomePage = window.location.pathname === '/'
}

exports.onPreRouteUpdate = (e) =>{
  window.showWelcomePage = e.location.pathname === '/'
  if (window.showWelcomePage && e.location.pathname === '/projets') window.startAnimation = true;
}


import React from "react"
import Layout from "../components/layout";
import WelcomePage from "../components/welcomePage";


const LandingPage = () => {
  window.transitionWithLandingRequested = true;
  return <Layout landing>
    <WelcomePage />
  </Layout>
}


export default LandingPage;

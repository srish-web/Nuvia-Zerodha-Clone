import React from "react";
import Platform from "./platform";
function Universe() {
  return (
    <div className="container my-5 p-5">
      <div className="row mx-5">
        <h1 className="text-body-secondary text-center fs-3">
          The Zerodha Universe
        </h1>
        <p className="text-muted text-center mt-4">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>
      <div className="row mx-5" style={{display:"flex", flexWrap:"wrap"}}>
        
          <Platform
            image="media\images\zerodhaFundhouse.png"
            content="Our asset management venture
                    that is creating simple and transparent index
                    funds to help you save for your goals."/>
          <Platform
            image="media\images\streakLogo.png"
            content="Systematic trading platform
                    that allows you to create and backtest
                    strategies without coding."/>
    
          <Platform
            image="media\images\sensibullLogo.svg"
            content="Options trading platform that lets you
                    create strategies, analyze positions, and examine
                    data points like open interest, FII/DII, and more."/>
          <Platform
            image="media\images\smallcaseLogo.png"
            content="Thematic investing platform
                    that helps you invest in diversified
                    baskets of stocks on ETFs."/>
          <Platform
            image="media\images\tijori.svg"
            content="Investment research platform
                    that offers detailed insights on stocks,
                    sectors, supply chains, and more."/>
          <Platform
            image="media\images\dittoLogo.png"
            content="Personalized advice on life
                    and health insurance. No spam
                    and no mis-selling."/>
      </div>
      <div className="row">
        <button
          className="mt-4 mb-5 btn btn-primary fs-5"
          style={{ width: "15%", margin: "0 auto" }}
        >
          Signup For Free
        </button>
      </div>
    </div>
  );
}

export default Universe;

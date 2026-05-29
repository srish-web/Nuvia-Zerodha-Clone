import React from "react";
import PricingBox from "./HeroPricingBox";
function Hero() {
  return (
    <>
      <div className="container p-5">
        <div className="border-bottom">
          <h1 className="text-center mt-5">Pricing</h1>
          <p className="text-center my-3">
            Free equity investments and flat{" "}
            <i class="fa-solid fa-indian-rupee-sign"></i>20 traday and F&Q
            trades.
          </p>
        </div>
     </div>
     <div className="container mt-5 p-5">
        <div className="row">
          <PricingBox
            image="media\images\pricingEquity.svg"
            head="Free equity delivery"
            para="All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage."
          />
          <PricingBox
            image="media\images\intradayTrades.svg"
            head="Intraday and F&O trades"
            para="Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades."
          />
          <PricingBox
            image="media\images\pricingEquity.svg"
            head="Free direct MF"
            para="All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges."
          />
        </div>
    </div>
     
    </>
  );
}

export default Hero;

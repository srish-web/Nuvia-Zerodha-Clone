import React from 'react';
import Hero from './Hero';
import LeftSection from './LeftISection';
import RightSection from './RightSection';
import Universe from './Universe';
function Product() {
    return (
        <div className="container">

        
        <Hero/>
        <LeftSection
        Image="media\images\kite.png"
        head="Kite"
        para="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        TryDemo="/"
        LearnMore="/"
        GPlay=""
        AppStore=""
        />
        <RightSection
        Image="media\images\console.png"
        head="Console"
        para="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        LearnMore="/"
        />
      
        <LeftSection
        Image="media\images\coin.png"
        head="Coin"
        para="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        coin="/"
        GPlay=""
        AppStore=""
        />
        <RightSection
        Image="media\images\kiteconnect.svg"
        head="Kite Connect API"
        para="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        kiteconnect="/"
        />
        <LeftSection
        Image="media\images\varsity-products.svg"
        head="Varsity mobile"
        para="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        GPlay=""
        AppStore=""
        />
        <h2 className='text-center fs-4 text-muted my-5'>Want to know more about our technology stack? Check out the Zerodha.tech blog.</h2>
        <Universe/>
        </div>
        
     );
}

export default Product;
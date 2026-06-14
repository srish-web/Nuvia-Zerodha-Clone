import React from 'react';
function Hero() {
    return ( 
        <div className='container p-3 mt-5'>
            <div className="row text-center" style={{width: "100%", height: "25%" }}>
                <img src="media/images/HomeHero.png" alt="HeroImage" style={{width: "65%", height: "25%" , margin: "0 auto", padding:"5%"}}/>
                <h1 className='text-body-secondary fs-3'>Invest in everything</h1>
                <p className='text-body-secondary fs-5'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button className='mt-4 mb-5 btn btn-primary fs-5' style={{width: "15%", margin:"0 auto"}}>Signup For Free</button>
                
            </div>

        </div>
     );
}

export default Hero;
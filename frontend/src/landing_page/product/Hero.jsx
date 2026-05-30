import React from 'react';
function Hero() {
    return ( 
        <div className="container my-5 pt-5 border-bottom">
            <div className="row my-5">
                <div className="col text-center my-5">
                    <h1 className='fs-3 '>
                        Zerodha Products
                    </h1>
                    <h3 className='fs-5 mt-3 text-muted'>
                        Sleek, modern, and intuitive trading platforms
                    </h3>
                    <p className='fs-6 mt-3 text-muted p-2'>
                        Check out our <a href="/">investment offerings →</a>
                    </p>
                </div>
            </div>
        </div>
     );
}

export default Hero;
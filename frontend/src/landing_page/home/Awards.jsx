import React from 'react';
function Awards() {
    return ( 
        <div className="container-fluid px-0 ">
           <div className="row mx-0 bg-opacity-10 bg-primary" style={{height:"90px"}}>
            <div className="col-1"></div>
            <div className="col-2">
                <img src="media/images/kc-logo-landing.svg" alt="kc logo" className='mt-4 mx-4'/>
            </div>
            <div className="col-6">
                <p className='mt-3'>Need more? Build your own trading and investing experience with Kite Connect, simple HTTP APIs to place orders, stream market data, manage your account, and more. <a href="/" className='text-decoration-none'>Explore <i class="fa-solid fa-arrow-right"></i></a></p>
            </div>
            <div className="col-2">
                <img src="media/images/kc-banner-image.svg" alt="kc banner" className='mt-4 w-75'/>
            </div>
            <div className="col-1"></div>
           </div>
        </div>
     );
}

export default Awards;
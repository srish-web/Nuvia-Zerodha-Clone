import React from 'react';
function Pricing() {
    return ( 
        <div className="container" >
            <div className="row" style={{marginTop: "7%", marginLeft: "2rem" ,height: "200px"}}>
                <div className="col-5 mt-5">
                    <h2 className='text-body-secondary fs-4'>Unbeatable pricing</h2>
                    <p className='mt-3'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href="/" className='text-decoration-none'>See pricing <i class="fa-solid fa-arrow-right"></i></a>
                </div>
                <div className="col-7 mt-5">
                    <div className="row">
                        <div className="col-2 d-flex align-items-end justify-content-start p-0">
                            <img src="media\images\pricing0.svg" alt="" />
                        </div>
                        <div className="col-2 d-flex align-items-end justify-content-start p-0">
                            <p style={{fontSize: "0.65rem"}}>Free account opening</p>
                        </div>
                        <div className="col-2 d-flex align-items-end justify-content-start p-0">
                            <img src="media\images\pricingEquity.svg" alt="" />
                            
                        </div>
                        <div className="col-2 d-flex align-items-end justify-content-start p-0">
                            <p style={{fontSize: "0.65rem"}}>Free equity delivery and direct mutual funds</p>
                        </div>
                        <div className="col-2 d-flex align-items-end justify-content-start p-0">
                            <img src="media\images\intradayTrades.svg" alt="" />
                           
                        </div>
                        <div className="col-2 d-flex align-items-end justify-content-start p-0">
                            <p style={{fontSize: "0.65rem"}}>Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Pricing;
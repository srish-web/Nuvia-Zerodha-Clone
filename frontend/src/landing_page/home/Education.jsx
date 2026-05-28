import React from 'react';
function Education() {
    return ( 
        <div className="container">
            <div className="row mt-5">
                <div className="col-6 mt-5">
                    <img src="media\images\education.svg" alt="" />
                </div>
                <div className="col-6 mt-5">
                    <h2 className='mt-5 text-body-secondary fs-4'>Free and open market education</h2>
                    <p className='mt-3 text-body-secondary fs-6'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href="/">Varsity <i class="fa-solid fa-arrow-right"></i></a>
                    <p className='mt-5 text-body-secondary fs-6'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href="/">TradingQ&A <i class="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
        </div>
     );
}

export default Education;
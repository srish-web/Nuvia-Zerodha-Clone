import React from 'react';
function Awards() {
    return ( 
        <div className="container mt-5">
            <div className="row m-5">
                <div className="col-5 mt-5">
                   <h1 className='text-body-secondary fs-4 mb-5'>Trust with confidence</h1>
                   <h2 className='text-body-secondary fs-5'>Customer-first always</h2>
                   <p className='text-body-secondary fs-6 mb-5'>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>
                   <h2 className='text-body-secondary fs-5 mt-3'>No spam or gimmicks</h2>
                   <p className='text-body-secondary fs-6 mb-5'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.</p>
                   <h2 className='text-body-secondary fs-5 mt-3'>The Zerodha universe</h2>
                   <p className='text-body-secondary fs-6 mb-5'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                   <h2 className='text-body-secondary fs-5 mt-3'>Do better with money</h2>
                   <p className='text-body-secondary fs-6 mb-5'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                   
                </div>
                <div className="col-7 mt-5">
                    <img src="media/images/ecosystem.png" alt="" className='w-100'/>
                    <p className='text-center'><a className="m-2 text-decoration-none" href="/">Explore our products<i class="fa-solid fa-arrow-right"></i></a><a className="m-2 text-decoration-none" href="/">Try Kite demo<i class="fa-solid fa-arrow-right"></i></a></p>
                </div>
            </div>
        </div>
     );
}

export default Awards;
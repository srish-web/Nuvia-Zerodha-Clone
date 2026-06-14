import React from 'react';
function Awards() {
    return ( 
        <div className="container mt-5">
            <div className="row m-5">
                <div className="col-5 mt-5">
                   <h1 className='text-body-secondary fs-4 mb-5'>Trust with confidence</h1>
                   <h2 className='text-body-secondary fs-5'>Trust Through Technology</h2>
                   <p className='text-body-secondary fs-6 mb-5'>Built with modern web technologies and industry-inspired design principles, Nuvia demonstrates how scalable and user-friendly fintech applications can be created using the MERN stack.</p>
                   <h2 className='text-body-secondary fs-5 mt-3'>Customer-Centric Design</h2>
                   <p className='text-body-secondary fs-6 mb-5'>Every feature is designed with usability in mind. Clean interfaces, intuitive navigation, and responsive layouts ensure a seamless experience across devices.</p>
                   <h2 className='text-body-secondary fs-5 mt-3'>The MERN Ecosystem</h2>
                   <p className='text-body-secondary fs-6 mb-5'>Powered by MongoDB, Express.js, React.js, and Node.js, Nuvia showcases full-stack development concepts including authentication, API integration, database management, and real-time user interactions.</p>
                   <h2 className='text-body-secondary fs-5 mt-3'>Continuous Learning & Innovation</h2>
                   <p className='text-body-secondary fs-6 mb-5'>Nuvia is more than a project—it's a learning journey. Each feature represents an opportunity to explore new technologies, improve development practices, and build better software solutions.</p>
                   
                </div>
                <div className="col-7" style={{marginTop:"20%"}}>
                    <img src="media/images/dashboard.png" alt="" className='w-100'/>
                    <p className='text-center'><a className="m-2 text-decoration-none" href="/">Explore our products<i class="fa-solid fa-arrow-right"></i></a><a className="m-2 text-decoration-none" href="/">Try Kite demo<i class="fa-solid fa-arrow-right"></i></a></p>
                </div>
            </div>
        </div>
     );
}

export default Awards;
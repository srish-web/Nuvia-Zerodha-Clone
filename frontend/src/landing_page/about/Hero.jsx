import React from 'react';
function Hero() {
    return (
        <>
        <div className="container mt-5 pt-5 mb-5 border-bottom">
            <div className="row mt-5 mb-5 ">
                <h2 className='fs-4 text-center mt-5 mb-5 text-muted '>
                    We started by exploring the architecture behind modern trading platforms.
                    <br />
                    Today, we're building intuitive experiences with the MERN stack.
                </h2>
            </div>
        </div>
        <div className="container" style={{marginTop:"7%", marginBottom:"10%"}}>
            <div className="row">
                <div className="col-2"></div>
                <div className="col-4">
                    <p className='fs-6'>Nuvia is a full-stack trading platform inspired by modern fintech applications and built using the MERN stack (MongoDB, Express.js, React.js, and Node.js). The project was developed to gain hands-on experience in designing scalable web applications and understanding the architecture behind real-world investment platforms.
                    <br /><br />
                    Through Nuvia, I implemented features such as user authentication, responsive user interfaces, API integration, database management, and seamless frontend-backend communication.
                    <br /><br />
                     The project allowed me to explore industry-standard development practices while strengthening my skills across the entire web development lifecycle.
                    </p>
                </div>
                <div className="col-4">
                    <p className='fs-6'>
                        Built with a focus on performance, usability, and clean design, Nuvia reflects my passion for creating practical applications that solve real-world problems. Every component of the platform was carefully crafted to provide a smooth and intuitive user experience.
                        <br /><br />
                        More than just a clone project, Nuvia represents my journey as a developer—applying MERN stack technologies to transform ideas into functional products while continuously learning and improving along the way.
                        <br /><br />
                        As I continue growing as a software developer, I plan to expand Nuvia with new features, enhanced functionality, and deeper integrations to create an even more complete trading platform experience.
                    </p>
                </div>
                <div className="col-2"></div>
            </div>
        </div>
        </>
     );
}

export default Hero;
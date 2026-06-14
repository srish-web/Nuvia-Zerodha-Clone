import React from 'react';
function Team() {
    return ( 
        <div className="container">
            <div className="row">
                <div className="col-2"></div>
                <div className="col-4">
                    <img src="media\images\srishtyGupta.png" alt="nithinKamath" className="d-block mt-5" style={{height: "350px", width:"300px", borderRadius:"50%"}}/>
                    <p className='fs-4 mt-3 text-center' style={{marginRight:"30%"}}>
                        Srishty Gupta
                        <br />
                        Creator & Developer, Nuvia
                    </p>
                </div>
                <div className="col-4">
                    <h1>People</h1>
                    <p>
                        Srishty Gupta is the creator and developer of Nuvia, a modern stock trading platform inspired by the vision of making investing simple, accessible, and user-friendly. Built as a full-stack web development project, Nuvia represents her passion for technology, finance, and creating intuitive digital experiences.
                        <br /><br />
                        As a Computer Science student and aspiring software developer, she enjoys building real-world applications that combine clean design with practical functionality. Through Nuvia, she aims to showcase her skills in frontend development, backend architecture, database management, and responsive user interface design.
                        <br /><br />
                        When not coding, she enjoys exploring new technologies, solving programming challenges, contributing to projects, and continuously learning to become a better developer.
                        <br /><br />
                        Connect on GitHub / LinkedIn / Portfolio
                    </p>
                </div>
                <div className="col-2"></div>
            </div>
        </div>
     );
}

export default Team;
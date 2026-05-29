import React from 'react';
function NotFound() {
    return ( 
        <div className='container p-3'>
            <div className="row" style={{width: "100%", height: "25%" }}>
                <h1 className='text-body-secondary fs-3'>404 Not Found</h1>
                <p className='text-body-secondary fs-5'>Sorry, the page you are looking for does not exists.</p>
                
            </div>

        </div>
     );
}

export default NotFound;
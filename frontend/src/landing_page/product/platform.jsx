import React from 'react';
function Platform({image, content}) {
    return ( 
            <div className='p-5' style={{display:"flex", flexDirection:"column", alignItems: "center", justifyContent:"center", height:"33%", width:"33%"}}>
                <img src={image} alt="img" style={{height:"60px", maxWidth:"200px"}}/>
                <br />
                <p className="text-muted text-center" style={{fontSize:"13px"}}>{content}</p>
            </div>
     
     );
}

export default Platform;
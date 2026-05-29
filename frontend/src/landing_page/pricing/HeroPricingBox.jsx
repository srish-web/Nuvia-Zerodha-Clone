import React from 'react';
function PricingBox({image, head, para}) {
    return ( 
        <div className="col">
            <img src={image} alt="" style={{height: "60%", width: "60%", display:"block", marginLeft:"auto", marginRight:"auto"}}/>
            <div>
                <h1 className='fs-3 text-center'>{head}</h1>
                <p className='text-body-secondary fs-6 text-center'>{para}</p>
            </div>
        </div>
     );
}

export default PricingBox;
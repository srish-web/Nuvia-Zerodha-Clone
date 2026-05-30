import React from 'react';
function CreateTicket() {
    return ( 
        <div className="container-fluid bg-light pb-5">
            <div className="row mt-5">
            <div style={{display:"flex", justifyContent:"space-between", padding: "2% 10% 2% 10%"}}>
                <h1 className='mt-3'>Support Portal</h1>
                <button className='mt-4 btn btn-primary fs-5'>My Ticket</button>
                
            </div>
            <div class="input-group input-group-lg" style={{padding: "0 10% 0 10%"}}>
                    <span class="input-group-text" id="basic-addon1"><i class="fa-brands fa-sistrix"></i></span>
                    <input type="text" class="form-control" placeholder="Eg. How do i open my account" aria-label="Username" aria-describedby="basic-addon1"/>
            </div>
            </div>
        </div>
     );
}

export default CreateTicket;
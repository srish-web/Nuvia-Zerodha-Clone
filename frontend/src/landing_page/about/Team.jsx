import React from 'react';
function Team() {
    return ( 
        <div className="container">
            <div className="row">
                <div className="col-2"></div>
                <div className="col-4">
                    <img src="media\images\nithinKamath.jpg" alt="nithinKamath" className="d-block mt-5" style={{height: "300px", width:"300px", borderRadius:"50%"}}/>
                    <p className='fs-4 mt-3' style={{marginLeft:"18%"}}>
                        Nithin Kamath
                        <br />
                        Founder, CEO
                    </p>
                </div>
                <div className="col-4">
                    <h1>People</h1>
                    <p>
                        Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
                        <br /><br />
                        He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
                        <br /><br />
                        Playing basketball is his zen.
                        <br /><br />
                        Connect on Homepage / TradingQnA / Twitter
                    </p>
                </div>
                <div className="col-2"></div>
            </div>
        </div>
     );
}

export default Team;
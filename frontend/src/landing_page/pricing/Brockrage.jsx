import React from 'react';
function Brockrage() {
    return ( 
        <div className="container mb-5">
            <h1 className='text-body-secondary fs-3 mt-5 pt-5'>Charges explained</h1>
            <div className="row mt-3 mb-5">
                <div className="col">
                    <h2 className='text-body-secondary fs-4'>
                        Securities/Commodities transaction tax
                    </h2>
                    <p  className='text-body-secondary fs-6'>
                        Tax by the government when transacting on the exchanges. Charged as above on both buy and sell sides when trading equity delivery. Charged only on selling side when trading intraday or on F&O.<br/>br

                        When trading at Zerodha, STT/CTT can be a lot more than the brokerage we charge. Important to keep a tab.
                    </p>
                </div>
                <div className="col">
                    <h2 className='text-body-secondary fs-4'>
                        GST
                    </h2>
                    <p  className='text-body-secondary fs-6'>
                        Tax levied by the government on the services rendered. 18% of ( brokerage + SEBI charges + transaction charges)
                    </p>
                </div>
            </div>
        </div>
     );
}

export default Brockrage;
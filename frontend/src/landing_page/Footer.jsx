import React from 'react';
import {Link} from 'react-router-dom';
function Footer() {
    return ( 
        <div className="container-fluid bg-light border-top">
            <div className="container">
            <div className="row" style={{marginLeft:"2%", marginTop:"5%"}}>
                <div className="col" style={{marginRight:"2%"}}>
                    <Link to="/">
                    <img src="media/images/logo.png" alt="" style={{width: "60%"}}/>
                    </Link>
                    <p className='small text-body-secondary mt-3'>© 2010 - 2026, Zerodha Broking Ltd. <br /> All rights reserved.</p>
                </div>
                <div className="col" >
                    <h3 className='text-body-secondary fs-4'>Account</h3>
                        <a href="/" className='text-decoration-none d-block mb-2 text-body-secondary'>Minor demat account</a>
                        <a href="/" className='text-decoration-none d-block mb-2 text-body-secondary'>NRI demat account</a>
                        <a href="/" className='text-decoration-none d-block mb-2 text-body-secondary'>Open demat account</a>
                        <a href="/" className='text-decoration-none d-block mb-2 text-body-secondary'>HUF demat account</a>
                        <a href="/" className='text-decoration-none d-block mb-2 text-body-secondary'>Commodity</a>
                        <a href="/" className='text-decoration-none d-block mb-2 text-body-secondary'>Dematerialisation</a>
                        <a href="/" className='text-decoration-none d-block mb-2 text-body-secondary'>Fund transfer</a>
                        <a href="/" className='text-decoration-none d-block mb-2 text-body-secondary'>MTF</a>
                </div>
                <div className="col" >
                    <h3 className='text-body-secondary fs-4'>Support</h3>
                        <a href="/" className='text-decoration-none d-block mb-2 text-body-secondary'>Contact us</a>
                        <a href="/" className='text-decoration-none d-block mb-2 text-body-secondary'>Support portal</a>
                        <a href="/" className='text-decoration-none d-block mb-2 text-body-secondary'>How to file a complaint?</a>
                        <a href="/" className='text-decoration-none d-block mb-2 text-body-secondary'>Status of your complaints</a>
                        <a href="/" className='text-decoration-none d-block mb-2 text-body-secondary'>Bulletin</a>
                        <a href="/" className='text-decoration-none d-block mb-2 text-body-secondary'>Circular</a>
                        <a href="/" className='text-decoration-none d-block mb-2 text-body-secondary'>Z-Connect blog</a>
                        <a href="/" className='text-decoration-none d-block mb-2 text-body-secondary'>Downloads</a>
                </div>
                <div className="col" >
                    <h3 className='text-body-secondary fs-4'>Company</h3>
                        <a href="/" className='text-decoration-none d-block mb-2 text-body-secondary'>About</a>
                        <a href="/" className='text-decoration-none d-block mb-2 text-body-secondary'>Philosophy</a>
                        <a href="/" className='text-decoration-none d-block mb-2 text-body-secondary'>Press & media</a>
                        <a href="/" className='text-decoration-none d-block mb-2 text-body-secondary'>Careers</a>
                        <a href="/" className='text-decoration-none d-block mb-2 text-body-secondary'>Zerodha Cares (CSR)</a>
                        <a href="/" className='text-decoration-none d-block mb-2 text-body-secondary'>Zerodha.tech</a>
                        <a href="/" className='text-decoration-none d-block mb-2 text-body-secondary'>Open source</a>
                        <a href="/" className='text-decoration-none d-block mb-2 text-body-secondary'>Referral program</a>
                </div>
                <div className="col">
                    <h3 className='text-body-secondary fs-4'>Quick Links</h3>
                        <a href="/" className='text-decoration-none d-block mb-2 text-body-secondary'>Upcoming IPOs</a>
                        <a href="/" className='text-decoration-none d-block mb-2 text-body-secondary'>Brokerage charges</a>
                        <a href="/" className='text-decoration-none d-block mb-2 text-body-secondary'>Market holidays</a>
                        <a href="/" className='text-decoration-none d-block mb-2 text-body-secondary'>Economic calendar</a>
                        <a href="/" className='text-decoration-none d-block mb-2 text-body-secondary'>Calculators</a>
                        <a href="/" className='text-decoration-none d-block mb-2 text-body-secondary'>Markets</a>
                        <a href="/" className='text-decoration-none d-block mb-2 text-body-secondary'>Sectors</a>
                        <a href="/" className='text-decoration-none d-block mb-2 text-body-secondary'>Gift Nifty</a>
                </div>
            </div>
            <div className="row">
                <p className='text-body-secondary mt-5' style={{fontSize:"11px"}}>
                    Zerodha Broking Ltd.: Member of NSE, BSE, MCX & MSEI – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to <a href='/'>complaints@zerodha.com</a>, for DP related to <a href="/">dp@zerodha.com</a>. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF 
                    <br /> <br />
                    Procedure to file a complaint on <a href="/">SEBI SCORES</a>: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances
                    <br /> <br />
                    <a href="/">Smart Online Dispute Resolution</a> | <a href="/">Grievances Redressal Mechanism</a>
                    <br /><br />
                    Investments in securities market are subject to market risks; read all the related documents carefully before investing.
                    <br /><br />
                    Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.
                    <br /><br />
                    India's largest broker based on networth as per NSE. <a href="/">NSE broker factsheet</a>
                    <br /><br />
                    "Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers/depository participants. Receive information of your transactions directly from Exchange/Depositories on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, <a href="/">please create a ticket here</a>.
                    <br /><br />
                    *Customers availing insurance advisory services offered by Ditto (Tacterial Consulting Private Limited | IRDAI Registered Corporate Agent (Composite) License No CA0738) will not have access to the exchange investor grievance redressal forum, SEBI SCORES/ODR, or arbitration mechanism for such products.
                    <br /><br />
                    Fixed deposit products offered on this platform are third-party products (TPP) and are not Exchange traded products. These are offered through Blostem Fintech Private Limited. Zerodha Broking Limited (SEBI Registration No.: INZ000031633) is acting solely as a distributor for these products. Any disputes arising with respect to such distribution activity will not have access to SEBI SCORES/ODR, Exchange Investor Grievance Redressal Forum, or Arbitration mechanism. Fixed deposits are regulated by the Reserve Bank of India (RBI).
                </p>
            </div>
            </div>
        </div>
     );
}

export default Footer;
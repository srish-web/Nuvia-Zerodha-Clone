import React from 'react';
function LeftSection({Image, head, para, TryDemo, LearnMore, coin, GPlay, AppStore}) {
    return ( 
        <div className="container mt-5 mx-5">
            <div className="row mt-5 mx-5">
                <div className="col mt-5 mx-5" style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                    <img src={Image} alt="Kite" style={{justifyContent:"center", alignItems:"center"}}/>
                </div>
                <div className="col mt-5 mx-4" style={{display:"flex", flexDirection:"column", justifyContent:"center"}}>
                    <h1 className="mt-5 mx-5 fs-3 text-muted">{head}</h1>
                    <p className="mt-2 mx-5 fs-6 text-muted">{para}</p>
                    <div className="mt-3 mx-5">
                        {TryDemo && <a href={TryDemo}>Try Demo <i class="fa-solid fa-arrow-right"></i></a>}
                        {LearnMore && <a href={LearnMore}>Learn More <i class="fa-solid fa-arrow-right"></i></a>}
                        {coin && <a href={coin}>Coin <i class="fa-solid fa-arrow-right"></i></a>}
                    </div>
                    <div className="mt-4 mx-5">
                    <a href={GPlay}><img src="media\images\googlePlayBadge.svg" alt="" /></a>
                    <a href={AppStore}><img src="media\images\appstoreBadge.svg" alt=""/></a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default LeftSection;
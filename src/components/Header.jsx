import React from 'react';

import './HeaderNav.css';

const logo = 'https://storage.googleapis.com/gweb-uniblog-publish-prod/images/yt_gaming_truncated_rgb_white.max-2800x2800.png'

const HeaderNav = () => {
    return ( 
        <>
        <div className="container-nav">
           <nav>
                <div className="mobile-menu">
                    <div className="line-1"></div>
                    <div className="line-2"></div>
                    <div className="line-3"></div>
                </div>
                <header><img src={logo} alt=""/></header>
                <div className="container-search">
                <input type="text" placeholder='Pesquisar'/> 
                <button><ion-icon name="search-outline"></ion-icon></button>
                    <div className="audio-search"></div>
                </div>

                <div className="icons-assables">
                    <div className="icon-1"><ion-icon name="videocam-outline"></ion-icon></div>
                    <div className="icon-2"><ion-icon name="apps-outline"></ion-icon></div>
                    <div className="icon-3"><ion-icon name="notifications-outline"></ion-icon></div>
                    <div className="user-icon"><ion-icon name="person-circle-outline"></ion-icon></div>
                </div>
           </nav>
            <hr />
        </div>
        </>
     );
}
 
export default HeaderNav;
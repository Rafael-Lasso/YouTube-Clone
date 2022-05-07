import React from 'react';

import './Videos.css'

const thumbReact = "https://i.ytimg.com/vi/ErjWNvP6mko/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCs-EWOPDL1kUIiS_tiicL534Qu0w"

const Videos = () => {
    return ( 
        <>
            <div className="content-video">
                <div className="video">
                    <div className="body-video">
                        <img src={thumbReact} alt="" />
                    </div>
                    <footer className='footer-video'>
                        <div className="fotoDoCanal"></div>
                        <div className="bottomVideo">
                        <h1>Eii! Este é o Titulo do Video</h1>
                        <h2>Nome do Canal</h2>
                            <div className="info-video">
                                <h4>Numero de Views</h4>
                                <time>Numero de dias</time>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </>
     );
}
 
export default Videos;
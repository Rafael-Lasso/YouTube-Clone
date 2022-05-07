import React from 'react';

import './NavBar.css'

const NavBar = () => {
    return ( 
    <>
        <div className="container">
            <div className="navbar">
                <div className="container-options">
                <ul>
                    <li><ion-icon name="home-outline"></ion-icon>Inicio</li>
                    <li><ion-icon name="compass-outline"></ion-icon>Explorar</li>
                    <li><ion-icon name="logo-youtube"></ion-icon>Shorts</li>
                    <li><ion-icon name="albums-outline"></ion-icon>Inscrições</li>
                </ul>
                <hr />
                </div>
                <div className="container-options">
                <ul>
                    <li><ion-icon name="book-outline"></ion-icon>Biblioteca</li>
                    <li><ion-icon name="timer-outline"></ion-icon>Historico</li>
                    <li><ion-icon name="play-circle-outline"></ion-icon>Seus videos</li>
                    <li><ion-icon name="time-outline"></ion-icon>Assistir Mais Tarde</li>
                    <li><i class="fa fa-thumbs-up"></i> Videos marcados com Gostei</li>
                </ul>
                <hr />
                </div>
                <div className="container-options">
                <ul>
                    <strong><span>Inscrições</span></strong>
                    <li><div className="ftCanal"></div>Canal 1</li>
                    <li><div className="ftCanal"></div>Canal 1</li>
                    <li><div className="ftCanal"></div>Canal 3</li>                   
                </ul>
                <hr />
                </div>
                <div className="container-options">
                <ul>
                    <strong><span>Mais do Youtube</span></strong>
                    <li><ion-icon name="logo-youtube"></ion-icon>YouTube  Premium</li>
                    <li><ion-icon name="videocam-outline"></ion-icon>Filmes</li>
                    <li><ion-icon name="game-controller-outline"></ion-icon>Jogos</li>
                    <li><ion-icon name="wifi-outline"></ion-icon>Ao vivo</li>
                    <li><ion-icon name="albums-outline"></ion-icon>Aprender</li>
                    <li><ion-icon name="trophy-outline"></ion-icon>Esportes</li>
                </ul>
                <hr />
                </div>
                <div className="container-options">
                <ul>
                    <li><ion-icon name="settings-outline"></ion-icon>Configuraçõpes</li>
                    <li><ion-icon name="flag-outline"></ion-icon>Historico de Denuncias</li>
                    <li><ion-icon name="help-circle-outline"></ion-icon>Ajuda</li>
                    <li><ion-icon name="alert-circle-outline"></ion-icon>Enviar feedback</li>
                </ul>
                <hr />
                </div>

                <div className="container-last-options">
                <ul>
                    <li>Sobre Imprensa</li>
                    <li>Direitos Autorais</li>
                    <li>Entre em contato</li>
                    <li>Criadores de conteúdo</li>
                    <li>Publicidades e Desenvolvedores</li>
                    <br />
                    <li>Termo de Privacidade</li>
                    <li>Politica e Segurança</li>
                    <li>Como Funciona o Youtube</li>
                    <li>Testar is novos recursos</li>
                    <li>2022 Google RRR</li>
                </ul>
                <hr />
                </div>

            </div>
        </div>
    </> 
    );
}
 
export default NavBar;
import React from 'react'
import '../styles/app.css'
import {AppBar, IconButton, Toolbar} from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import {CarouselPuntos} from "./Carousel";

export default function DefaultLayout({data, children, bodyClass, isHome}) {
    return (
        <>
            <AppBar style={{backgroundColor: 'white'}}>
                <Toolbar>
                    <img style={{position: 'absolute', zIndex: '100', marginTop: '10px', height: '15vh', left: '3px'}}
                         src="https://www.penalolen.cl/wp-content/uploads/2016/10/gestion-residuos-1.png"
                         alt="Icono de gestión de residuos sólidos"
                         title="Icono de gestión de residuos sólidos"
                         itemProp="thumbnailUrl"/>
                    <div style={{position: 'absolute', right: 20, color: 'black'}}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={() => {
                                window.open('https://www.instagram.com/talagantemuni/?hl=es#:~:text=Municipalidad%20de%20Talagante%20(%40talagantemuni)%20%E2%80%A2%20Instagram%20photos%20and%20videos', '_blank');
                            }}
                            color="inherit"
                        >
                            <InstagramIcon/>
                        </IconButton>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={() => {
                                window.open('https://es-la.facebook.com/TalaganteMuni/', '_blank')
                            }}
                            color="inherit"
                        >
                            <FacebookIcon/>
                        </IconButton>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={() => {
                                window.open('https://twitter.com/MuniTalagante', '_blank')
                            }}
                            color="inherit"
                        >
                            <TwitterIcon/>
                        </IconButton>

                    </div>
                </Toolbar>
            </AppBar>
            <div className="viewport">
                <CarouselPuntos/>

                <div className="viewport-top">
                    <main>
                        {children}
                    </main>
                </div>
                <div className="viewport-bottom" style={{marginTop: '8em'}}>
                    <footer className="site-foot">
                        <div className="site-foot-nav container">
                            <img
                                src="https://static.wixstatic.com/media/70cfc6_fb2f8a3e9e004358a57df96c742db60c~mv2.png/v1/fill/w_321,h_169,al_c,q_85,usm_0.66_1.00_0.01/marca%20grafica%20talagante.webp"
                                alt="marca grafica talagante.png"
                                style={{width: '20%'}}
                            />
                            <div>
                                <ul>
                                    <ol>Links</ol>
                                    <li>
                                        <a src={'https://www.munitalagante.cl/punto-limpio'}>Municipalidad de
                                            Talagante</a>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </>
    )
}






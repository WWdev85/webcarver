
import React from'react';
import { BrowserRouter , Route, Link } from 'react-router-dom';

import TitlePage from './titlePage';
import Contact from './contact';
import Realizations from './realizations';
import AboutUs from './aboutUs';
import Offer from './offer';

import Menu from '../tools/menu';
import Scroll from '../tools/scroll';


class App extends React.Component {
 
    componentDidMount(){
        new Menu();
        new Scroll();
        
    }
     
  
    render(){

    

        return(
        <BrowserRouter>
            <header className="header">
                <a href="#" className="header__logoImg backgroundImage"></a>
                <div className="header__menuButton backgroundImage"></div>
            </header>
            <nav className="navigation">
                <div className="navigation__wrapper">
                    <ul className="navigation__list">
                        <li className="navigation__item"><Link className="navigation__link navigation__link--active link" data-id="0" to="/">Strona Główna</Link></li>
                        <li className="navigation__item"><Link className="navigation__link link" data-id="1" to="/onas">O nas</Link></li>
                        <li className="navigation__item"><Link className="navigation__link link" data-id="2" to="/oferta">Oferta</Link></li>
                        <li className="navigation__item"><Link className="navigation__link link" data-id="3" to="/realizacje">Realizacje</Link></li>
                        <li className="navigation__item"><Link className="navigation__link link" data-id="4" to="/kontakt">Kontakt</Link></li>

                    </ul>
                    <div className="navigation__contact">
                        <a className="navigation__phone link" href="tel:736859331"><div className="navigation__phoneIcon"></div>736 859 331</a>
                        <a className="navigation__facebookIcon .backgroundImage" href="https://www.facebook.com"></a>
                    </div>
                </div>
            </nav>
            <section className="router">
                
                    <Route path="/" exact render={() =><TitlePage/>  } /> 
                    <Route path="/onas" render={() =><AboutUs/>  } /> 
                    <Route path="/oferta" render={() =><Offer/>  } /> 
                    <Route path="/realizacje" render={() =><Realizations/>  } /> 
                    <Route path="/kontakt" render={() =><Contact/>  } /> 
                   
            </section>
            <footer className="footer">
            <div className="footer__wrapper">
            <ul className="footer__list">
                            <li className="footer__item"><Link className="footer__link texts" data-id="1" to="/onas">O nas</Link></li>
                            <li className="footer__item"><Link className="footer__link texts" data-id="2" to="/oferta">nasza oferta</Link></li>
                            <li className="footer__item"><Link className="footer__link texts" data-id="3" to="/realizacje">nasze realizacje</Link></li>
                            <li className="footer__item"><Link className="footer__link texts" data-id="4" to="/kontakt">Skontaktuj się z nami</Link></li>

                         </ul>
                         
                        <div className="footer__contacts">

                            <a className="footer__contact" href="tel:736859331">
                                <div className="footer__image phone"></div>
                                <p className="footer__text texts">736 859 331</p>
                            </a>
                            <a className="footer__contact" href="mailto:biuro@webcarver.pl">
                                <div className="footer__image mail"></div>
                                <p className="footer__text texts">biuro@webcarver.pl</p>
                            </a>
                            <div className="footer__contact" >
                                <div className="footer__image location"></div>
                                <p className="footer__text texts">Jawidz 8A/3, 21-077 Spiczyn</p>
                            </div>
                            <a className="footer__contact" href="https://www.facebook.com">
                                <div className="footer__image facebook"></div>
                                <p className="footer__text texts">facebook</p>
                            </a>
                        </div>
               
                        <div className="footer__logo"></div>  
                    </div>
                <p className=" footer__copyrights texts">©Copyright 2020 webcarver.pl</p>
            </footer>
            <div className="scrollUp">
            </div> 
        </BrowserRouter>
        );
    }    

}


export default App;
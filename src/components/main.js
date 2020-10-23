
import React from'react';
import { BrowserRouter , Route, Link, Redirect } from 'react-router-dom';
import Menu from '../tools/menu';

class App extends React.Component {
    state ={

    }
    componentDidMount(){
        new Menu();
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
                    <li className="navigation__item"><Link className="navigation__link link" data-id="1" to="/">O nas</Link></li>
                    <li className="navigation__item"><Link className="navigation__link link" data-id="2" to="/">Oferta</Link></li>
                    <li className="navigation__item"><Link className="navigation__link link" data-id="3" to="/">Kontakt</Link></li>

                </ul>
                <div className="navigation__contact">
                    <a className="navigation__phone link" href="tel:736859331"><div className="navigation__phoneIcon"></div>736 859 331</a>
                    <a className="navigation__facebookIcon .backgroundImage" href="https://www.facebook.com"></a>
                </div>
                </div>
            </nav>
        </BrowserRouter>
        );
    }    

}





export default App;
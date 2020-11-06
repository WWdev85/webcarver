import React, { Component } from 'react';
import Slider from '../tools/slider';
import Portfolio from '../tools/portfolio';

class titlePage extends React.Component {

    componentDidMount(){
        new Slider();
        new Portfolio();
    }
    render(){

   
    return(
        <div className="page">
            <section className="page__slider">
                <div className="slider__image slider__image--active backgroundImage" data-id="1">
                    <p className="slider__title slider__title--active">Tworzymy strony internetowe: </p>
                    <h2 className="slider__text slider__text--active">Nowoczesne i zgodne z aktualnymi standartami</h2>
                </div>
                <div className="slider__image backgroundImage" data-id="2">
                    <p className="slider__title">Tworzymy strony internetowe: </p>
                    <h2 className="slider__text">Świetnie wyglądające na urządzeniach mobilnych</h2>
                </div>
                <div className="slider__image backgroundImage" data-id="3">
                    <p className="slider__title">Tworzymy strony internetowe: </p>
                    <h2 className="slider__text">Zoptymalizowane pod kątem wyszukiwarek internetowych</h2>
                </div>
                <div className="slider__squares">
                    <div className="slider__square slider__square--active" data-id="1"></div>
                    <div className="slider__square" data-id="2"></div>
                    <div className="slider__square" data-id="3"></div>

                </div>
            </section>
            <section className="page__about">
                <h1 className="about__title titles">Projektowanie Stron Internetowych</h1>
                <p className="about__text texts">Oferujemy kompleksową usługę tworzenia stron oraz sklepów internetowych obejmującą:</p>
                <ul className="about__list texts" >
                    <li className="about__listItem texts">stworzenie koncepcji,</li>
                    <li className="about__listItem texts">stworzenie strony internetowej,</li>
                    <li className="about__listItem texts">wdrożenie i hosting,</li>
                    <li className="about__listItem texts">optymalizację pod kątem wyszukiwarek internetowych,</li>
                    <li className="about__listItem texts">aktualizację treści.</li>
                </ul>
             </section>
             <section className="page__offer">
                <h1 className="page__offerTitle titles">Oferta</h1>
                <div className="page__offerItem">
                    <div className="offerItem__image"></div>
                    <p className="offerItem__text link">Strona Internetowa</p>
                    <p className="offerItem__text texts">Zaprojektujemy dla Ciebie profesjonalną stronę internetową, dostosowaną do urządzeń mobilnych.</p>
                </div>
                <div className="page__offerItem">
                <div className="offerItem__image"></div>
                    <p className="offerItem__text link">Sklep Internetowy</p>
                    <p className="offerItem__text texts">Sprzedawaj w internecie 24h na dobę przez 7 dni w tygodniu dzięki sklepowi internetowemu.</p>
                </div>
       
             </section>
             <section className="page__portfolio">
                <h1 className="portfolio__title titles">Realizacje</h1>
                <div className="portfolio__projects">
                    <div className="portfolio__project portfolio__kancelariaSW portfolio__project--active">
                        <a className = "project__link "  href="https://wasek-kancelaria.pl"></a>
                        <p className="project__name ">Kancelaria prawna</p>
                    </div>
                    <div className="portfolio__project portfolio__webcarver">
                        <a className = "project__link "  href="https://wasek-kancelaria.pl"></a>
                        <p className="project__name ">Strony Internetowe</p>
                    </div>
                    <div className="portfolio__arrows portfolio__arrowLeft"></div>
                    <div className="portfolio__arrows portfolio__arrowRight"></div>
                </div>
             </section> 
             <section className="page__info">
                <h1 className="info__title titles">Kontakt</h1>
             
             </section>     
            
        </div>
    );
}
}

export default titlePage;
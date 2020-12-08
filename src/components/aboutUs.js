import React, { Component } from 'react';


class AboutUs extends React.Component {

 
   
    render(){

   
        return(
            <section className= "aboutUs">
                 <h2 className="aboutUs__title titles">O Nas</h2>
                 <p className="aboutUs__characterisation texts">Specjalizujemy się w projektowaniu oraz tworzeniu stron i sklepów internetowych. Nasze strony konstruowane są od zera zgodnie z aktualnymi standartami dlatego są unikalne, dostosowane do oczekiwań klienta oraz znajdują się na wysokiej pozycja w wynikach wyszukiwania. Projektując nasze strony internetowe stawiamy na : </p>
                 <ul className="aboutUs__list texts" >
                    <li className="aboutUs__listItem texts">nowoczesny design</li>
                    <li className="aboutUs__listItem texts">unikalność</li>
                    <li className="aboutUs__listItem texts">intuicyjność</li>
                    <li className="aboutUs__listItem texts">logiczne ułożenie elementów</li>
                    <li className="aboutUs__listItem texts">dopasowanie do urządzeń mobilnych</li>
                    <li className="aboutUs__listItem texts">pozycjonowanie w wyszukiwarkach.</li>
                </ul>
                <h3 className="aboutUs__subtitle ">Dlaczego warto wybrać <span>nasze usługi?</span></h3>
                <p className="aboutUs__text texts">Priorytetem dla nas jest zadowolenie klienta, dlatego do tworzenia stron internetowych nie używamy gotowych szablonów. Zaprojektujemy dla Ciebie stronę od podstaw i nadamy jej indywidualny styl który odzwierciedli charakter Twojej firmy. </p>
            </section>
        );   
    } 

}

export default AboutUs;
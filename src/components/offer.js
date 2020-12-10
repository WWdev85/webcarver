import React, { Component } from 'react';


class Offer extends React.Component {

     
    componentDidMount(){
        window.scrollTo({
            top: 0 ,
            
       });
    }
 
   
    render(){

   
        return(
            <section className= "offer">
                 <h2 className="offer__title titles">Oferta</h2>
                 <div className="offer__pages"> 
                    <h3 className="offer__header">Strony <span>Internetowe </span></h3>
                    <div className="offer__page">
                        <h4 className="page__title">strona wizytówka</h4>
                        <p className="page__text texts">Za pomocą strony wizytówki klient w prosty i atrakcyjny sposób przedstawi swoją firmę i ofertę. To tańsze i skuteczne rozwiązanie dla małych i średnich firm, które dysponują mniejszym budżetem i nie potrzebują częstych edycji strony.</p>
                    </div>
                    <div className="offer__page">
                        <h4 className="page__title">blog, funfage</h4>
                        <p className="page__text texts">blog to rodzaj strony internetowej zawierającej odrębne, zazwyczaj uporządkowane chronologicznie wpisy. Blogi umożliwiają zazwyczaj archiwizację oraz kategoryzację i tagowanie wpisów, a także komentowanie notatek przez czytelników danego dziennika sieciowego.</p>
                    </div>
                    <div className="offer__page">
                        <h4 className="page__title">strona www  bez panelu administracyjnego</h4>
                        <p className="page__text texts">Wybór witryny bez panelu zarządzania zdaje egzamin w przypadku kiedy na stronie nie będzie dość często przeprowadzanych aktualizacji i zmian. Po zakończeniu tworzenia strony i oddaniu jej Klientowi, nie będzie On miał możliwości samemu, bez pomocy administratora zmienić treści na stronie. W tym przypadku wszelkie zmiany może dokonać wyłącznie administrator strony, bądź osoba dobrze znająca branżę informatyczną.</p>
                    </div>
                    <div className="offer__page">
                        <h4 className="page__title">strona www  z panelem administracyjnym</h4>
                        <p className="page__text texts">Intuicyjny panel zarządzania pozwoli w przyszłości właścicielowi strony na proste dodawanie artykułów, zdjęć, filmów itp. Opcja z panelem strony zdaje egzamin w branżach gdzie co chwilę coś się zmienia a my chcielibyśmy aktualizować swoją witrynę, bez znajomości programowania i bez pomocy administratora strony.</p>
                    </div>


                 </div>

                 <div className="offer__pages shops"> 
                    <h3 className="offer__header shops__header">Sklepy <span>Internetowe </span></h3>
                    <div className="offer__page shop" >
                        <h4 className="page__title">sklep internetowy</h4>
                        <p className="page__text texts">Serwis internetowy dający możliwość kupowania i sprzedawania  produktów przez Internet. Sklep internetowy oprócz części dostępnych dla kupujących posiada również panel administracyjny przeznaczony wyłącznie dla pracowników sklepu. Najprostszy taki panel posiada opcję dodawania, edytowania i usuwania oferty. Rozbudowane panele administracyjne pozwalają na zarządzanie również bazą klientów, zamówieniami, drzewem kategorii, subskrypcją, wiadomościami na stronie. </p>
                    </div>


                 </div>
            
            </section>
        );   
    } 

}

export default Offer;
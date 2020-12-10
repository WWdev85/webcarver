import React, { Component } from 'react';
import Form from '../tools/form';
import Iframe from 'react-iframe'
class Contact extends React.Component {
    
    componentDidMount(){
        const form = new Form();
        window.scrollTo({
            top: 0 ,
            
       });
       
    }
   
    render(){

   
        return(
          
            <section className="contact">
                 <h2 className="contact__title titles">Kontakt</h2>

                 <form className="form" action="#">
                    <p className="form__header sectionName ">Napisz Do Nas</p>
                    <input type="text" name="name" placeholder="Imię i nazwisko" className="form__name form__field texts"/>
                    <input type="text" name="email" placeholder="Adres e-mail" className="form__email form__field texts"/>
                    <textarea name="message checkbox"  placeholder="Treść wiadomości" className="form__message form__field texts" ></textarea>
                    <div className="form__field checkbox">
                        <input type="checkbox" className="check"/>
                        <label className="allow texts">Wyrażam zgodę na przetwarzanie moich danych osobowych w ramach świadczonej na moją rzecz usługi i w celu związanym z uzdieleniem odpowiezi na moją wiadomość.</label>
                    </div>
                    <button type="submit" className="form__button button ">Wyślij</button>

                </form>
                <div className="contact__info ">
                <p className="form__header sectionName ">Dane kontaktowe</p>
                <div className="contact__field" >
                    <div className="contact__image clock"></div>
                        <p className="contact__text texts">9:00 - 17:00</p>
                    </div>
                    <a className="contact__field " href="tel:736859331">
                        <div className="contact__image phone"></div>
                        <p className="contact__text texts">736 859 331</p>
                    </a>
                    <a className="contact__field " href="mailto:biuro@webcarver.pl">
                        <div className="contact__image mail"></div>
                        <p className="contact__text texts">biuro@webcarver.pl</p>
                    </a>
                    <a className="contact__field " href="https://goo.gl/maps/FLX4jtp4EekH2UXf9" >
                        <div className="contact__image adress"></div>
                        <p className="contact__text texts">Jawidz 8A/3, 21-077 Spiczyn</p>
                    </a>
                    <a className="contact__field " href="https://www.facebook.com/wwwcarver/">
                        <div className="contact__image facebook"></div>
                        <p className="contact__text texts">facebook</p>
                    </a>
                    <div className="contact__field " >
                        <div className="contact__image nip"></div>
                        <p className="contact__text texts">NIP: 918-199-15-70</p>
                    </div>
              
                </div>
                
                <Iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2491.520608752647!2d22.732132215920853!3d51.35672532952942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47224fa117c3aa89%3A0xdb89099e997bd03b!2sWebcarver!5e0!3m2!1spl!2spl!4v1607102303077!5m2!1spl!2spl" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></Iframe>

           
         
            <div className="monit ">
                <p className="monit__content">Wiadomość została wysłana</p>
            </div> 

           
        </section> 
        
        );
    }
}

export default Contact;
import React, { Component } from 'react';


class Realizations extends React.Component {

     
    componentDidMount(){
        window.scrollTo({
            top: 0 ,
            
       });

    }
   
    render(){

   
        return(
            <section className= "realizations">
                 <h2 className="realizations__title titles">Realizacje</h2>
                 <div className="realizations__project ">
                        <a className = "project__link kancelariaSW"  href="https://wasek-kancelaria.pl"></a>
                        <p className="project__name ">Kancelaria prawna</p>
                </div>
                <div className="realizations__project ">
                        <a className = "project__link webcarver"  href="https://webcarver.pl"></a>
                        <p className="project__name ">Projektowanie Stron Internetowych</p>
                </div>

            </section>
        );   
    } 

}

export default Realizations;
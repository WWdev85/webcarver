
class Scroll{
    constructor(){
        this.arrowUp = document.querySelector(".scrollUp");
        this.header = document.querySelector(".header");
        this.navigation = document.querySelector(".navigation");
        this.navigation = document.querySelector(".navigation");
        this.page = document.querySelector(".page");
        this.offset = 70;
        document.addEventListener("scroll", this.handleScroll.bind(this));
        this.arrowUp.addEventListener("click", this.scrollUp);
    }

    handleScroll(){
        if(window.innerWidth > 1023){
            this.offset = 100;
            if(scrollY > this.offset){
                this.navigation.style.position = "fixed";
                this.navigation.style.opacity = "0.7";
                this.page.style.marginTop = "80px";
             }else{
                 this.navigation.style.position = "relative";
                 this.page.style.marginTop = "0";
                 this.navigation.style.opacity = "1";
             }
        }
        
        if(scrollY > 100){
            this.arrowUp.style.display = "block";
        
        }else{
            this.arrowUp.style.display = "none";
        }
    }

    scrollUp(){
      
        window.scrollTo({
            top: document.body.offsetTop ,
            behavior: 'smooth'
       });

    
    }



}


export default Scroll;
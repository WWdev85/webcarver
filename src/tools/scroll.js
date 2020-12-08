
class Scroll{
    constructor(){
        this.arrowUp = document.querySelector(".scrollUp");
        this.header = document.querySelector(".header");
        this.navigation = document.querySelector(".navigation");
        this.navigation = document.querySelector(".navigation");
        this.page = document.querySelector(".router");
        this.footer = document.querySelector(".footer");
        this.offset = 70;
        document.addEventListener("scroll", this.handleScroll.bind(this));
        this.arrowUp.addEventListener("click", this.scrollUp);
    }

    handleScroll(){
        if(window.innerWidth > 1023){
            this.offset = 100;
            if(scrollY > this.offset){
                this.navigation.style.position = "fixed";
                this.navigation.style.opacity = "0.95";
                this.page.style.transform = "translateY(80px)";
                this.footer.style.transform = "translateY(80px)";
             }else{
                 this.navigation.style.position = "relative";
                 this.page.style.transform = "translateY(0px)";
                 this.footer.style.transform = "translateY(0)";
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
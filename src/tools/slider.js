class Slider{
    constructor(){
        this.previous = 2; 
        this.current = 0;
        this.next = 1;
        this.changer;
        this.images = document.querySelectorAll('.slider__image');
        this.squares = document.querySelectorAll('.slider__square');
        this.titles = document.querySelectorAll('.slider__title');
        this.texts = document.querySelectorAll('.slider__text');

        this.squares.forEach((square) => {
            square.addEventListener("click", this.handleSquareClick.bind(this));
        })

        this.autoChange();

    }

    handleSquareClick(e){
        this.squares.forEach((square) => {
            square.removeEventListener("click", this.handleSquareClick.bind(this));
        })
        
        clearInterval(this.changer);
        this.previous = this.current;
        this.current = e.target.dataset.id -1;
        this.next = this.nextIndex(this.current);
        this.changeSlide(this.previous, this.current, this.next);
   

        this.autoChange();



    }

    nextIndex(index){
        let number = index + 1;
       
        if (number <= 2){
            return number;
        }
        else{
            return 0;
        }

    }

    changeSlide(previous, current, next){

        this.squares[previous].classList.remove("slider__square--active");
        this.images[previous].classList.remove("slider__image--active");
        this.squares[current].classList.add("slider__square--active");
        this.images[current].classList.add("slider__image--active");
        this.images[previous].classList.add("slider__image--past");
        this.squares[previous].classList.add("slider__square--past");
        this.titles[previous].classList.remove("slider__title--active");
        this.titles[current].classList.add("slider__title--active");
        this.texts[previous].classList.remove("slider__text--active");
        this.texts[current].classList.add("slider__text--active");
        setTimeout(() => {
            this.images[previous].classList.remove("slider__image--past");
            this.squares[previous].classList.remove("slider__square--past");
        }, 1000);
       
       

     
       
    }
    nextSlide(){
         
        this.previous = this.current;
        this.current = this.nextIndex(this.current);
        this.next = this.nextIndex(this.next);
        this.changeSlide(this.previous, this.current, this.next);

    }

    autoChange(){
       
        this.changer = setInterval(this.nextSlide.bind(this), 5000);

    }
}

export default Slider;
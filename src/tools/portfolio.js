
class Portfolio{
    constructor(){
        this.arrowLeft = document.querySelector(".portfolio__arrowLeft");
        this.arrowRight = document.querySelector(".portfolio__arrowRight");
        this.projects = document.querySelectorAll(".portfolio__project");
        this.currentProject = 0;
        this.counter = this.projects.length;

        this.arrowLeft.addEventListener("click", this.nextProject.bind(this, "left"));
        this.arrowRight.addEventListener("click", this.nextProject.bind(this, "right"));
    }

    nextProject(side){
        this.projects[this.currentProject].classList.remove("portfolio__project--active");
        switch(side){
            case  "left":
                this.currentProject--;
                if(this.currentProject < 0)
                    this.currentProject = this.counter -1;

                break;
            case  "right":
                this.currentProject++;
                if(this.currentProject >= this.counter)
                    this.currentProject = 0;
                break;
        }
       
        this.projects[this.currentProject].classList.add("portfolio__project--active");
    }
}

export default Portfolio;
class Menu{
    constructor(){
        this.icon = document.querySelector('.header__menuButton');
        this.navigation = document.querySelector('.navigation');
        this.links = document.querySelectorAll('.navigation__link');
        this.footerLinks = document.querySelectorAll('.footer__link');

        this.icon.addEventListener("click", this.openMenu.bind(this));
        this.links.forEach((link) => {
            link.addEventListener("click", this.changePage.bind(this));
        })
        this.footerLinks.forEach((link) => {
            link.addEventListener("click", this.changePage.bind(this));
        })
    }

    openMenu(){
        this.icon.classList.toggle("header__menuButton--active");
        this.navigation.classList.toggle("navigation--active");
    }

    changePage(e){
        this.links.forEach((link) => {
            link.classList.remove("navigation__link--active");
        });
       this.links[e.target.dataset.id].classList.add("navigation__link--active");
       this.icon.classList.remove("header__menuButton--active");
       this.navigation.classList.remove("navigation--active");
    }

}

export default Menu;
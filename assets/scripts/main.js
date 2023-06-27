// mobile menu
const mobileMenuBtn = document.querySelector('.toggle-mobile-menu')
const menu = document.querySelector('.top-nav__menu')
const overlay = document.querySelector('.overlay')
const mobileMenuItems = document.querySelectorAll('.top-nav__menu__item')

const menuBtnAnimation = ()=>{
mobileMenuBtn.classList.toggle('btn-open')
}
const showMenu =()=>{
    menu.classList.toggle('menu-open')
}
const showOverlay = ()=>{
    overlay.classList.toggle('overlay-open')
}
mobileMenuBtn.addEventListener('click',()=>{
menuBtnAnimation()
showMenu()
showOverlay()
})
mobileMenuItems.forEach(item=>{
    item.addEventListener('click',()=>{
        menuBtnAnimation()
        showMenu()
        showOverlay()
    })
})

// offer section
const offerBoxes = document.querySelectorAll('.offer .section__box__wrapper .title-box')
const offerAroows = document.querySelectorAll('.section .title-box i')
offerBoxes.forEach(box=>{box.addEventListener('click',(e)=>{
  console.log(e.target)
    box.classList.toggle('open')
    e.target.parentNode.children[1].classList.toggle('i-open')
})})

// Section observer
const sections = document.querySelectorAll(".section");

const sectionObserverOptions = {
//   rootMargin: "0px 0px 90px 0px",
rootMargin:"0px 100px 0px 100px",
  threshold: 0.05,
};

// function adding a class to show sections
const showSection = (obsSection) => {
  obsSection.target.classList.add("section--active");
};

// observer for fadein section
const sectionObserver = new IntersectionObserver((e) => {
  e.forEach((e) => {
    e.isIntersecting ? showSection(e) : false;
  });

  // showSection(e);
}, sectionObserverOptions);

sections.forEach((section) => {
  sectionObserver.observe(section);
});
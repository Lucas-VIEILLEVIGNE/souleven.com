function toggleMenu () 
{
    const Footer =document.querySelector('.footer')
    const navbar =document.querySelector('.navbar');
    const burger =document.querySelector('.burger');
    burger.addEventListener('click',() => 
    {
        navbar.classList.toggle('show-nav');
        Footer.classList.toggle('show-nav');
    })
}
toggleMenu();


const DarkBtn =document.querySelector('.dark-btn')  

let toggleTheme =0;

DarkBtn.addEventListener('click', () => {

if(toggleTheme === 0) {
document.documentElement.style.setProperty('--main-color','#6D0C9D');
document.documentElement.style.setProperty('--main-bg-color','#C9CDFF');
document.documentElement.style.setProperty('--background-img','url(/Sources/low-poly-house-light.png)');
// document.documentElement.style.setProperty('--logo','url(/Sources/Illustration_sans_titre.png');

toggleTheme++;

}else{ 
    document.documentElement.style.setProperty('--main-color', 'white');
    document.documentElement.style.setProperty('--main-bg-color', '#2E2760');
    document.documentElement.style.setProperty('--background-img','url(/Sources/low-poly-house.png)');
    // document.documentElement.style.setProperty('--logo','url(/Sources/logo/Lulu.png)');

    toggleTheme--;
}

})  


$('[data-toggle=tooltip]').tooltip();

$('.hover-animation').hover(
  function() {
    $( this ).toggleClass( 'animated rubberBand ' + $( this ).attr('data-hover-color') + '-text' );
  }
);
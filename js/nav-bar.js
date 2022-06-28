function toggleMenu () 
{
    const mainContent =document.querySelector('.main-content');
    const btn =document.querySelector('.bubbly-button');
    const navbar =document.querySelector('.navbar');
    const burger =document.querySelector('.burger');
    burger.addEventListener('click',() => 
    {
        navbar.classList.toggle('show-nav');
        if(navbar.classList.contains('show-nav'))
        {
            mainContent.style.display='none';
            btn.style.display='none';
        }
        else
        {
            mainContent.style.display='flex'
            btn.style.display='inline-block'
        }
    })
}
toggleMenu();
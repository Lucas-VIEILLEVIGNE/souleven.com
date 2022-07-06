var animateButton = function(e) {

    e.preventDefault;
    //reset animation
    e.target.classList.remove('animate');
    
    e.target.classList.add('animate');
    setTimeout(function(){
      e.target.classList.remove('animate');
    },700);
  };
  
  var btn = document.getElementsByClassName("bubbly-button");
  
  for (var i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', animateButton, false);
  }


  var url = document.getElementById('link');

url.addEventListener('click', ()=>{
    console.log("url clicked...")

    setTimeout(() =>{
        window.location.href = "explore.html";
        console.log("timeout executed...")
    }, 850);
});
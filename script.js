
 window.onload = function(){
    document.body.classList.add('onloadstyle');
 }

window.addEventListener("scroll", function(event){
    var scroll = this.scrollY;
    var ranheim = document.getElementById("ranheim")
    if(scroll > 9000){
      ranheim.className = "scroll";
      if(document.body.classList.contains('dark-mode')){
        ranheim.classList.remove('scroll');
        ranheim.classList.add('dark-mode-link');
        ranheim.classList.add('scroll-dark');
      }
    }if((scroll < 9000) || (scroll > 12000)) {
      ranheim.className = "default";
      if(document.body.classList.contains('dark-mode')){
        if(document.body.classList.contains('dark-mode')){
            ranheim.classList.remove('default');
            ranheim.classList.add('dark-mode-link');
            ranheim.classList.add('default-dark');
        };
      }
    };
  });

  window.addEventListener("scroll", function(event){
    var scroll = this.scrollY;
    var tiller = document.getElementById("tiller")
    if(scroll > 6000){
      tiller.className = "scroll";
      if(document.body.classList.contains('dark-mode')){
        tiller.classList.remove('scroll');
        tiller.classList.add('dark-mode-link');
        tiller.classList.add('scroll-dark');
      }
    }if((scroll < 6000) || (scroll > 9000)) {
      tiller.className = "default";
      if(document.body.classList.contains('dark-mode')){
        if(document.body.classList.contains('dark-mode')){
            tiller.classList.remove('default');
            tiller.classList.add('dark-mode-link');
            tiller.classList.add('default-dark');
        };
      }
    };
  });
 
  window.addEventListener("load", function(event){
    document.getElementById('midtbyen').classList.add('default');
    document.getElementById('tiller').classList.add('default');
    document.getElementById('ranheim').classList.add('default');
    document.getElementById('lademoen').classList.add('default');
});

  window.addEventListener("scroll", function(event){
    var scroll = this.scrollY;
    var midtbyen = document.getElementById("midtbyen")
    if(scroll > 545){
      midtbyen.className = "scroll";
      if(document.body.classList.contains('dark-mode')){
        midtbyen.classList.remove('scroll');
        midtbyen.classList.add('dark-mode-link');
        midtbyen.classList.add('scroll-dark');
      }
    }if((scroll > 3000) || (scroll < 545)) {
      midtbyen.className = "default";
      if(document.body.classList.contains('dark-mode')){
        midtbyen.classList.remove('default');
        midtbyen.classList.add('dark-mode-link');
        midtbyen.classList.add('default-dark');
    };
  };
});

window.addEventListener("scroll", function(event){
    var scroll = this.scrollY;
    var lademoen = document.getElementById("lademoen")
    if(scroll > 3000){
      lademoen.className = "scroll";
      if(document.body.classList.contains('dark-mode')){
        lademoen.classList.remove('scroll');
        lademoen.classList.add('dark-mode-link');
        lademoen.classList.add('scroll-dark');
      }
    }if((scroll > 6000) || (scroll < 3000)) {
      lademoen.className = "default";
      if(document.body.classList.contains('dark-mode')){
        lademoen.classList.remove('default');
        lademoen.classList.add('dark-mode-link');
        lademoen.classList.add('default-dark');
    };
  };
});

  function myFunction() {
    var element = document.getElementById('bodyid');
    element.classList.toggle("dark-mode");
    var tiller = document.getElementById("tiller").classList.toggle('dark-mode-link');
    var midtbyen = document.getElementById("midtbyen").classList.toggle('dark-mode-link');
    var ranheim = document.getElementById("ranheim").classList.toggle('dark-mode-link');
    var lademoen = document.getElementById("lademoen").classList.toggle('dark-mode-link');
  };

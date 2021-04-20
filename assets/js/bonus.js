$(function(){

  var nextIcon = $(".carousel i.next")
  var prevIcon = $(".carousel i.prev")

  
  //creazione controls
  var numeroImmagini = countSlides();
  
  createControls(numeroImmagini)
  addActiveControl();

  //SLIDING ACTION
  nextIcon.click( nextPic)
  prevIcon.click( prevPic)

  
  function nextPic(){

    // CERCO SLIDE ACTIVE
    var activeSlide = $(".carousel img.active");
    var activeCircle = $(".circle.active");

    if(activeSlide.hasClass("last")){
      activeSlide.removeClass("active")
      activeCircle.removeClass("active")

      $("img.first").addClass("active")
      $(".circle.first").addClass("active")
    }else{
      //RIMUOVO ACTIVE
    activeSlide.removeClass("active")
    activeCircle.removeClass("active")
    //DO ACTIVE AL NEXT
    activeSlide.next().addClass("active")
    activeCircle.next().addClass("active")
    
    }
    
  }

  function prevPic(){

    // CERCO SLIDE ACTIVE
    var activeSlide = $(".carousel img.active");
    var activeCircle = $(".circle.active");

    if(activeSlide.hasClass("first")){
      activeSlide.removeClass("active")
      activeCircle.removeClass("active")

      $("img.last").addClass("active")
      $(".circle.last").addClass("active")
    }else{
      //RIMUOVO ACTIVE
    activeSlide.removeClass("active")
    activeCircle.removeClass("active")
    //DO ACTIVE AL NEXT
    activeSlide.prev().addClass("active")
    activeCircle.prev().addClass("active")
    }

  }

  function countSlides(){
    var counter =0;
    var images = document.getElementsByTagName("img")
    console.log(images);
    counter = images.length;
    return counter
  }
  function createControls(n){
    for( var i =0; i<n;i++){
      $(".slider-controls").append("<div class='circle'></div>")
    }
    console.log("stampati controlli numero : "+n)
  }

  function addActiveControl(){
    $(".circle:first-child").addClass("active first");
    $(".circle:last-child").addClass("last");
  }







})
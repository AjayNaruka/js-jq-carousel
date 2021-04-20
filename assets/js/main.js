$(function(){

  var nextIcon = $(".carousel i.next")
  var prevIcon = $(".carousel i.prev")

  nextIcon.click( nextPic)
  prevIcon.click( prevPic)

  var testIndex = 2;
  var dots = $(".slider-controls .circle");
  var images = $(".c-container img")
  //getDots();
  getImages();

  var clickedIndex =0;
  $(".circle").click(function(){
    console.log(this)
    console.log("cliccato")
    console.log(dots.length)
    var found = false;
    for(var b = 0; b<dots.length && (found==false);b++){
      console.log("Elemento : "+dots.eq(b))
      if(dots[b]== this){
        console.log("trovato")
        clickedIndex = b;
        found = true;
      }
    }
    console.log(clickedIndex)
    activateSlide(clickedIndex)
  })

  
  




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


  function getDots(){
    var dots = $(".slider-controls .circle")
    console.log(dots)
  }
  function getImages(){
    var images = $(".c-container img")
    console.log(images);
  }

  function activateSlide(index){
    //REMOVE ACTIVE  from IMAGES
    for(var a=0; a<images.length;a++){
      if(images.eq(a).hasClass("active"))
       images.eq(a).removeClass("active")
       dots.eq(a).removeClass("active")
    }
    images.eq(index).addClass("active")
    dots.eq(index).addClass("active")

    
  }



})
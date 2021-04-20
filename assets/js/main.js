$(function(){

  var nextIcon = $(".carousel i.next")
  nextIcon.click( nextPic)
  
  function nextPic(){

    // CERCO SLIDE ACTIVE
    var activeSlide = $(".carousel img.active");
    console.log(activeSlide);
    if(activeSlide.hasClass("last")){
      activeSlide.removeClass("active")
      $("img.first").addClass("active")
    }else{
      //RIMUOVO ACTIVE
    activeSlide.removeClass("active")
    //DO ACTIVE AL NEXT
    activeSlide.next().addClass("active")
    }

    
  }



  function prevPic(){
  }







})
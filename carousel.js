$(document).ready(function(){
    // Captura o número total de slides do carousel
    var totalSlides = $('#carouselExampleIndicators .carousel-inner .item').length;
    
    // Atualiza as setas do carousel com base no slide atual
    $("#carouselExampleIndicators").on('slide.bs.carousel', function (evt) {
      var currentSlide = $(evt.relatedTarget).index();
      
      // Esconde a seta da direita se o slide atual for igual ao último slide
      if(currentSlide == totalSlides - 1){
        $(".carousel-control.right").hide();
      }
      else {
        $(".carousel-control.right").show();
      }
      
      // Esconde a seta da esquerda se o slide atual for igual ao primeiro slide
      if(currentSlide == 0){
        $(".carousel-control.left").hide();
      }
      else {
        $(".carousel-control.left").show();
      }
    });
  });
  
$( document ).ready(function() {
  // impostazioni quando si effettua il click su icona next
  $(".next").click(nextimg);
    // funzione per scorrere le immagini al click
    function nextimg() {
      // variabile per scorrere le immagini
      var activeimg = $(".img-slide img.active");
      // variabile per scorrere i pallini
      var activepal = $(".box-pallini span.active ");

      activepal.removeClass("active");
      activeimg.removeClass("active");
      // condizione di ritorno alla prima immagine
      if(activeimg.hasClass("last") && activepal.hasClass("last")) {
        $("img.first , span.first").addClass("active");
      }else{
        activeimg.next("img" ).addClass("active");
        activepal.next("span").addClass("active");
      }
    }
    // impostazioni quando si effettua il click su icona prev
  $(".prev").click(previmg);
    // funzione per scorrere le immagini al click
    function previmg(){
      // variabile per scorrere i pallini
      var activepal = $(".box-pallini span.active")
      // variabile per scorrere le immagini
      var activeimg = $(".img-slide img.active");

      activeimg.removeClass("active");
      activepal.removeClass("active");
      // condizione di ritorno all'ultima immagine una volta visualizzate tutte le img presenti
      if(activeimg.hasClass("first") && activepal.hasClass("first")){
        $("img.last").addClass("active");
        $("span.last").addClass("active");
      }else{
        activeimg.prev("img").addClass("active");
        activepal.prev("span").addClass("active");
      }
    }


});

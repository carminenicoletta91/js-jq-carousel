$( document ).ready(function() {
  // richiamo funzione (previmage) al click su icona prev
  $(".prev .prev-icon").click(previmage);
  // richiamo funzione (nextimage) al click su icona next
  $(".next .next-icon").click(nextimage);

  // funzione di scorrimento immagini da sinistra
  function previmage(){
    var activeimgpall = $(".img-slider img.active ,.box-pallini span.active ");
    activeimgpall.removeClass("active");
    // condizione per visualizzare l'ultima immagine se ci troviamo alla prima
    if(activeimgpall.hasClass("first")){
      $(".img-slider img.last,.box-pallini span.last ").addClass("active");
    // condizione per visualizzare le immagini precedenti a quella attuale
    }else{
      activeimgpall.prev("img,span").addClass("active");
    }
  }

  // funzione di scorrimento immagini da destra
  function nextimage(){
    // variabile locale che fa riferimento  alle img e ai pallini dello slider
    var activeimgpall = $(".img-slider img.active , .box-pallini span.active");
    activeimgpall.removeClass("active");
    // condizione per visualizzare la prima immagine se ci troviamo all'ultima
    if(activeimgpall.hasClass("last")){
      $(".img-slider img.first , .box-pallini span.first").addClass("active");
    // condizione per visualizzare le immagini successive a quella attuale
    }else{
      activeimgpall.next("img , span").addClass("active");
    }
  }





});

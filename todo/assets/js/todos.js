// Click todo to cross it off
$("ul").on("click", "li", function(){
  $(this).toggleClass("done");
});


// Remove deleted items
$("ul").on("click", "span", function(event){
  event.stopPropagation();   //STOPS BUBBLE UP OF EVENT LISTENERS
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
  });
});


// Add new Todos
$('input[type="text"]').keypress(function(event){
  if (event.which === 13) {
    var todoText = $(this).val();
    $("ul").append("<li><span>X</span> " + todoText + "</li>");
    $(this).val("");
  }

});

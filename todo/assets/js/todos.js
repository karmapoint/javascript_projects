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
    $("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> " + todoText + "</li>");
    $(this).val("");
  }
});


// Toggle input field
$('.hide').on("click", function(event){
  $(this).toggleClass('fa-minus');
  $(this).toggleClass('fa-plus');
  $('input[type="text"]').fadeToggle();
});

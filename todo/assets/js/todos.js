// Click todo to cross it off
$("li").click(function(){
  $(this).toggleClass("done");
});


// Remove deleted items
$("span").click(function(event){
  event.stopPropagation();   //STOPS BUBBLE UP OF EVENT LISTENERS
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
  });
});

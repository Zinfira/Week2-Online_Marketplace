$(document).ready(function(); {
  $("input.radio").click(function(event) {
  $("input:radio[name=flavor]:checked").val(event);
  event.preventDefault(); 
  
  // var favoriteColor = $("#color").val();
  });
});
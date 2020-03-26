$(document).ready(function() {
  var type;
  $(".coffee").click(function() {
    type = $("input:radio[name=type]:checked").val();
    console.log(type)
  });

  $("input.radio").submit(function(event) {
    event.preventDefault();
    var flavor = $("input:radio[name=flavor]:checked").val();
  });


  // var favoriteColor = $("#color").val();
  
});
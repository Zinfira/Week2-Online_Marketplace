$(document).ready(function() {
  var type;
  $(".coffee").click(function() {
    type = $("input:radio[name=type]:checked").val();
    console.log(type)
  });

  var flavor;
  $(".taste").click(function() {
    flavor = $("input:radio[name=flavor]:checked").val();
    console.log(flavor)
  });

  var milk;
  $(".product").click(function() {
    milk = $("input:radio[name=milk]:checked").val();
    console.log(milk)
  });


  // var favoriteColor = $("#color").val();
  
});
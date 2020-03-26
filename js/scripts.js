$(document).ready(function() {
  $("#submit").click(function() {
    var type = $("input:radio[name=type]:checked").val();
    var flavor = $("input:radio[name=flavor]:checked").val();
    var milk = $("input:radio[name=milk]:checked").val();
    console.log(type)
    $("#output-div").replaceWith(`<h3 id="output-div">you ordered a ${flavor} ${type} with ${milk} milk</h3>`)
  });

 

  


  // var favoriteColor = $("#color").val();
  
});
// var flavor = $("input:radio[name=flavor]:checked").val();
//
// var dob = $("#born").val();
//
// var favoriteColor = $("#color").val();

$(document).ready(function(){
  $("form#survey").submit(function(event) {
  var flavor = $("input:radio[name=flavor]:checked").val();
  var name = $("#name").val();
  var animal;
  $("#bear").hide();
  $("#cat").hide();
  $("#dolphin").hide();
  $(".results").hide();

  if(flavor === "chocolate") {
  $("#bear").show();
  animal=" bear"
} else if(flavor === "vanilla") {
  $("#dolphin").show();
  animal=" dolphin"
} else {
  $("#cat").show();
  animal=" cat"
}
$(".name").text(name);
$(".animal").text(animal);

$(".results").show();
  event.preventDefault();
  });
})

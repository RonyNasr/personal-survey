// var flavor = $("input:radio[name=flavor]:checked").val();
//
// var dob = $("#born").val();
//
// var favoriteColor = $("#color").val();

$(document).ready(function(){
  $("form#survey").submit(function(event) {
  var flavor = $("input:radio[name=flavor]:checked").val();

  $("#bear").hide();
  $("#cat").hide();
  $("#dolphin").hide();

  if(flavor === "chocolate") {
  $("#bear").show();
} else if(flavor === "vanilla") {
  $("#dolphin").show();
} else {
  $("#cat").show();
}

  event.preventDefault();
  });
})

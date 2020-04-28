$(document).ready(function() {
  $("#survey").submit(function(event) {
    event.preventDefault();

    let nameValue = $("#name").val();
    let dobValue = $("#born").val();
    let favMealValue = $("#favorite-meal").val();
    let favSnacksValue = $("#snacks").val();
    let musicValue = $("input:radio[name=music]:checked").val();
    let color3Value = $("#color3").val();


    $("span.name").text(nameValue);
    $("span.date-of-birth").text(dobValue);
    $("span.favorite-meal").text(favMealValue);
    $("span.favorite-snack").text(favSnacksValue);
    $("span.relaxing-music").text(musicValue);
    $("span.color-of-three").text(color3Value);

    $(".answers").show();

  });
});

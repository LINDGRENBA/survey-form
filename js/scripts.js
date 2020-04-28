$(document).ready(function() {
  $("#survey").submit(function(event) {
    event.preventDefault();

    let nameValue = $("#name").val();
    let dobValue = $("#born").val();


    $("span.name").text(nameValue);
    $("span.date-of-birth").text(dobValue);

    $(".answers").show();

  });
});

// born
// favorite-meal
// snacks
// radio selection for chosen ID
// chosen color


// date-of-birth
// favorite-meal
// favorite-snack
// relaxing-music
// color-of-three
// var calcBtn = document.getElementById('calc');
// var result = document.getElementById('result');
// var optionList = document.getElementById('tipPercentage');
// var tipAmount = optionList.selectedOptions[0].value;

// calcBtn.addEventListener('click', function(event) {
//   event.preventDefault();
//   result.innerHTML = "";
//   var calcAmount = document.getElementById('tip').value;
//   result.innerHTML = "You should tip $" + Number(calcAmount * tipAmount).toFixed(2);
//   //toFixed adds additional floats to response
// });


//refactored tax calculator above using jquery
$(document).ready(function() {
  $('#calc').on('click', function(event) {
    event.preventDefault();
    var result = ($("#tip").val() * $("#tipPercentage").val()).toFixed(2);
    $("#result").html("You should tip $" + result);
  });
});


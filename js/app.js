var calcBtn = document.getElementById('calc');
var result = document.getElementById('result');
var optionList = document.getElementById('tipPercentage');
var tipAmount = optionList.selectedOptions[0].value;

calcBtn.addEventListener('click', function() {
  result.innerHTML = "";
  var tipAmount = optionList.selectedOptions[0].value;
  var calcAmount = document.getElementById('tip').value;
  result.innerHTML = "You should tip $" + Number(calcAmount * tipAmount).toFixed(2);
  //toFixed adds additional floats to response
});

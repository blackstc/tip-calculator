var calcBtn = document.getElementById('calc');
var result = document.getElementById('result');

calcBtn.addEventListener('click', function() {
  var calcAmount = document.getElementById('tip').value;
  result.innerHTML = "You should tip $" + Number(calcAmount * 0.2);
});

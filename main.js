document.getElementById("calculateBtn").addEventListener("click", function () {
  let billAmount = parseFloat(document.getElementById("billAmount").value);

  let selectedTip = document.querySelector('input[name="tip"]:checked').value;

  let customTip = document.getElementById("customTip").value;

  let tipPercentage;

  if (customTip) {
    tipPercentage = parseFloat(customTip);
  } else {
    tipPercentage = parseFloat(selectedTip);
  }

  let tipAmount = (billAmount * tipPercentage) / 100;

  let totalAmount = billAmount + tipAmount;

  document.getElementById("result").innerHTML = ` 
      <strong>Nota initiala:</strong> ${billAmount.toFixed(2)} RON<br>
      <strong>Valoarea bacsisului:</strong> ${tipAmount.toFixed(
        2
      )} RON (${tipPercentage}% bacsis)<br>
      <strong>Total de plata:</strong> ${totalAmount.toFixed(2)} RON
    `;
});

document.querySelector('button[type="reset"]').addEventListener("click", function () {
    document.getElementById("result").innerHTML = "";
    document.getElementById("billAmount").value = "";
    document.getElementById("customTip").value = "";
    document.getElementById("no-tip").selected.checked = false;
  });

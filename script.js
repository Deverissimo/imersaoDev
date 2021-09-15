function convertDollar() {
  var elementValue = document.getElementById("dollarValue");
  var valor = elementValue.value;
  var dollarValue = parseFloat(valor);
  var realCurrency = dollarValue * 5.24;
  var euroCurrency = dollarValue / 1.2;
  var bitcoin = dollarValue / 46980;
  console.log("this is the real currency: " + realCurrency);
  var elementConvert = document.getElementById("dollarConverted");
  var dollarConverted =
    "R$: " +
    realCurrency.toFixed(2) +
    "<br>€: " +
    euroCurrency.toFixed(2) +
    "<br>₿: " +
    bitcoin.toFixed(8);
  elementConvert.innerHTML = dollarConverted;
}

function convertReal() {
  var elementValue = document.getElementById("realValue");
  var valor = elementValue.value;
  var realValue = parseFloat(valor);
  var dollarCurrency = realValue / 5.24;
  var euroCurrency = realValue / 6.19;
  var bitcoin = realValue / 246189;
  console.log("This is the dollar currency: " + dollarCurrency);
  var elementConvert = document.getElementById("realConverted");
  var realConverted =
    "US$: " +
    dollarCurrency.toFixed(2) +
    "<br>€: " +
    euroCurrency.toFixed(2) +
    "<br>₿: " +
    bitcoin.toFixed(8);
  elementConvert.innerHTML = realConverted;
}

function convertLightYear() {
  var elementValue = document.getElementById("lightYear");
  var valor = elementValue.value;
  var totalYear = parseFloat(valor);
  var mediaLightYear = 9.461e12;
  var kilometer = totalYear * mediaLightYear;
  console.log(
    "From Earth to the place you want, it's a total of: " +
      kilometer +
      " kilometers."
  );
  var elementConvert = document.getElementById("lightYearConverted");
  var lightYearConverted =
    "From Earth to the place you want, it's a total of: " +
    kilometer.toPrecision(2) +
    " kilometers.";
  elementConvert.innerHTML = lightYearConverted;
}

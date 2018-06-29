'use strict';

const select1 = document.getElementById('currency1');
const select2 = document.getElementById('currency2');
const option = document.createElement("option");

option.text = "Boy";

// Get all currencies Currency Converter api
const fetchCurrencies = () => {
  const url = 'https://free.currencyconverterapi.com/api/v5/currencies';

  fetch(url)
    .then((fetchResponse) => {
      return fetchResponse.json();
    })
    .then((responses) => {
        
      const results = Object.values(responses.results);
      results.forEach(result => {
        var x = document.createElement("OPTION");
        x.setAttribute("value", result.currencyName);
        var t = document.createTextNode(result.currencyName);
        x.appendChild(t);
        select1.appendChild(x)
      });

      results.forEach(result => {
        var x = document.createElement("OPTION");
        x.setAttribute("value", result.currencyName);
        var t = document.createTextNode(result.currencyName);
        x.appendChild(t);
        select2.appendChild(x)
      });
    }).catch((error) => {
        return error;
    })
}

fetchCurrencies();




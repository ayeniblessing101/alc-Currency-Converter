'use strict';

const select1 = document.getElementById('to');
const select2 = document.getElementById('from');
const option = document.createElement("option");

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
        var option = document.createElement("OPTION");
        option.setAttribute("value", result.id);
        var text = document.createTextNode(result.currencyName);
        option.appendChild(text);
        select1.appendChild(option)
      });

      results.forEach(result => {
        var option = document.createElement("OPTION");
        option.setAttribute("value", result.id);
        var text = document.createTextNode(result.currencyName);
        option.appendChild(text);
        select2.appendChild(option)
      });
    }).catch((error) => {
        return error;
    })
}

fetchCurrencies();





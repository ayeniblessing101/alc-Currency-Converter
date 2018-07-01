'use strict';

const result = document.getElementById('result');

const convertCurrency = (amount, fromCurrency, toCurrency) => {
  fromCurrency = encodeURIComponent(fromCurrency);
  toCurrency = encodeURIComponent(toCurrency);

  const query = `${fromCurrency}_${toCurrency}`;

  const url = `https://free.currencyconverterapi.com/api/v5/convert?q=${query}`;

  fetch(url)
  .then((convertResponse) => {
    return convertResponse.json()
  })
  .then((response) => {
    const currencyQuery = response[Object.keys(response)[1]];
    const currencyValue = currencyQuery[Object.keys(currencyQuery)].val;
    
    if(currencyValue) {
      let total = currencyValue * amount;
      total = (Math.round(total * 100) / 100).toLocaleString();
      result.innerHTML = `${total} ${toCurrency}`
    }
  }).catch((error) => {
    return error;
  });
};
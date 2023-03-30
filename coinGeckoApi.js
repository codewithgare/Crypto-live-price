const btcPrice = document.getElementById("btc");
const ethPrice = document.getElementById("eth");
const dogecoinPrice = document.getElementById("dogecoin");
const usdtPrice = document.getElementById("usdt");

const URL =
  "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin%2Cusd&vs_currencies=usd";

axios
  .get(URL)
  .then((response) => {
    console.log(response.data);
    btcPrice.innerHTML = response.data.bitcoin.usd;
    ethPrice.innerHTML = response.data.ethereum.usd;
    dogecoinPrice.innerHTML = response.data.dogecoin.usd;
    usdtPrice.innerHTML = response.data.usd.usd;
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("finished");
  });

//Binance API call for USD to Naira
// const usdtNgnUrl = "https://api.binance.com/api/v1/aggTrades?symbol=USDTNGN";
// axios
//   .get(usdtNgnUrl)
//   .then((response) => {
//     console.log(response.data.slice(-1)[0].p);
//usdtPrice.innerHTML = response.data.slice(-1)[0].p; //to get the last array element
// })
// .catch((error) => {
//   console.log(error);
// })
// .finally(() => {
//   console.log("finished");
// });

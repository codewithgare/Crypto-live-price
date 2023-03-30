const btcPrice = document.getElementById("btc");
const ethPrice = document.getElementById("eth");
const dogecoinPrice = document.getElementById("dogecoin");
const ngnPrice = document.getElementById("ngn");

const URL =
  "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin%2Cusd&vs_currencies=usd";

setInterval(() => {
  axios
    .get(URL)
    .then((response) => {
      console.log(response.data);
      btcPrice.innerHTML = parseFloat(response.data.bitcoin.usd).toLocaleString("en-US");
      ethPrice.innerHTML = parseFloat(response.data.ethereum.usd).toLocaleString("en-US");
      dogecoinPrice.innerHTML = parseFloat(response.data.dogecoin.usd).toLocaleString("en-US");
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      console.log("finished");
    });
}, 2000);

// Binance API call for USD to Naira
const usdtNgnUrl = "https://api.binance.com/api/v1/aggTrades?symbol=USDTNGN";

setInterval(() => {
  axios;
  axios
    .get(usdtNgnUrl)
    .then((response) => {
      console.log(response.data.slice(-1)[0].p);
      const ngnInnerHtml = parseFloat(response.data.slice(-1)[0].p).toLocaleString("en-US"); //to get the last array element
      ngnPrice.innerHTML = ngnInnerHtml;
      console.log(ngnInnerHtml);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      console.log("finished");
    });
}, 2000);

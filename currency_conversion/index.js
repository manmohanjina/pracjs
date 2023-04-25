const express = require("express");
const app = express();
app.use(express.json());

const cc = require("currency-converter-lt");
let fromCurrency = "USD";
let toCurrency = "PKR";
let amtConvert = 1;
app.get("/", (req, res) => {
  try {
    let currencyConvertor = new cc({
      from: fromCurrency,
      to: toCurrency,
      ammount: amtConvert,
    });
    currencyConvertor.convert().then((res) => {
      console.log(res);
    });

    res.send("ok");
  } catch (error) {
    console.log("error", error);
  }
});

app.listen(8080, () => {
  try {
    console.log("app running at 8080");
  } catch (error) {
    console.log("error while connecting to port");
  }
});

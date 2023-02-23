import express from "express";
import request from 'request';



const app = express();
const port = 3000;

app.get("/", (req, res) => {
  
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  call();
});

function call() {
    const options = {
    method: 'GET',
    url: 'https://api.coingecko.com/api/v3/simple/price',
    qs: {ids: 'ripple', vs_currencies: 'usd'},
    headers: {
        useQueryString: true
    }
    };

    request(options, function (error, response, body) {
        if (error) throw new Error(error);

        console.log(body);

    });
}
import request from 'request';

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
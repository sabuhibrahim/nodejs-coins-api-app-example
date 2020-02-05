const mongoose = require("mongoose");
const https = require("https");
const Config = require('dotenv').config();

mongoose
	.connect("mongodb://localhost/cointest", {
		useUnifiedTopology: true,
		useNewUrlParser: true,
	})
	.then(() => {
		console.log("Connection Successful");

		// SET COINS DATA ???????>?>

		const Bitcoins = require("./models/bitcoins"); 
		https.get('https://api.coingecko.com/api/v3/coins/', (resp) => {
			let data = '';

			resp.on('data', (chunk) => {
				data += chunk;
			});

			resp.on('end', () => {
				JSON.parse(data).forEach((item) =>{
					let coin = new Bitcoins({
						title: item.name,
						price: item.market_data.current_price.usd,
						hourly: {price: item.market_data.current_price.usd},
						daily : {price: item.market_data.current_price.usd},
						weekly : {price: item.market_data.current_price.usd},
						url : `https://api.coingecko.com/api/v3/coins/${item.id}`
					});
					coin.save();
				
				});
				console.log(JSON.parse(data));
			console.log("OK");

			});

		}).on("error", (err) => {
			console.log("Error: " + err.message);
		});

	})
	.catch((err) => {
		console.log(err);
	});

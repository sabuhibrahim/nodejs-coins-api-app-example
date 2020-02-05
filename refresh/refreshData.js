const https = require("https");
let checkDateRules = require("../refresh/refreshFunct");

let refresh = async() =>{
	const Bitcoins = require("../models/bitcoins"); 
	let query = Bitcoins.find({}, (err,doc) => {});
	query.exec().then((coins)=>{
		coins.forEach((coin,i)=>{
			https.get(coin.url, (resp)=>{
				let data = '';

				resp.on('data', (chunk) => {
					data += chunk;
				});

				resp.on('end', () => {
					if (data) {
						checkDateRules(coin, JSON.parse(data))
						.then(update=>{
							coin.price = update.price;
							if (update.hourly) {
								coin.hourly.price = update.hourly.price;
							}
							if (update.daily) {
								coin.daily.price = update.daily.price;
							}
							if (update.weekly) {
								coin.weekly.price = update.weekly.price;
							}
							coin.save();
						});
					}
				});

			}).on("error", (err) => {
				console.log("Error: " + err.message);
			});
		});
	});
};

module.exports = refresh;
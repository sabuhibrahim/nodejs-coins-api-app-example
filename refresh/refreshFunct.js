const mongoose = require("mongoose");
const Bitcoins = require("../models/bitcoins");


let checkDateRules = (coin, data) => {
	// console.log(data);
	let updates = {};
	updates.price = data.market_data.current_price.usd;

	let nowTime = (new Date).getTime();

	if(nowTime - (new Date(coin.hourly.updated)).getTime() > 3600 * 1000){
		updates.hourly = {
			price: data.market_data.current_price.usd,
			updated : new Date()
		};
	}
	if(nowTime - (new Date(coin.daily.updated)).getTime() > 24 * 3600 * 1000){
		updates.daily = {
			price: data.market_data.current_price.usd,
			updated : new Date()
		};
	}
	if(nowTime - (new Date(coin.weekly.updated)).getTime() >7 * 24 * 3600 * 1000){
		updates.weekly = {
			price: data.market_data.current_price.usd,
			updated : new Date()
		};
	}

	return updates;
};

module.exports = checkDateRules;

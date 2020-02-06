const mongoose = require("mongoose");

const Bitcoins = require("./models/bitcoins");
const Subscribes = require("./models/subscribes");
const config = require('dotenv').config();
mongoose
	.connect(process.env.DB, {
		useUnifiedTopology: true,
		useNewUrlParser: true,
	})
	.then(() => {
		console.log("Connection Successful");

		// SET COINS DATA ???????>?>
		Bitcoins.findOne({_id: "5e3bba102b6356240cedeccc"}).exec((err,bitcoin) => {
			let subscribe = new Subscribes({
				coin : bitcoin,
				user: "2",
				rule: "increase_or_decrease_hourly",
				rule_value : "10"
			});
			subscribe.save().then((data)=>console.log(data));
		});
		
	})
	.catch((err) => {
		console.log(err);
	});
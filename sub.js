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
		Bitcoins.findOne({_id: "5e3b0f5b97ba0714bc3ce235"}).exec((err,bitcoin) => {
			let subscribe = new Subscribes({
				coin : bitcoin,
				user: "1",
				rule: "increase_or_decrease_daily",
				rule_value : "100"
			});
			subscribe.save().then((data)=>console.log(data));
		});
		
	})
	.catch((err) => {
		console.log(err);
	});
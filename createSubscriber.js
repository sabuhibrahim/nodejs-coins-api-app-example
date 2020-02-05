const mongoose = require("mongoose");

const Bitcoins = require("./models/bitcoins");
const Subscribes = require("./models/subscribes");








mongoose
	.connect("mongodb://localhost/cointest", {
		useUnifiedTopology: true,
		useNewUrlParser: true,
	})
	.then(() => {
		console.log("Connection Successful");

		// SET COINS DATA ???????>?>
		Bitcoins.findOne({_id: "5e39c5ba72dccc28c075593d"}).exec((err,bitcoin) => {
			let subscribe = new Subscribes({
				coin : bitcoin,
				user: "4",
				rule: "rule2",
				daily: false,
				hourly: true,
				weekly: false
			});
			subscribe.save().then((data)=>console.log(data));
		});
		
	})
	.catch((err) => {
		console.log(err);
	});
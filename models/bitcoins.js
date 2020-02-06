const mongoose = require("mongoose");

let schema = new mongoose.Schema({
	coin: {type: String},
	price : {type: Number},
	hourly: {
		price : {type: Number},
		updated: { type: Date, required: true}
	},
	daily: {
		price : {type: Number},
		updated: { type: Date, required: true }
	},
	weekly: {
		price : {type: Number},
		updated: { type: Date, required: true },
	},
	url : {type: String}
});

module.exports = mongoose.model("Bitcoins", schema);

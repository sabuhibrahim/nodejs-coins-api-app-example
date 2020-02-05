const mongoose = require("mongoose");

let schema = new mongoose.Schema({
	coin: {type: mongoose.Types.ObjectId, ref: 'Coins'},
	user: {type: Number, required: true},
	rule: {type: String, required: true},
	hourly : {type: Boolean, default: false},
	daily : {type: Boolean, default: false},
	weekly : {type: Boolean, default: false},
});
schema.set('timestamps', true);

module.exports = mongoose.model('Subscribes', schema);
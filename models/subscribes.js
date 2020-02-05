const mongoose = require("mongoose");

let schema = new mongoose.Schema({
	coin: {type: mongoose.Types.ObjectId, ref: 'Coins'},
	user: {type: Number, required: true},
	rule: {type: String, required: true},
	rule_value : {type: Number, required: true},
});
schema.set('timestamps', true);

module.exports = mongoose.model('Subscribes', schema);

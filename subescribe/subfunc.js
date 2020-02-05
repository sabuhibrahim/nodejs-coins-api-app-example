const Func = require('./functions');
const Bitcoins = require('./../models/bitcoins'); 

class SubFunc {

	async checkAll(subscribes){
		let respData = [];
		await subscribes.forEach(async(subscribe)=> {
			let coin = await Bitcoins.findOne({_id: subscribe.coin}).exec();
			respData.push({
				id : subscribe._id,
				check : Func[subscribe.rule].apply(null, [coin, subscribe.rule_value]) 
			});	
		});
		return respData;
	}
	async check(subscribe){
		let coin = await Bitcoins.findOne({_id: subscribe.coin}).exec();
		let respData = {
			id:subscribe._id, 
			check : Func[subscribe.rule].apply(null, [coin, subscribe.rule_value])
		};
		
		return respData;
	}
} 

let subFunctions = new SubFunc();

module.exports = subFunctions;
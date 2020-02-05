const fs = require('fs');
let rules = JSON.parse(fs.readFileSync('rules.json'));

class Func{
	rule1(coin,type){
		let data = rules.rule1.over;
		if (type === "daily") {
			if(coin.price > data){
				return true;
			}
			else{
				return false;
			}
		}else if (type === "hourly") {
			if(coin.price > data){
				return true;
			}
			else{
				return false;
			}
		}else if (type === "weekly") {
			if(coin.price > data){
				return true;
			}
			else{
				return false;
			}
		}	
	}
	rule2(coin, type){
		let data = rules.rule1.change;
		if (type === "daily") {
			let pers = Math.abs((coin.daily.price - coin.price)*100/coin.price);
			if(pers > data){
				return true;
			}
			else{
				return false;
			}
		}else if (type === "hourly") {
			let pers = Math.abs((coin.hourly.price - coin.price)*100/coin.price);
			if(pers > data){
				return true;
			}
			else{
				return false;
			}
		}else if (type === "weekly") {
			let pers = Math.abs((coin.weekly.price - coin.price)*100/coin.price);
			if(pers > data){
				return true;
			}
			else{
				return false;
			}
		}
	}
	rule3(coin,type){
		let data = rules.rule3.change;
		if (type === "daily") {
			let change = Math.abs(coin.price - coin.daily.price);
			if(change > data){
				return true;
			}
			else{
				return false;
			}
		}else if (type === "hourly") {
			let change = Math.abs(coin.price - coin.hourly.price);
			if(change > data){
				return true;
			}
			else{
				return false;
			}
		}else if (type === "weekly") {
			let change = Math.abs(coin.price - coin.weekly.price);
			if(change > data){
				return true;
			}
			else{
				return false;
			}
		}	
	}
}

class SubFunc {
	constructor(){
		this.func = new Func();
	}
	checkAll(subscribes){
		respData = [];
		subscribes.forEach((subscribe)=> {
			let p = {
				daily:null,
				hourly: null,
				weekly: null,
			};
			if(subscribe.daily){
				p.daily = {
					rule: this.func[subscribe.rule].apply(null, [subscribe, "daily"])
				}
			}
			if(subscribe.hourly){
				p.hourly = {
					rule : this.func[subscribe.rule].apply(null, [subscribe, "hourly"])
				};
			}
			if(subscribe.weekly){
				p.weekly = {
					rule : this.func[subscribe.rule].apply(null, [subscribe, "weekly"])
				}
			}
			respData.push({
				id : subscribe._id,
				data: p
			});
		});
		return respData;
	}
	check(subscribe){
		let respData = {
			daily: null,
			hourly: null,
			weekly: null,
		};
		if(subscribe.daily){
			respData.daily = {
				rule: this.func[subscribe.rule].apply(null, [subscribe, "daily"])
			}
		}
		if(subscribe.hourly){
			respData.hourly = {
				rule : this.func[subscribe.rule].apply(null, [subscribe, "hourly"])
			};
		}
		if(subscribe.weekly){
			respData.weekly = {
				rule : this.func[subscribe.rule].apply(null, [subscribe, "weekly"])
			}
		}
		return respData;
	}
} 

let subFunctions = new SubFunc();

module.exports = subFunctions;
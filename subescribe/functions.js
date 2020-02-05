class Func{
	increase_hourly(coin,value)
	{
		let current = coin.price;
		let later = coin.hourly.price;
		if((current-later) > value){
			return true;
		}
		return false;
	}
	increase_daily(coin,value)
	{
		let current = coin.price;
		let later = coin.daily.price;
		if((current-later) > value){
			return true;
		}
		return false;
	}
	increase_weekly(coin,value)
	{
		let current = coin.price;
		let later = coin.weekly.price;
		if((current-later) > value){
			return true;
		}
		return false;
	}
	decrease_daily(coin,value)
	{
		let current = coin.price;
		let later = coin.daily.price;
		if((current-later) > value){
			return true;
		}
		return false;
	}
	decrease_hourly(coin,value)
	{
		let current = coin.price;
		let later = coin.hourly.price;
		if((current-later) > value){
			return true;
		}
		return false;
	}	
	decrease_weekly(coin,value)
	{
		let current = coin.price;
		let later = coin.weekly.price;
		if((current-later) > value){
			return true;
		}
		return false;
	}
	increase_or_decrease_daily(coin,value)
	{
		let current = coin.price;
		let later = coin.daily.price;
		if(Math.abs(current-later) > value){
			return true;
		}
		return false;
	}
	increase_or_decrease_hourly(coin,value)
	{
		let current = coin.price;
		let later = coin.hourly.price;
		if(Math.abs(current-later) > value){
			return true;
		}
		return false;
	}	
	increase_or_decrease_weekly(coin,value)
	{
		let current = coin.price;
		let later = coin.weekly.price;
		if(Math.abs(current-later) > value){
			return true;
		}
		return false;
	}			
	increase_percentage_hourly(coin,value)
	{
		let current = coin.price;
		let later = coin.hourly.price;
		if((current-later)*100/later > value){
			return true;
		}
		return false;
	}

	increase_percentage_daily(coin, value)
	{
		let current = coin.price;
		let later = coin.daily.price;
		if((current-later)*100/later > value){
			return true;
		}
		return false;	
	}

	increase_percentage_weekly(coin, value)
	{
		let current = coin.price;
		let later = coin.weekly.price;
		if((current-later)*100/later > value){
			return true;
		}
		return false;
	}

	decrease_percentage_hourly(coin, value)
	{
		let current = coin.price;
		let later = coin.hourly.price;
		if((later-current)*100/later > value){
			return true;
		}
		return false;
	}

	decrease_percentage_daily(coin, value)
	{
		let current = coin.price;
		let later = coin.daily.price;
		if((later-current)*100/later > value){
			return true;
		}
		return false;	
	}

	decrease_percentage_weekly(coin,value)
	{
		let current = coin.price;
		let later = coin.weekly.price;
		if((later-current)*100/later > value){
			return true;
		}
		return false;
	}
	increase_or_decrease_percentage_hourly(coin,value)
	{
		let current = coin.price;
		let later = coin.weekly.price;
		if(Math.abs((current-later)*100/later) > value){
			return true;
		}
		return false;
	}

	increase_or_decrease_percentage_daily(coin, value)
	{
		let current = coin.price;
		let later = coin.weekly.price;
		if(Math.abs((current-later)*100/later) > value){
			return true;
		}
		return false;	
	}

	increase_or_decrease_percentage_weekly(coin, value)
	{
		let current = coin.price;
		let later = coin.weekly.price;
		if(Math.abs((current-later)*100/later) > value){
			return true;
		}
		return false;
	}
	higher_than_hourly(coin,value)
	{
		let current = coin.price;
		let later = coin.hourly.price;
		if (current > value) {
			return true;
		}
		return false;
	}

	higher_than_daily(coin,value)
	{
		let current = coin.price;
		let later = coin.daily.price;
		if (current > value) {
			return true;
		}
		return false;	
	}

	higher_than_weekly(coin,value)
	{
		let current = coin.price;
		let later = coin.weekly.price;
		if (current > value) {
			return true;
		}
		return false;
	}

	lower_than_hourly(coin,value)
	{
		let current = coin.price;
		let later = coin.hourly.price;
		if (current < value) {
			return true;
		}
		return false;
	}

	lower_than_daily(coin,value)
	{
		let current = coin.price;
		if (current < value) {
			return true;
		}
		return false;	
	}

	lower_than_weekly(coin,value)
	{
		let current = coin.price;
		if (current < value) {
			return true;
		}
		return false;
	}
}

let func = new Func();

module.exports = func;
# NodeJS Bitcoin notification example

### run
```
npm install

node setData
 
npm start
```

### env file structure:
```
DB=mongodb://localhost/cointst
Coin_Refresh_Time=10000
PORT=3000
BITCOIN_API_ALL=https://api.coingecko.com/api/v3/coins/
```
### get coins
```
curl -X GET http://localhost:3000/coins
```
### get coins with id
```
curl -X GET http://localhost:3000/coins/:id
```
### adding subscribe
```
curl --data "coinId=5e3bba102b6356240cedeccc&userId=5&rule=increase_or_decrease_hourly&rule_value=200" http://localhost:3000/subscribe/add
```
### get users all subscribes
```
curl -X GET http://localhost:3000/users/5/subscribes
```
### get users subscribe
```
curl -X GET http://localhost:3000/users/5/subscribes/5e3c2048b5f9bb1448bffb2e
```
### check user subscribers true or false
```
curl -X GET http://localhost:3000/users/5/subscribes/check
```

### check user one subscribe true or false
```
curl -X GET http://localhost:3000/users/5/subscribes/check/5e3c2048b5f9bb1448bffb2e
```

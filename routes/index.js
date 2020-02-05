const express = require('express');
const router = express.Router();
const Bitcoins = require("./../models/bitcoins");
const Subscribes = require("./../models/subscribes");

const SubFunc = require("./../subescribe/functions");

router.get('/coins', function(req, res, next) {
	Bitcoins.find({}).exec((err,coins) => {
		res.json({coins});
	});
});

router.get('/coins/:id',(req, res, next)=>{
	Bitcoins.findOne({_id: req.params.id}).exec((err,coin) => {
		res.json({coin});
	});
});

router.get('/users/:id/subscribes',(req,res,next)=>{
	Subscribes.find({user: req.params.id}).exec((err,subscribes)=>{
		res.json(SubFunc.checkAll(subscribes));
	});	
});

router.get('/users/:id/subscribes/:sub_id',(req,res,next)=>{
	Subscribes.findOne({_id: req.params.sub_id, user: req.params.id}).exec((err,subscribe)=>{
		res.json(SubFunc.check(subscribe));
	});
});

router.post('/subscribe/add', (req,res,next)=>{
	let dailyRule = (req.body.daily)? true : false;
	let weeklyRule = (req.body.weekly)? true : false;
	let hourlyRule = (req.body.hourly)? true : false;
	let subscribe = new Subscribes({
		coin : Bitcoins.findOne({_id: req.body.coinId}).exec((err,coin) => coin),
		userId: req.body.userId,
		rule: req.body.rule,
		daily: dailyRule,
		hourly: hourlyRule,
		weekly: weeklyRule
	});
});

module.exports = router;

const express = require('express');
const router = express.Router();
const Bitcoins = require("./../models/bitcoins");
const Subscribes = require("./../models/subscribes");

const SubFunc = require("./../subescribe/subfunc");

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
		res.json({subscribes});
	});	
});

router.get('/users/:id/subscribes/check',(req,res,next)=>{
	Subscribes.find({user: req.params.id}).exec((err,subscribes)=>{
		SubFunc.checkAll(subscribes)
		.then(data=>res.json(data));
	});	
});

router.get('/users/:id/subscribes/:sub_id',(req,res,next)=>{
	Subscribes.findOne({_id: req.params.sub_id, user: req.params.id}).exec((err,subscribe)=>{
		res.json({subscribe});
	});
});

router.get('/users/:id/subscribes/:sub_id/check',(req,res,next)=>{
	Subscribes.findOne({_id: req.params.sub_id, user: req.params.id}).exec((err,subscribe)=>{
		SubFunc.check(subscribe)
		.then(data=>res.json(data));
	});
});

router.post('/subscribe/add', (req,res,next)=>{
	let subscribe = new Subscribes({
		coin : Bitcoins.findOne({_id: req.body.coinId}).exec((err,coin) => coin),
		user: req.body.userId,
		rule: req.body.rule,
		rule_value: req.body.rule_value,
	});
	subscribe.save()
	.then((subsc)=>res.json({subsc}));
});

module.exports = router;

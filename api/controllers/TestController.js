/**
 * TestController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

	// <--------Create Operation using Callback way --------->

	add : function(req, res){							
		Test.add(req.body ,function(err, result){			// This will go to Test.js
			if(err){
				res.serverError(err)
			}
			else{
				sails.log('result---->',result);
				res.json(result);
			}
		})
	},

	// <--------Find Operation using Callback way --------->

	search : function(req, res){
		Test.search(function(err, result){					// This will go to Test.js
			if(err){
				res.serverError(err)
			}
			else{
				res.json(result);
			}
		})
	},

	// <--------Update Operation using Callback way --------->

	change : function(req, res){
		Test.change(req.body, function(err, result){		// This will go to Test.js
			if(err){
				res.serverError(err)
			}
			else{
				res.json(result);
			}
		})
	},

	// <--------Delete Operation using Callback way --------->

	delete : function(req, res){
		Test.delete(req.body, function(err, result){		// This will go to Test.js
			if(err){
				res.serverError(err)
			}
			else{
				res.json(result);
			}
		})
	}

};


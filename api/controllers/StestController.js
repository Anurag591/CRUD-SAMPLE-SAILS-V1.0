/**
 * StestController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
var async = require ('async');
module.exports = {

	create(req, res){
		Stest.create({
			email : req.param('email'),
			city : req.param('city')
		}).fetch()
		.then(result => {
			return res.json(result);
		})
		.catch(err => res.serverError(err))
	},

	find(req, res){
		Stest.find({id : req.param('id')})
		
		.then(result => res.json(result))
		.catch(err => res.serverError(err))
	
	},

	update(req, res){
		Stest.update({id : req.param('id')},{email : req.param('email'),city : req.param('city')}).fetch()
		.then(result => res.json(result))
		.catch(err => res.serverError(err))
	},

	delete(req, res){
		Stest.destroy({id : req.param('id')}).fetch()
		.then(result => res.json(result))
		.catch(err => res.serverError(err))
	}

	// find(req, res){
	// 	var usersearch = await Stest.find({id : req.params.id});
	// 	return res.json(usersearch);
	// }

};


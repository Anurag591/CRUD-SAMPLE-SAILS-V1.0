/**
 * StestController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
module.exports = {

	creating(req, res){
		Stest.create({
			email : req.param('email'),
			city : req.param('city')
		}).fetch()
		.then(result => {
			return res.json(result);
		})
		.catch(err => res.serverError(err))
	},

	finding(req, res){
		Stest.find({id : req.param('id')})
		
		.then(function(result){
			sails.log('result---->',result);
			Stest.destroy({id : result.id})						// Chaining Promises
			.then(s_result => {
				sails.log('s_result--->',s_result);
				return res.json(s_result);
			})
		})
		.catch(err =>{ 
			res.serverError(err);
		})
	
	},

	updating(req, res){
		Stest.update({id : req.param('id')},{email : req.param('email'),city : req.param('city')}).fetch()
		.then(result => res.json(result))
		.catch(err => res.serverError(err))
	},

	deleting(req, res){
		Stest.destroy({id : req.param('id')}).fetch()
		.then(result => res.json(result))
		.catch(err => res.serverError(err))
	},


	// <---------- TESTING FOR PROMISES.ALL --------->

		check : function(){
			var p1 = Promise.resolve(3);
			var p2 = 1337;
			var p3 = new Promise((resolve, reject) => {
			  setTimeout(resolve, 12000, 'foo');
			}); 

			Promise.all([p1, p2, p3]).then(values => { 
			  console.log(values); // [3, 1337, "foo"] 
			});
		}
};


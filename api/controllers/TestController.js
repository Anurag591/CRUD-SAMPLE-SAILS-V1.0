/**
 * TestController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

	add : function(req, res){
		Test.add(req.body, function(err, result){
			if(err){
				res.serverError(err)
			}
			else{
				res.json(result);
			}
		})
	}
  

};


/**
 * Test.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */
// var async = require('async');
module.exports = {

  attributes: {

   name : {
    type : 'string'
   },
   age : {
    type : 'number'
   },
   emailid : {
    type : 'string'
   }
   
  },

  add : function(data,callback){
    Test.create(data).fetch().exec(function(err,result){
      callback(err, result);
    })
  },

  search : function(callback){
    Test.find(function(err,result){
      callback(err, result);
    })
  },

  change : function(data, callback){
    Test.update({id : data.id}, {name: data.name, age: data.age}).fetch().exec(function(err, result){
      callback(err, result);
    })
  },

  delete : function(data, callback){
    Test.destroy({id : data.id}).fetch().exec(function(err, result){
      callback(err, result);
    })
  }



};


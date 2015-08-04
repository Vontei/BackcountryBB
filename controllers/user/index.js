'use strict';

var db = require('../../models')
var bcrypt = require('bcryptjs')


module.exports = function (router) {


    router.get('/', function (req, res) {
      console.log(req);
        res.render('user')
    })

    router.post('/', function(req,res,next){
      var firstName = req.body.firstName
      var lastName = req.body.lastName
      var email = req.body.email
      var password = req.body.password
      var pwConfirm = req.body.pwConfirm
      var hash = bcrypt.hashSync(password,8)
      var csrf = req.body._csrf;
      if(password === pwConfirm){
        db.Users.create({
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: hash
        }).then(function () {
          res.redirect('/')
        })
      }
    })


};

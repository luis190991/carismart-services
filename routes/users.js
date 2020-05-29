var express = require('express');
var router = express.Router();
const User = require("../models/user");

/* GET users listing. */
router.get('/', function(req, res, next) {
  User.find().then(objs => res.json(objs));
});

router.get('/:email', function(req, res, next) {
  User.findOne({_email:req.params.email}).then(obj => res.json(obj));
});

router.post('/', function(req, res, next) {
  let user = new User({
      name:req.body.name,
      lastName:req.body.lastName,
      email: req.body.email
   });
  user.save().then((obj)=>{
    res.json(obj);
  });
});

module.exports = router;

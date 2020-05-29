const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//name, email, lastName
const schema = Schema({
  _name:String,
  _lastName: String,
  _email: String
});

class User {
  constructor(name, lastName, email){
    _name = name;
    _lastName = lastName;
    _email = email;
  }

  get name(){
    return this._name;
  }

  set name(v){
    this._name = v;
  }

  get lastName(){
    return this._lastName;
  }

  set lastName(v){
    this._lastName = v;
  }

  get email(){
    return this._email;
  }

  set email(v){
    this._email = v;
  }
}

schema.loadClass(User);
module.exports = mongoose.model('User', schema);

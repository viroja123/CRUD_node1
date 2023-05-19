const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
require('../server');

const UserSchema =new mongoose.Schema({
    username:{type:String,require:true},
    password:{type:String,require:true},
});

UserSchema.pre('save', function(next){
    this.password = bcrypt.hash(this.password, saltRounds);
    next(); 
    });

module.exports = mongoose.model('User', UserSchema);  


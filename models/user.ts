// const mongoose = require('mongoose');
import mongoose, { models } from 'mongoose';

const userSchema = new mongoose.Schema({
  userId : {
    type : String,
    require : true,
    unique : true,
  },
  password : {
    type : String,
    require : true,
  },
  name : {
    type : String,
    require : true,
  },
  isAdmin : {
    type : Boolean,
  },
},
{ timestamps : true}
);

const User = models.User || mongoose.model('User', userSchema);
export default User;
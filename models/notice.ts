import mongoose, { models } from 'mongoose';
const { Types : { ObjectId } } = mongoose;
import User from './user';


const noticeSchema = new mongoose.Schema({
  index : {
    type : Number,
  },
  title : {
    type : String,
    require : true,
  },
  description : {
    type : String,
    require : true,
  },
  author : {
    type : ObjectId,
    ref : User,
  },
  views : {
    type : Number,
    default : -1,
  },
},
{ timestamps : true}
);

const Notice = models.Notice || mongoose.model('Notice', noticeSchema);

export default Notice;
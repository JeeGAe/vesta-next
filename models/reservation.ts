import mongoose, { models } from 'mongoose';
const { Types : { ObjectId } } = mongoose;
import User from './user';

const ResevationSchema = new mongoose.Schema({
  date : {
    type : Date,
    require : true,
  },
  banquet : {
    type : String,
    require : true,
  },
  time : {
    type : String,
    require : true,
  },
  userId : {
    type : ObjectId,
    ref : User,
  },
});

const Resevation = models.Resevation || mongoose.model('Resevation', ResevationSchema);

export default Resevation;
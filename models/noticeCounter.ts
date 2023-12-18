import mongoose, { models } from 'mongoose';

const noticeCounterSchema = new mongoose.Schema({
  counter : {
    type : Number,
    require : true,
    default : 0,
  },
},
);

const NoticeCounter = models.NoticeCounter || mongoose.model('NoticeCounter', noticeCounterSchema);

export default NoticeCounter;
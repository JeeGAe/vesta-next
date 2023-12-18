// mongoose 를 사용하기로 함
// import { MongoClient } from 'mongodb'

// const DB_USER = process.env.DB_USER;
// const DB_PASS = process.env.DB_PASS;

// const url =
//   `mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.frehv8g.mongodb.net/?retryWrites=true&w=majority`
// const options: any = { useNewUrlParser: true }
// let connectDB: Promise<MongoClient>

// if (process.env.NODE_ENV === 'development') {
//   // 개발 중 재실행을 막음
//   if (!global._mongo_) {
//     global._mongo_ = new MongoClient(url, options).connect()
//   }
//   connectDB = global._mongo_
// } else {
//   connectDB = new MongoClient(url, options).connect()
// }

// export { connectDB }

import mongoose from 'mongoose';
import NoticeCounter from '@/models/noticeCounter';

export async function connectMongoDB () {
  const MONGODB_URI = process.env.MONGODB_URI;
  try {
    if(MONGODB_URI){
      if (process.env.NODE_ENV === 'development') {
        // 개발 중 재실행을 막음
        if (!global._mongo_) {
          global._mongo_ = await mongoose.connect(MONGODB_URI);
        }
      } else {
        await mongoose.connect(MONGODB_URI);
      }
      
    }
  } catch (error) {
    console.log('Failed connecting mongoDB : ', error);
  }
}

export async function increseNoticeCounter() {
  try {
    
    let counter = await NoticeCounter.findOne({});
    if(!counter){
      const newCounter = await NoticeCounter.create({});
      counter = await NoticeCounter.findOne({});
    }
    const currentCount = counter.counter;
    counter.counter++;
    await counter.save();

    return currentCount;
  } catch (error) {
    console.log("increseNoticeCounter error : ", error)
  }
}
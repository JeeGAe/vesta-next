// import type { MongoClient } from 'mongodb';

// declare global {
//   namespace globalThis {
//     var _mongo_: Promise<MongoClient>
//   }
// }

import { Connection } from 'mongoose'

declare global {
    var _mongo_: any
}

export const _mongo_ = global._mongo_ || new Connection()

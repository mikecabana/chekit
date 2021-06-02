// test
export {};

// import { MongoClient } from 'mongodb';

// const { DB, DB_HOST, DB_USER, DB_PASS } = process.env;

// if (!DB_HOST) {
//     throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
// }

// if (!DB) {
//     throw new Error('Please define the MONGODB_DB environment variable inside .env.local');
// }

// /**
//  * Global is used here to maintain a cached connection across hot reloads
//  * in development. This prevents connections growing exponentially
//  * during API Route usage.
//  */
// let cached = (global as any).mongo;

// if (!cached) {
//     cached = (global as any).mongo = { conn: null, promise: null };
// }

// export async function connectToDatabase() {
//     if (cached.conn) {
//         return cached.conn;
//     }

//     if (!cached.promise) {
//         const opts = {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         };

//         cached.promise = MongoClient.connect(`mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB}?retryWrites=true&w=majority`, opts).then((client) => {
//             return {
//                 client,
//                 db: client.db(DB),
//             };
//         });
//     }
//     cached.conn = await cached.promise;
//     return cached.conn;
// }

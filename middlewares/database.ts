import { MongoClient } from 'mongodb';
import type { NextApiRequest, NextApiResponse } from 'next'

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentiatlly
 * during API Route usage.
 * https://github.com/vercel/next.js/pull/17666
 */

declare global {
  namespace NodeJS {
    interface Global {
      document: Document;
      window: Window;
      navigator: Navigator;
      mongo: any;
    }
  }
}

global.mongo = global.mongo || {};

let indexesCreated = false;
export async function createIndexes(db: any) {
  await Promise.all([
    db
      .collection('tokens')
      .createIndex({ expireAt: -1 }, { expireAfterSeconds: 0 }),
    db.collection('posts').createIndex({ createdAt: -1 }),
    db.collection('companies').createIndex({ createdAt: -1 }),
    db.collection('jobs').createIndex({ createdAt: -1 }),
    db.collection('resume').createIndex({ createdAt: -1 }),
    db.collection('users').createIndex({ email: 1 }, { unique: true }),
  ]);
  indexesCreated = true;
}

export default async function database(req: NextApiRequest, res: NextApiResponse, next: () => any) {
  if (!global.mongo.client) {
    global.mongo.client = new MongoClient(process.env.MONGODB_URI ?? '', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await global.mongo.client.connect();
  }
  req.dbClient = global.mongo.client;

  req.db = global.mongo.client.db(process.env.DB_NAME);
  if (!indexesCreated) await createIndexes(req.db);
  return next();
}

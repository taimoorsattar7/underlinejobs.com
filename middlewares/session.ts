import session from 'express-session';
import connectMongo from 'connect-mongo';

import type { NextApiRequest, NextApiResponse } from 'next'

const MongoStore = connectMongo(session);

export default function sessionMiddleware(req: NextApiRequest, res: NextApiResponse, next: any) {
  const mongoStore = new MongoStore({
    client: req.dbClient,
    stringify: false,
  });
  return session({
    secret: process.env.SESSION_SECRET ?? "",
    resave: false,
    saveUninitialized: false,
    store: mongoStore,
  })(req, res, next);
}

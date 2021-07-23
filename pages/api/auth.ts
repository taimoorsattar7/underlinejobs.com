import nc from 'next-connect';

import type { NextApiRequest, NextApiResponse } from 'next'

import { all } from '@middlewares/index';
import passport from 'middlewares/passport';
import { extractUser } from '@lib/api-helpers';


const handler = nc();

handler.use(all);


handler.post(passport.authenticate('local'), (req: NextApiRequest, res: NextApiResponse) => {
  res.json({ user: extractUser(req.user) });
});

handler.delete((req: NextApiRequest, res: NextApiResponse) => {
  req.logOut();
  res.status(204).end();
});

export default handler;

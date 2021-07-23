import nc from 'next-connect';
import { all } from '@middlewares/index';
import { getResume, insertResume, updateResumeBycreatorId } from '@db/index';

import type { NextApiRequest, NextApiResponse } from 'next'

const handler = nc();

handler.use(all);

const maxAge = 1 * 24 * 60 * 60;

handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
    const posts = await getResume(
        req.db,
        req.query.from ? new Date(req.query?.from?.toString()) : undefined,
        req.query.by,
        req.query.limit ? parseInt(req.query?.limit?.toString(), 10) : undefined,
    );

    if (req.query.from && posts.length > 0) {
        // This is safe to cache because from defines
        //  a concrete range of posts
        res.setHeader('cache-control', `public, max-age=${maxAge}`);
    }

    res.send({ posts });
});

handler.post(async (req: NextApiRequest, res: NextApiResponse) => {
    if (!req.user) {
        return res.status(401).send('unauthenticated');
    }

    if (!req.body.content) return res.status(400).send('You must write something');

    const post = await insertResume(req.db, {
        name: req.body.name,
        profession: req.body.profession,
        exerpt: req.body.exerpt,
        content: req.body.content,
        creatorId: req.user._id,
        social: req.body.social,
        contact: req.body.contact,
        sample: req.body.contact
    });

    return res.json({ post });
});

handler.put(async (req: NextApiRequest, res: NextApiResponse) => {
    if (!req.user) { res.json(401).send('you need to be authenticated'); return; }

    let rrr = await updateResumeBycreatorId(req.db, req.user._id, req.body);

    res.send(rrr);
});

export default handler;

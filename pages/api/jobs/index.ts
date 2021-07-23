import type { NextApiRequest, NextApiResponse } from 'next'

import nc from 'next-connect';
import { all } from '@middlewares/index';
import { getJobs, insertJob } from '@db/index';

const handler = nc();

handler.use(all);

const maxAge = 1 * 24 * 60 * 60;

handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
    const jobs = await getJobs(
        req.db,
        req.query.from ? new Date(req.query?.from?.toString()) : undefined,
        req.query.by,
        req.query.limit ? parseInt(req.query?.limit?.toString(), 10) : undefined,
    );

    if (req.query.from && jobs.length > 0) {
        // This is safe to cache because from defines
        //  a concrete range of posts
        res.setHeader('cache-control', `public, max-age=${maxAge}`);
    }

    res.send({ jobs });
});

handler.post(async (req: NextApiRequest, res: NextApiResponse) => {
    if (!req.user) {
        return res.status(401).send('unauthenticated');
    }

    if (!req.body.content) return res.status(400).send('You must write something');

    const job = await insertJob(req.db, {
        slug: req.body.slug,
        title: req.body.title,
        content: req.body.content,
        applyLink: req.body.applyLink,
        keywords: req.body.keywords,
        category: req.body.category,
        workTime: req.body.workTime,
        companyId: req.body.companyId,
        creatorId: req.user._id,
    });

    return res.json({ job });
});

export default handler;

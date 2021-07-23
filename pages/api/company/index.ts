import type { NextApiRequest, NextApiResponse } from 'next'

import nc from 'next-connect';
import { all } from '@middlewares/index';
import { getCompanies, insertCompany } from '@db/index';

const handler = nc();

handler.use(all);

const maxAge = 1 * 24 * 60 * 60;

handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
    const companies = await getCompanies(
        req.db,
        req.query.from ? new Date(req.query?.from?.toString()) : undefined,
        req.query.by,
        req.query.limit ? parseInt(req.query?.limit?.toString(), 10) : undefined,
    );

    if (req.query.from && companies.length > 0) {
        // This is safe to cache because from defines
        //  a concrete range of posts
        res.setHeader('cache-control', `public, max-age=${maxAge}`);
    }

    res.send({ companies });
});

handler.post(async (req: NextApiRequest, res: NextApiResponse) => {
    if (!req.user) {
        return res.status(401).send('unauthenticated');
    }

    if (!req.body.content) return res.status(400).send('You must write something');

    const company = await insertCompany(req.db, {
        name: req.body.name,
        logo_url: req.body.logo_url,
        callout: req.body.callout,
        content: req.body.content,
        slug: req.body.slug,
        location: req.body.location ?? "",
        coordinates: req.body.coordinates ?? [],
        social: req.body.social ?? [],
        website: req.body.website ?? "",
        creatorId: req.user._id,
    });

    return res.json({ company });
});

export default handler;

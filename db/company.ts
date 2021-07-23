import { nanoid } from 'nanoid';

export async function getCompanies(db: any, from = new Date(), by: any, limit: any) {
    return db
        .collection('companies')
        .find({
            // Pagination: Fetch posts from before the input date or fetch from newest
            ...(from && {
                createdAt: {
                    $lte: from,
                },
            }),
            ...(by && { creatorId: by }),
        })
        .sort({ createdAt: -1 })
        .limit(limit || 10)
        .toArray();
}

export async function findCompanyBySlug(db: any, slug: any) {
    return db.collection('companies').findOne({
        slug: slug
    });
}

export async function insertCompany(db: any, {
    name,
    logo_url = '',
    callout  = '',
    slug,
    location,
    coordinates = [],
    social = [],
    website = '',
    content,
    creatorId
}: any) {
    return db.collection('companies').insertOne({
        _id: nanoid(12),
        name,
        logo_url,
        callout,
        slug,
        location,
        coordinates,
        social,
        website,
        content,
        creatorId,
        createdAt: new Date(),
    }).then(({ ops }: any) => ops[0]);
}

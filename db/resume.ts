import { nanoid } from 'nanoid';

export async function getResume(db: any, from = new Date(), by: any, limit: any) {
    return db
        .collection('resume')
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

export async function findResumeById(db: any, id: any) {
    return db.collection('resume').findOne({
        creatorId: id
    });
}

export async function insertResume(db: any, {
    creatorId,
    callout,
    name,
    exerpt,
    content,
    social,
    contact
}: any) {
    return db.collection('resume').insertOne({
        _id: nanoid(12),
        content,
        creatorId,
        name,
        callout,
        exerpt,
        social,
        contact,
        createdAt: new Date(),
    }).then(({ ops }: any) => ops[0]);
}

export async function updateResumeBycreatorId(db: any, id: any, update: any) {
    return db.collection('resume').findOneAndUpdate(
        { creatorId: id },
        { $set: update },
        { returnOriginal: false },
    ).then(({ value }: any) => value);
}

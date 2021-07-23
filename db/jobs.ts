import { nanoid } from 'nanoid';

export async function getJobs(db: any, from = new Date(), by: any, limit: any) {
  return db
    .collection('jobs')
    .find({
      // Pagination: Fetch jobs from before the input date or fetch from newest
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

export async function insertJob(db: any, {
    slug,
    title,
    content,
    keywords,
    workTime,
    category,
    companyId,
    creatorId }: any) {

  return db.collection('jobs').insertOne({
    _id: nanoid(12),
    slug,
    title,
    content,
    keywords,
    category,
    workTime,
    creatorId,
    companyId,
    createdAt: new Date(),
  }).then(({ ops }: any) => ops[0]);
}


export async function findJobBySlug(db: any, slug: any) {
  return db.collection('jobs').findOne({
    slug: slug
  });
}

import { nanoid } from 'nanoid'

export function findTokenByIdAndType(
  db: {
    collection: (arg0: string) => {
      (): any
      new (): any
      findOne: { (arg0: { _id: any; type: any }): any; new (): any }
    }
  },
  id: any,
  type: any
) {
  return db.collection('tokens').findOne({
    _id: id,
    type,
  })
}

export function findAndDeleteTokenByIdAndType(
  db: {
    collection: (arg0: string) => {
      (): any
      new (): any
      findOneAndDelete: { (arg0: { _id: any; type: any }): Promise<{ value: any }>; new (): any }
    }
  },
  id: any,
  type: string
) {
  return db
    .collection('tokens')
    .findOneAndDelete({ _id: id, type })
    .then(({ value }) => value)
}

export function insertToken(
  db: {
    collection: (arg0: string) => {
      (): any
      new (): any
      insertOne: {
        (arg0: { _id: string; creatorId: any; type: any; expireAt: any }): Promise<{ ops: any }>
        new (): any
      }
    }
  },
  { creatorId, type, expireAt }: { creatorId: any; type: string; expireAt: Date }
) {
  const securedTokenId = nanoid(32)
  return db
    .collection('tokens')
    .insertOne({
      _id: securedTokenId,
      creatorId,
      type,
      expireAt,
    })
    .then(({ ops }) => ops[0])
}

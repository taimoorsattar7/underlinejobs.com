import React from 'react'
import { all } from '@middlewares/index'
// import { useCurrentUser } from '@hooks/index'
import { extractUser } from '@lib/api-helpers'
import { findUserById, findResumeById } from '@db/index'
import Resume from '@components/resume/Resume'

export default function UserPage({ data }: any) {
  // { user, data }: any
  // if (!user) return <Error statusCode={404} />;
  // const {
  //     name, email, bio, profilePicture, _id
  // } = user || {};
  // const [currentUser] = useCurrentUser();
  // const isCurrentUser = currentUser?._id === user._id;

  return (
    <>
      <Resume data={data} />
    </>
  )
}

export async function getServerSideProps(context: any) {
  await all.run(context.req, context.res)
  const user = extractUser(await findUserById(context.req.db, context.params.userId))
  const data = await findResumeById(context.req.db, context.params.userId)
  if (!user) context.res.statusCode = 404
  return { props: { user, data } }
}

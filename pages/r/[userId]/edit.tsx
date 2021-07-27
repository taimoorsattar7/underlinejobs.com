import React from 'react'
import SEO from '@components/SEO'
import { all } from '@middlewares/index'
import { extractUser } from '@lib/api-helpers'
import { findUserById, findResumeById } from '@db/index'
import EditResume from '@components/resume/Edit'

// import { useRouter } from 'next/router'
// import { useCurrentUser } from '@hooks/index'

export default function resumeEdit(data: any) {
  // const router = useRouter()
  // const [errorMsg, setErrorMsg] = useState('')
  // const [user, { mutate }] = useCurrentUser()
  // const { userId } = router.query
  // console.log(userId)
  // useEffect(() => {
  //   // redirect to home if user is authenticated
  //   if (user) router.push(`/login?goto=/r/${userId}/edit`);
  // }, [user]);

  return (
    <>
      <SEO
        title={'Post a Job'}
        description={
          'We are the platform to provide you the best experiece to find remote jobs. We encourage jobs listing from different people / company.'
        }
        image={''}
      />
      <EditResume data={data} />
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

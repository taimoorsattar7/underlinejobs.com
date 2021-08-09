import React from 'react'
// import Head from 'next/head';
import SEO from '@components/SEO'

import JobPost from '@components/JobPost/index'

// import { useRouter } from 'next/router';
// import { useCurrentUser } from '@hooks/index';

const jobPost = () => {
  // const router = useRouter();
  // const [errorMsg, setErrorMsg] = useState('');
  // const [user, { mutate }] = useCurrentUser();
  // useEffect(() => {
  //   // redirect to home if user is authenticated
  //   if (!user) router.push('/login?goto=job-post');
  // }, [user]);

  return (
    <>
      <SEO title="Post a Job" description="" image="" />
      <JobPost />
    </>
  )
}

export default jobPost

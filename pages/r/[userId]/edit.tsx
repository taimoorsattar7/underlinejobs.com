import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import SEO from '@components/SEO';

import EditResume from '@components/resume/Edit';

import { useRouter } from 'next/router';
import { useCurrentUser } from '@hooks/index';

const resumeEdit = () => {
  const router = useRouter();
  const [errorMsg, setErrorMsg] = useState('');
  const [user, { mutate }] = useCurrentUser();
  const { userId } = router.query
  // console.log(userId)
  // useEffect(() => {
  //   // redirect to home if user is authenticated
  //   if (user) router.push(`/login?goto=/r/${userId}/edit`);
  // }, [user]);

  async function onSubmit(e: any) {
    e.preventDefault();
    const body = {
      email: e.currentTarget.email.value,
      password: e.currentTarget.password.value,
    };
    const res = await fetch('/api/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    if (res.status === 200) {
      const userObj = await res.json();
      mutate(userObj);
    } else {
      setErrorMsg('Incorrect username or password. Try again!');
    }
  }

  let data = {
    _id:"LdbM0aPNlChy",
    content:`My name is Taimoor Sattar. I've experienced in developing UI/UX for modern websites and populate the data from the back-end to visualize in the front-end.

    I've written a book about JAMstack. JAMstack is the modern way to build the websites as the front-end is decoupled from the back-end. You can read more about it below.`,
    creatorId:"yyRHhikDuVY_",
    name: "Taimoor Sattar",
    profession: "Full stack developer",
    website:"https://taimoorsattar.dev",
    exerpt:"My name is Taimoor Sattar. I've experienced in developing UI/UX for mo...",social: [{
        source: "twitter",
        url: "https://twitter.com/taimoorsattar7"
    }],

    projects: [{
        source: "twitter",
        title: "taimoorsattar.dev",
        exerpt: "My personal Blog"
    }],
    contact: "taimoorsattar7@gmail.com"
}

  return (
    <>
      <SEO title={"Post a Job"}
                 description={"We are the platform to provide you the best experiece to find remote jobs. We encourage jobs listing from different people / company."}
                 image={""}
            />
      <EditResume data={data} />
    </>
  );
};

export default resumeEdit;

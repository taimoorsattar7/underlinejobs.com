import React, { useEffect } from 'react';
import Link from 'next/link';

import Login from "@components/auth/login/Login";
import SEO from "@components/SEO";

import Router, { useRouter } from 'next/router';

import { useCurrentUser } from '@hooks/index';

interface IFormInput {
  email: String;
  password: String;
}

const LoginPage = () => {

  const router = useRouter()
  const { goto } = router.query
  const [user, { mutate }] = useCurrentUser();

  useEffect(() => {
    // redirect to home if user is authenticated
    if (user){
      goto ? Router.replace(`/${String(goto)}`)
           : Router.replace('/') 
    }
  }, [user]);




  return (
    <>
      <SEO title={"Login - Underline Jobs"}
        description={"Login"}
        image={""}
      />

    <div className="wrapper wrapper--small">
      <h1 className="headline headline--dull">
        <b>Login for more aww-someness.</b>
      </h1>

      <Login />

      <hr />

        <Link href="/forget-password">
          <a className="m-r-50">Forget password  →</a>
        </Link>

        <Link href="/signup">
          <a>SignUp →</a>
        </Link>

    </div>
      
    </>
  );
};

export default LoginPage;

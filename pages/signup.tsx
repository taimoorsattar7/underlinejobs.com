import React, { useEffect } from 'react'
import Router, { useRouter } from 'next/router'

import Signup from '@components/auth/signup/Signup'
import SEO from '@components/SEO'

import { useCurrentUser } from '@hooks/index'

const SignupPage = () => {
  const { user } = useCurrentUser()
  const router = useRouter()
  const { goto } = router.query

  useEffect(() => {
    // redirect to home if user is authenticated

    if (user) {
      // eslint-disable-next-line no-unused-expressions
      goto ? Router.replace(`/${String(goto)}`) : Router.replace('/')
    }
  }, [user])

  return (
    <>
      <SEO title="Sign Up | Underline Jobs" description="" image="" />
      <h2 className="headline headline__text">Sign up</h2>
      <Signup />
    </>
  )
}

export default SignupPage

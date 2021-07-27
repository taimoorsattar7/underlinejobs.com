import React from 'react'
import { all } from '@middlewares/index'
// import { useCurrentUser } from '@hooks/index'
import { extractUser } from '@lib/api-helpers'
import { findUserById, findCompanyBySlug } from '@db/index'
import Company from '@components/company/Company'

import SEO from '@components/SEO'

export default function CompanyPage({ user, value }: any) {
  // if (!user) return <Error statusCode={404} />;
  // const {
  //     name, email, bio, profilePicture, _id
  // } = user || {};
  //   const [currentUser] = useCurrentUser()
  //   const isCurrentUser = currentUser?._id === user._id

  return (
    <>
      <SEO title={''} description={''} image={''} />
      <Company data={value} />
    </>
  )
}

export async function getServerSideProps(context: any) {
  await all.run(context.req, context.res)
  const user = extractUser(await findUserById(context.req.db, context.params.userId))
  const data = await findCompanyBySlug(context.req.db, context.params.companySlug)
  if (!user) context.res.statusCode = 404
  let value = JSON.parse(JSON.stringify(data))
  return { props: { user, value } }
}

import React from 'react'
import Link from 'next/link'
import Error from 'next/error'
import { all } from '@middlewares/index'
import { useCurrentUser } from '@hooks/index'
import Posts from '@components/post/posts'
import { extractUser } from '@lib/api-helpers'
import { findUserById } from '@db/index'

export default function UserPage({ usr }: any) {
  if (!usr) return <Error statusCode={404} />
  const { name, email, bio, profilePicture } = usr || {}
  const { user } = useCurrentUser()
  const isCurrentUser = user?._id === user._id
  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src={profilePicture} width="256" height="256" alt={name} />
        <section>
          <div>
            <h2>{name}</h2>
            {isCurrentUser && (
              <Link href="/settings">
                <button type="button">Edit</button>
              </Link>
            )}
          </div>
          Bio
          <p>{bio}</p>
          Email
          <p>{email}</p>
        </section>
      </div>
      <div>
        <h3>My posts</h3>
        <Posts creatorId={user._id} />
      </div>
    </>
  )
}

export async function getServerSideProps(context: any) {
  await all.run(context.req, context.res)
  const usr = extractUser(await findUserById(context.req.db, context.params.userId))
  if (!usr) context.res.statusCode = 404
  return { props: { usr } }
}

import React from 'react'
import { useCurrentUser } from '@hooks/index'
import Router from 'next/router'

import { useForm, SubmitHandler } from 'react-hook-form'

type Inputs = {
  name: string
  email: string
  website: string
  profession: string
  exerpt: string
  content: string
}

interface IFormInput {
  name: string
  email: string
  website: string
  profession: string
  exerpt: string
  content: string
}

export default function EditJob({ data }: any) {
  const { user } = useCurrentUser()

  if (!user) {
    return <div style={{ color: '#555', textAlign: 'center' }}>Please sign in to post</div>
  }
  const {
    register,
    handleSubmit,
    // watch,
    // formState: { errors },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<IFormInput> = async (sdata: IFormInput): Promise<any> => {
    const body = {
      name: sdata.name,
      email: sdata.email,
      website: sdata.website,
      profession: sdata.profession,
      exerpt: sdata.exerpt,
      content: sdata.content,
    }

    const res = await fetch('/api/resume', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })

    if (res.status === 200) Router.replace('/')
  }

  return (
    <section className="wrapper wrapper--small">
      <form onSubmit={handleSubmit(onSubmit)} id="contact" action="" method="post">
        <h3 className="headline">Update Your Resume</h3>

        <fieldset>
          <input defaultValue={data.name} {...register('name')} type="text" required autoFocus />
        </fieldset>

        <div className="field__input__wrapper">
          <label htmlFor="title" className="headline headline__text">
            <b>Title</b>
          </label>
          <input
            id="title"
            className="input-form headline headline__text"
            {...register('name', { required: true })}
            type="text"
            placeholder="Your name"
            autoFocus
          />
        </div>

        <fieldset>
          <input defaultValue={data.email} {...register('email')} type="email" required />
        </fieldset>

        <fieldset>
          <input
            defaultValue={data.profession}
            {...register('profession')}
            placeholder="Enter Your Profession"
            type="text"
            required
          />
        </fieldset>

        <fieldset>
          <input defaultValue={data.website} {...register('website')} type="url" required />
        </fieldset>

        <fieldset>
          <textarea defaultValue={data.content} {...register('content')} required></textarea>
        </fieldset>

        <fieldset>
          <textarea defaultValue={data.exerpt} {...register('exerpt')} required></textarea>
        </fieldset>

        <fieldset>
          <input className="btn small headline headline--b" type="submit" value="Update Resume" />
        </fieldset>
      </form>
    </section>
  )
}

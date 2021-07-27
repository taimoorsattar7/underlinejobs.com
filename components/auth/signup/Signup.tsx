import React, { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

import { useCurrentUser } from '@hooks/index'

interface IFormInput {
  name: any
  email: any
  password: any
}

const Signup = () => {
  const { mutate } = useCurrentUser()

  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm<IFormInput>({ mode: 'all' })

  const [errorMsg, setErrorMsg] = useState('')

  const onSubmit: SubmitHandler<IFormInput> = async (data: any) => {
    const body = {
      email: data.email,
      name: data.name,
      password: data.password,
    }

    const res = await fetch('/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })
    if (res.status === 201) {
      const userObj = await res.json()
      mutate(userObj)
    } else {
      setErrorMsg(await res.text())
    }
  }

  return (
    <>
      <div className="wrapper wrapper--small">
        <form onSubmit={handleSubmit(onSubmit)} className="form-login">
          {errorMsg ? <p style={{ color: 'red' }}>{errorMsg}</p> : null}

          <div className="field__input__wrapper">
            <label htmlFor="name" className="headline headline__text">
              <b>Name</b>
            </label>
            <input
              id="name"
              className="input-form headline headline__text"
              {...register('name', { required: true })}
              type="text"
              placeholder="Your name"
            />
          </div>

          <div className="field__input__wrapper">
            <label htmlFor="email" className="headline headline__text">
              <b>Email</b>
            </label>

            <input
              id="email"
              className="input-form headline headline__text"
              {...register('email', {
                required: true,
                pattern: {
                  value: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
                  message: 'Entered value does not match email format',
                },
              })}
              type="email"
              placeholder="your@email.com"
            />

            {errors.email && errors.email.type === 'required' && (
              <span role="alert" className="headline headline__text headline__text headline__error">
                Email field is required
              </span>
            )}

            {errors.email && errors.email.type === 'pattern' && (
              <span role="alert" className="headline headline__text headline__text headline__error">
                Entered value does not match email format
              </span>
            )}
          </div>

          <div className="field__input__wrapper">
            <label htmlFor="password" className="headline headline__text">
              <b>Password</b>
            </label>
            <input
              id="password"
              className="input-form headline headline__text"
              {...register('password', { required: true })}
              type="password"
              placeholder="Password"
            />

            {errors.password && errors.password.type === 'required' && (
              <span role="alert" className="headline headline__text headline__text headline__error">
                Password Field is required
              </span>
            )}
          </div>
          <input
            className="btn small headline headline__text headline--b"
            type="submit"
            value="Sign Up →"
          />
        </form>
      </div>
    </>
  )
}

export default Signup

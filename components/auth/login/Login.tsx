import React from 'react';
import { useForm, SubmitHandler } from "react-hook-form";

import { useCurrentUser } from '@hooks/index';

interface IFormInput {
  email: String;
  password: String;
}

const Login = () => {

  const { register,
          handleSubmit,
          watch,
          formState: { errors } } = useForm<IFormInput>({mode: "all"});
  

  const [user, { mutate }] = useCurrentUser();

  const onSubmit: SubmitHandler<IFormInput> = async data => {

    const body = {
      email: data.email,
      password: data.password,
    };

    const res = await fetch('/api/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    if (res.status === 200) {
      const userObj = await res.json();
      
      mutate(userObj);
    }
  }

  return (
    <>
      <div className="wrapper wrapper--small">
      <section className="forms">
    
    <form onSubmit={handleSubmit(onSubmit)} className="form-login">
      <div className="field__input__wrapper">
        <label className="headline headline__text">
          <b>Email</b>
        </label>

        <input className="input-form headline headline__text"
               {...register("email", {
                   required: true,
                   pattern: {
                        value: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
                        message: "Entered value does not match email format"
                } })}
               type="text"
               placeholder="email@email.com" />

          {errors.email && errors.email.type === "required" && 
            <span role="alert" className="headline headline__text headline__text headline__error">
                Email field is required</span>}
        
            {errors.email && errors.email.type === "pattern" && 
                <span role="alert" className="headline headline__text headline__text headline__error">
                    Entered value does not match email format</span>}
      </div>

      <div className="field__input__wrapper">
        <label className="headline headline__text">
          <b>Password</b>
        </label>
        <input className="input-form headline headline__text"
               {...register("password", { required: true })}
               type="password"
               placeholder="Password" />

        {errors.password && errors.password.type === "required" && 
            <span role="alert" className="headline headline__text headline__text headline__error">
                Password Field is required</span>}
      </div>

      <div className="field__checkbox">
        <input id="checkbox-rem" type="checkbox" />
        <label htmlFor="checkbox-rem">
          <span className="headline headline__text">Remember Me</span>
          <span className="box"></span>
        </label>
      </div>
      
      <input className="btn small headline headline__text headline--b"
             type="submit"
             value="Login →" />
    </form>

    
  </section>
      </div>
    </>
  );
};

export default Login;
import React, { useState } from 'react'

import Login from '@components/auth/login/Login'
import Signup from '@components/auth/signup/Signup'

const Auth = () => {
  let [option, setOption] = useState('signup')

  function Toggle(e: any) {
    setOption(e.currentTarget.getAttribute('data-id'))
  }

  return (
    <>
      <div className="flex m-b-30">
        <span>
          <span
            onClick={Toggle}
            data-id={'signup'}
            className={`headline headline__text pointer
                        ${option == 'signup' && 'bg-light-blue p-5 radius3'}
                    `}
          >
            🧏‍♂️ Signup
          </span>
        </span>

        <span>
          <span
            onClick={Toggle}
            data-id={'login'}
            className={`headline headline__text pointer
                        ${option == 'login' && 'bg-light-blue p-5 radius3'}
                    `}
          >
            🔒 Login
          </span>
        </span>
      </div>

      {option == 'signup' && <Signup />}
      {option == 'login' && <Login />}
    </>
  )
}

export default Auth

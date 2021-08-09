import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useCurrentUser } from '@hooks/index'

// import ProfileDrop from '@components/ProfileDrop/ProfileDrop'

export const Header = () => {
  const [hamBurger, handleHamBurger] = useState(true)
  const { user, mutate } = useCurrentUser()
  const handleLogout = async () => {
    await fetch('/api/auth', {
      method: 'DELETE',
    })
    mutate(null)
  }

  return (
    <>
      <header className="site-header">
        <div className={'wrapper wrapper--narrow' + (hamBurger ? '' : ' wrapper--no-bottom-padd')}>
          <Link href="/">
            <a className="pointer">
              <Image src={'/logo.svg'} alt="Picture of the author" width={80} height={80} />
            </a>
          </Link>

          <div
            onClick={() => handleHamBurger(!hamBurger)}
            className={hamBurger ? 'site-header__menu-icon' : 'site-header__menu-icon--close-x'}
          >
            <div className="site-header__menu-icon__middle"></div>
          </div>
          {/* 
                    <div className="site-header__logo-send">
                        <a href="mailto:taimoorsattar7@gmail.com">
                            <img
                                className="site-header__logo"
                                // src={send}
                                alt="Taimoor Sattar"
                            />
                        </a>
                    </div> */}

          <nav className={'nav nav--pull-right' + (hamBurger ? ' nav--vanish' : '')}>
            <ul className="nav">
              <li>
                <Link href="/">
                  <a className="headline headline__text">Home</a>
                </Link>
              </li>

              <li>
                <Link href="/job-post">
                  <a className="headline headline__text">
                    <b>Post Job</b>
                  </a>
                </Link>
              </li>

              <span id="eee">eee</span>

              {user ? (
                <>
                  <li>
                    <Link href={`/resumeBuilder`}>
                      <a className="btn small m-r-25" type="button">
                        <span className="headline headline__text headline--white">
                          create resume 📄
                        </span>
                      </a>
                    </Link>

                    <span
                      onClick={() => handleLogout()}
                      className="headline headline__text headline--white"
                    >
                      Logout
                    </span>
                  </li>
                </>
              ) : (
                <>{/* <ProfileDrop />  */}</>
              )}
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}

import React from 'react';
import Image from 'next/image'
// import Logo from '../public/me.png'
import Link from 'next/link';

import style from './Footer.module.scss'

const Footer = () => {

    return (
        <>
            {/* Site footer  */}
            <footer className={`${style.footer} m-10 p-t-25 p-b-80 radius5 m-t-80`}>
                <div className="wrapper wrapper--narrow headline--white">
                    <div className="flex flex-gap-l m-5">
                    <section>
                        <Image
                            src={'/logo-white.svg'}
                            alt="Picture of the author"
                            width={120}
                            height={120} />
                        <p className="headline headline__text">We are an awsome company We are an awsome companyWe are an awsome company</p>
                    </section>

                    <section>
                        <h2 className="headline headline__text"><b>Links</b></h2>
                        <div className="nav">
                        <ul>
                            <li className="headline headline__text">
                                <Link href="/">
                                    <a>Home</a>
                                </Link>
                            </li>

                            <li className="headline headline__text">
                                <Link href="/">
                                    <a>Post a Job</a>
                                </Link>
                            </li>

                            <li className="headline headline__text">
                                <Link href="/">
                                    <a>Create Resume</a>
                                </Link>
                            </li>
                        </ul>
                        </div>
                    </section>

                    </div>


                </div>
            </footer>
        </>
    );
};

export default Footer;
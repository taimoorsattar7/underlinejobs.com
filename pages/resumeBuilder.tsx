import React, { useState, useEffect } from 'react';
import { useForm, SubmitHandler } from "react-hook-form";

import SEO from '@components/SEO';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCurrentUser } from '@hooks/index';

interface IFormInput {
  email: String;
  password: String;
}

const Resume = () => {


  return (
    <>
      <SEO title={"Boost your chances for of landing dream jobs"}
        description={"We are the platform to provide you the best experiece to find remote jobs. We encourage jobs listing from different people / company."}
        image={""}
      />

      <div className="wrapper wrapper--narrow">
        <h1 className="headline m-b-50">
          Boost your chances for of landing dream jobs</h1>

        <p className="headline headline__text headline--dull m-b-10">
          Create you resume without worry about the layout and positioning.</p>
        <p className="headline headline__text headline--dull m-b-10">
          Export your resume in <b>PDF</b>. Create a <b>link for your Resume</b> to share with the recruter.</p>
        <p className="headline headline__text headline--dull m-b-30">
          Please login first so that your resume is save for later use.</p>
        
        <Link href="/r/dasdsa">
          <a className="btn small">
            <span className="headline headline__text">
              <b>Create your Resume</b>
                </span>
            </a>
        </Link>
      </div>
    </>
  );
};

export default Resume;

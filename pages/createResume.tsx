import React, { useState, useEffect } from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import SEO from '@components/SEO';
import EditResume from '@components/resume/Edit';


import Head from 'next/head';
// import Link from 'next/link';
// import { useRouter } from 'next/router';
// import { useCurrentUser } from '@hooks/index';



interface IFormInput {
  email: String;
  password: String;
}

const CreateResume = () => {


  return (
    <>
      <SEO title={"Create your Resume"}
        description={"We are the platform to provide you the best experiece to find remote jobs. We encourage jobs listing from different people / company."}
        image={""}
      />

    <div className="wrapper wrapper--small">
        <h3 className="headline">
            <b>Create Your Resume</b></h3>
        <p className="headline headline__text headline--dull">
            Fill in the below field once. Select the appropriate template. 
        </p>
    </div>

     <EditResume />
    </>
  );
};

export default CreateResume;

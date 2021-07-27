import React from 'react';

import SEO from '@components/SEO';
import Link from 'next/link';

const ResumeBuilder = () => {

  return (
    <>
      <SEO title={"Boost your chances for of landing dream jobs"}
        description={"We are the platform to provide you the best experiece to find remote jobs. We encourage jobs listing from different people / company."}
        image={""}
      />

      <div className="wrapper wrapper--narrow">
        <h1 className="headline m-b-50">
          Increase your chances of hiring.</h1>

        <p className="headline headline__text headline--dull m-b-10">
          Create you professionional resume. Export your resume in <b>PDF</b> or create a <b>link for your Resume</b> to share it with the world.</p>
        
        <Link href="/resumeBuilder/start">
          <a className="btn small">
            <span className="headline headline__text">
              <b>Get Started Now</b>
                </span>
            </a>
        </Link>
      </div>
    </>
  );
};

export default ResumeBuilder;

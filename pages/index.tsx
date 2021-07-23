import React from 'react';
// import { useCurrentUser } from '@hooks/index';
import SEO from '@components/SEO';

import JobsListing from '@components/listings/jobs/index';

import Link from 'next/link';

const IndexPage = () => {
  // const [user] = useCurrentUser();

  return (
    <>

      <SEO title={"Underline Jobs | Find Remote Jobs"}
        description={"We are the platform to provide you the best experiece to find remote jobs. We encourage jobs listing from different people / company."}
        image={""}
      />

      <div className="site-banner">
        <div className="wrapper wrapper--main wrapper--narrow">

          <div className="site-banner__barr flex">

            <div>
              <h1>Find Remote opertunity</h1>

              <p
                className="headline headline__text headline--dull headline--b-margin-large">
                in beta. We are the platform to provide you the best experiece to find remote jobs. We encourage jobs listing from different people / company.
              </p>

                
                  <Link href={`/job-post`}>
                    <a className="btn small m-r-25" type="button">
                      <span className="headline headline__text headline--white">
                        Job Post!
                      </span>
                    </a>
                  </Link>
                
                  <Link href={`/resumeBuilder`}>
                    <a className="btn small m-r-25" type="button">
                      <span className="headline headline__text headline--white">
                        create resume for awsome! 📄
                      </span>
                    </a>
                  </Link>

            </div>

            <div>

                <span className="headline headline__text">
                  Create Your Work Profile!
                </span>
            </div>

          </div>

        </div>

      </div>

      <div className="wrapper wrapper--narrow" style={{ marginBottom: '2rem' }}>
        <h2 className="headline headline__text">
          <b>List of Jobs</b>
        </h2>
        <JobsListing />
      </div>
    </>
  );
};

export default IndexPage;

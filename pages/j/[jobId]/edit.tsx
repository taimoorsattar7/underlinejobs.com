import React from 'react';
// import Head from 'next/head';
// import Error from 'next/error';
import { all } from '@middlewares/index';
// import { useCurrentUser } from '@hooks/index';
import { extractUser } from '@lib/api-helpers';
import { findUserById, findJobBySlug } from '@db/index';

import EditJob from '@components/job/Edit';

export default function JobPage(
    { user, value }: any
    ) {
    // if (!user) return <Error statusCode={404} />;
    // const {
    //     name, email, bio, profilePicture, _id
    // } = user || {};
    // const [currentUser] = useCurrentUser();
    // const isCurrentUser = currentUser?._id === user._id;


    return (
        <>
            <EditJob data={value} />

        </>
    );
}

export async function getServerSideProps(context: any) {
    await all.run(context.req, context.res);
    const user = extractUser(await findUserById(context.req.db, context.params.userId));
    const data = await findJobBySlug(context.req.db, context.params.jobId);
    if (!user) context.res.statusCode = 404;
    let value = JSON.parse(JSON.stringify(data))
    return { props: { user, value } };
}

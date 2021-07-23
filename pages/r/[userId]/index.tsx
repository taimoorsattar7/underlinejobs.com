import React from 'react';
import Head from 'next/head';
import Error from 'next/error';
import { all } from '@middlewares/index';
import { useCurrentUser } from '@hooks/index';
import { extractUser } from '@lib/api-helpers';
import { findUserById, findResumeById } from '@db/index';
import Resume from '@components/resume/Resume';
import EditResume from '@components/resume/Edit';
// import { defaultProfilePicture } from '@lib/default';

export default function UserPage(
    // { user, data }: any
    ) {
    // if (!user) return <Error statusCode={404} />;
    // const {
    //     name, email, bio, profilePicture, _id
    // } = user || {};
    // const [currentUser] = useCurrentUser();
    // const isCurrentUser = currentUser?._id === user._id;
    let data = {
        _id:"LdbM0aPNlChy",
        content:`My name is Taimoor Sattar. I've experienced in developing UI/UX for modern websites and populate the data from the back-end to visualize in the front-end.

        I've written a book about JAMstack. JAMstack is the modern way to build the websites as the front-end is decoupled from the back-end. You can read more about it below.`,
        creatorId:"yyRHhikDuVY_",
        name: "Taimoor Sattar",
        profession: "Full stack developer",
        website:"https://taimoorsattar.dev",
        exerpt:"My name is Taimoor Sattar. I've experienced in developing UI/UX for mo...",social: [{
            source: "twitter",
            url: "https://twitter.com/taimoorsattar7"
        }],

        projects: [{
            source: "twitter",
            title: "taimoorsattar.dev",
            exerpt: "My personal Blog"
        }],
        contact: "taimoorsattar7@gmail.com"
    }

    return (
        <>
            
            <Resume data={data} />

            {/* <EditResume data={data} /> */}

        </>
    );
}

// export async function getServerSideProps(context: any) {
//     await all.run(context.req, context.res);
//     const user = extractUser(await findUserById(context.req.db, context.params.userId));
//     const data = await findResumeById(context.req.db, context.params.userId);
//     if (!user) context.res.statusCode = 404;
//     return { props: { user, data } };
// }

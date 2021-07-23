import React, { useState, useEffect } from 'react';
import { useCurrentUser } from '@hooks/index';
// import rstyles from './Resume.module.scss'

import ProgressBar from '@components/progressBar/ProgressBar';

import AboutField from '@components/resume/editSections/aboutField';
import CertificationField from '@components/resume/editSections/certificationField';
import EducationField from '@components/resume/editSections/educationField';
import SkillsField from '@components/resume/editSections/skillsField';
import SocialField from '@components/resume/editSections/socialField';
import WorkFields from '@components/resume/editSections/workFields';

import Login from "@components/auth/login/Login"
import { changeTabs } from '@lib/tabs';

import { useForm, SubmitHandler } from "react-hook-form";
import Link from 'next/link';


type Inputs = {
    name: string,
    email: string,
    website: string,
    location: string,
    profession: string,
    exerpt: string,
    content: string
}

interface IFormInput {
    name: string,
    email: string,
    website: string,
    profession: string,
    exerpt: string,
    content: string
}

export default function EditResume({ data = {} }: any) {
    const [user] = useCurrentUser();
    const {
        register,
        handleSubmit,
        watch,
        control,
        formState: { errors }
    } = useForm<Inputs>();

    let [sectionsData, setSectionsData] = useState([{
        name: 'About',
        active: true,
        compound: <AboutField register={register}
                    watch={watch}
                    control={control}
                    errors={errors} />
    }, {
        name: 'Certification',
        active: false,
        compound: <CertificationField register={register}
                    watch={watch}
                    control={control}
                    errors={errors} />
    }, {
        name: 'Education',
        active: false,
        compound: <EducationField register={register}
        watch={watch}
        control={control}
        errors={errors} />
    }, {
        name: 'Add Skills',
        active: false,
        compound: <SkillsField register={register}
                    watch={watch}
                    control={control}
                    errors={errors} />
    }, {
        name: 'Social',
        active: false,
        compound: <SocialField register={register}
                    watch={watch}
                    control={control}
                    errors={errors} />
    }, {
        name: 'Work Experience',
        active: false,
        compound: <WorkFields register={register}
                    watch={watch}
                    control={control}
                    errors={errors} />
    }]);


    const onSubmit: SubmitHandler<IFormInput> = async (sdata: IFormInput): Promise<any> => {
        const body = {
            name: sdata.name,
            email: sdata.email,
            website: sdata.website,
            profession: sdata.profession,
            exerpt: sdata.exerpt,
            content: sdata.content
        };

        await fetch('/api/resume', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        });

        // if (res.status === 200) Router.replace('/');
    };

    function nextTab(){
        setSectionsData(changeTabs(sectionsData));
    }

    function previousTab(){
        setSectionsData(changeTabs(sectionsData, false));
    }

    if (!user){
        return (
            <div className="wrapper wrapper--narrow">
                <div className="m-l-80 m-r-80">
                    <ProgressBar pbData={sectionsData} />
                </div>

                <div className="wrapper wrapper--small">
                    <p className="headline headline__text">
                        Please login first in order to post the job. If you are not login, please {" "}
                        <Link href="/signup">
                            <a>register</a>
                        </Link>.
                    </p>

                    <Login />
                </div>
            </div>
        )
    }


    return (
        <section className="wrapper wrapper--narrow">

            <form onSubmit={handleSubmit(onSubmit)}
                id="contact"
                action=""
                method="post">


            <div className="m-l-80 m-r-80">
                <ProgressBar pbData={sectionsData} />
            </div>

            {sectionsData.map((data, index) => (
                        <div
                            key={index}
                            style={{ display: `${(data.active == true) ? "block" : "none"}` }}
                        >
                            {(index > 0) && (<>
                                <div className="flex">

                                    <div>
                                        <span 
                                            onClick={previousTab}
                                            className="btn small headline headline__text">
                                                ← Back</span>
                                    </div>
                                    
                                    {(sectionsData.length == (index+1)) ? (
                                        <div className="text-right">
                                            <input  className="btn small headline headline__text"
                                                    type="submit"
                                                    value="click to submit 🎉" />
                                        </div>
                                    ): (
                                        <div className="text-right">
                                            <span 
                                            onClick={nextTab}
                                            className="btn small headline headline__text">
                                                Next →</span>
                                        </div>
                                    )
                                    
                                    }
                                    
                                </div>

                                <hr />
                                </>
                            )}
                            {data.compound}
                        </div>
                    ))}

            <input className="btn small headline headline__text headline--b"
                type="text"
                value="Next →" />
                  
            </form>


        </section>
    );
}

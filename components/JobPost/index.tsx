import React, { useState, useEffect } from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import Router, { useRouter } from 'next/router';

import {string_to_slug} from '@lib/string_to_slug';
import { useCurrentUser } from '@hooks/index';

import { changeTabs, checkActiveTab } from '@lib/tabs';
import Auth from "@components/auth/Auth"

import Link from 'next/link';

import JobPost from '@components/JobPost/sections/JobPost';
import ProgressBar from '@components/progressBar/ProgressBar';
import JobPge from '@components/job/Job';

interface IFormInput {
    postType: String;
    exampleRequired: String;
    example: String;
    applyLink: String;

    title: String;
    keyword: String;
    content: String;
    category: String;
    workTime: String;
    companySelect: String;
    
    companyId?: String;
    creatorId: String;

    companyName?: String;
    companyWebsite?: String;
    companyContent?: String;
    CompanyHeadquarter?: String;
    CompanyLogoURL?: String;
}


const JobPostMain = () => {
    const { register,
            handleSubmit,
            watch,
            control,
            formState: { errors } } = useForm<IFormInput>({mode: "all"});
    const [user] = useCurrentUser();
    
    let [formData, setFormData] = useState({})

    let [sectionsData, setSectionsData] = useState([{
        name: 'Fill the Fields',
        active: true,
        status: 'complete',
        compound: <JobPost  register={register}
                            watch={watch}
                            onNextTab={() => {
                                nextTab()
                            }}
                            control={control}
                            errors={errors} />
    }, {
        name: 'Preview Job',
        active: false,
        status: 'complete',
        compound: <JobPge 
            onPreviousTab={() => {
                previousTab()
            }}
            watch={watch}
            data={formData} />
    }]);
        

    const onSubmit: SubmitHandler<IFormInput> = async (data) => {
        
        let JobData = {
            postType: data.postType,
            title: data.title,
            content: data.content,
            keyword: data.keyword,
            workTime: data.workTime,
            category: data.category,
            applyLink: data.applyLink,
            slug: string_to_slug(data.title, true),
            companyId: ""
        };

        if (data.postType=="company"){
            if (data.companySelect == "newCompany"){
                let companyData = {
                    name: data.companyName,
                    content: data.companyContent,
                    website: data.companyWebsite,
                    location: data.CompanyHeadquarter,
                    logo_url: data.CompanyLogoURL,
                    slug: string_to_slug(String(data.companyName))
                };

                await fetch('/api/company', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(companyData),
                    })
                    .then(data => { return data.json(); })
                    .then(data => {
                        console.log("company", data)
                        data.company.companyId = data.company._id;
                    })
            }else{
                JobData.companyId = String(data.companySelect);
            }
            
        }
      
        await fetch('/api/jobs', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(JobData),
        }).then(data => { return data.json(); })
            .then(data => {
                Router.replace(`/j/${data.job.slug}`);
            });
        
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
                    <p className="headline headline__text m-b-30">
                        <b>Please register first in order to post the job.</b>
                    </p>

                    <Auth />
                </div>
            </div>
        )
    }
    
    return (
        <>  
            <div className="wrapper wrapper--narrow">
                <div className="m-l-80 m-r-80">
                    <ProgressBar pbData={sectionsData} />
                </div>

                <form onSubmit={handleSubmit(onSubmit)}>
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
                </form>
            </div>
        </>
    );
};

export default JobPostMain;

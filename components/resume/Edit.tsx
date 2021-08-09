import React, { useState } from 'react'
import { useCurrentUser } from '@hooks/index'
// import rstyles from './Resume.module.scss'

import ProgressBar from '@components/progressBar/ProgressBar'

import AboutField from '@components/resume/editSections/aboutField'
import CertificationField from '@components/resume/editSections/certificationField'
import EducationField from '@components/resume/editSections/educationField'
import SkillsField from '@components/resume/editSections/skillsField'
import SocialField from '@components/resume/editSections/socialField'
import WorkFields from '@components/resume/editSections/workFields'

import Auth from '@components/auth/Auth'
import { changeTabs } from '@lib/tabs'

import { useForm, useFieldArray, SubmitHandler } from 'react-hook-form'
// import Link from 'next/link'

interface IFormInput {
  name: string
  email: string
  website: string
  profession: string
  exerpt: string
  content: string
}

export default function EditResume({ data = {} }: any) {
  const { user } = useCurrentUser()
  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: 'all',
    defaultValues: {
      educationHistory: [
        {
          college: '',
          degree: '',
          country: '',
        },
      ],
      skills: [
        {
          tech: '',
        },
      ],
    },
  })

  const { fields } = useFieldArray({
    control,
    name: 'educationHistory',
  })

  let [sectionsData, setSectionsData] = useState([
    {
      name: 'About',
      active: true,
      compound: <AboutField register={register} watch={watch} control={control} errors={errors} />,
    },
    {
      name: 'Certification',
      active: false,
      compound: (
        <CertificationField register={register} watch={watch} control={control} errors={errors} />
      ),
    },
    {
      name: 'Education',
      active: false,
      compound: (
        <EducationField
          register={register}
          fields={fields}
          watch={watch}
          control={control}
          errors={errors}
        />
      ),
    },
    {
      name: 'Add Skills',
      active: false,
      compound: <SkillsField register={register} watch={watch} control={control} errors={errors} />,
    },
    {
      name: 'Social',
      active: false,
      compound: <SocialField register={register} watch={watch} control={control} errors={errors} />,
    },
    {
      name: 'Work Experience',
      active: false,
      compound: <WorkFields register={register} watch={watch} control={control} errors={errors} />,
    },
  ])

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    console.log(data)
    // const body = {
    //   name: data.name,
    //   email: data.email,
    //   website: data.website,
    //   profession: data.profession,
    //   exerpt: data.exerpt,
    //   content: data.content,
    // }

    // let res = await fetch('/api/resume', {
    //   method: 'PUT',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(body),
    // })

    // let responce = await res.json()

    // console.log(responce)

    // if (res.status === 200) Router.replace('/');
  }

  function nextTab() {
    setSectionsData(changeTabs(sectionsData))
  }

  function previousTab() {
    setSectionsData(changeTabs(sectionsData, false))
  }

  if (!user) {
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
    <section className="wrapper wrapper--narrow">
      <form onSubmit={handleSubmit(onSubmit)} id="contact" action="" method="post">
        <div className="m-l-80 m-r-80">
          <ProgressBar pbData={sectionsData} />
        </div>

        {sectionsData.map((data, index) => (
          <div key={index} style={{ display: `${data.active == true ? 'block' : 'none'}` }}>
            {index > 0 && (
              <>
                <div className="flex">
                  <div>
                    <span onClick={previousTab} className="btn small headline headline__text">
                      ← Back
                    </span>
                  </div>

                  {sectionsData.length == index + 1 ? (
                    <div className="text-right">
                      <input
                        className="btn small headline headline__text"
                        type="submit"
                        value="click to submit 🎉"
                      />
                    </div>
                  ) : (
                    <div className="text-right">
                      <span onClick={nextTab} className="btn small headline headline__text">
                        Next →
                      </span>
                    </div>
                  )}
                </div>

                <hr />
              </>
            )}
            <>
              {data.compound}

              {sectionsData.length == index + 1 ? (
                <input
                  className="btn small headline headline__text"
                  type="submit"
                  value="click to submit 🎉"
                />
              ) : (
                <input
                  className="btn small headline headline__text headline--b"
                  onClick={nextTab}
                  type="text"
                  value="Next →"
                />
              )}
            </>
          </div>
        ))}
      </form>
    </section>
  )
}

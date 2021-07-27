import React, { useState, useEffect } from 'react'
import CompanyFields from '@components/JobPost/fields/CompanyFields'

const JobPost = ({ register, watch, control, onNextTab, errors }: any) => {
  const [userCompanies, setUserCompanies] = useState([])

  const postTypeWatch = watch('postType')
  const watchComapny = watch('companySelect')

  useEffect(() => {
    async function fetchUsersCompany() {
      await fetch(`/api/company?by=${''}`)
        .then((data) => {
          return data.json()
        })
        .then((readData) => {
          setUserCompanies(readData.companies)
        })
    }

    fetchUsersCompany()
  }, [userCompanies])

  return (
    <>
      <div className="wrapper wrapper--wrapper">
        <h2 className="headline">Post a Job</h2>

        <fieldset>
          <div className="field__input__wrapper">
            <label htmlFor="postType" className="headline headline__text">
              <b>What type of Job Post relates to?</b>
            </label>

            <select id="postType" {...register('postType', { required: true })} form="category">
              <option value="company">🏢 Company</option>
              <option value="freelance">💻 Freelance work</option>
            </select>
          </div>

          <div className="field__input__wrapper">
            <label htmlFor="title" className="headline headline__text">
              <b>Title</b>
            </label>
            <input
              id="title"
              aria-invalid={errors.title ? 'true' : 'false'}
              name="title"
              className="input-form headline headline__text"
              {...register('title', {
                required: true,
                maxLength: 80,
              })}
              type="text"
              placeholder="Full Stack Software Engineer"
            />

            {errors.title && errors.title.type === 'required' && (
              <span role="alert" className="headline headline__text headline__error">
                <b>This is required</b>
              </span>
            )}

            {errors.title && errors.title.type === 'maxLength' && (
              <span role="alert" className="headline headline__text headline__error">
                <b>Max length exceeded</b>
              </span>
            )}
          </div>

          <div className="input-area field__input__wrapper" id="divKeywords">
            <label htmlFor="keyword" className="headline headline__text">
              <b>Keywords (upto 5 keywords)</b>
            </label>
            <input
              id="txtInput"
              aria-invalid={errors.keyword ? 'true' : 'false'}
              className="input-form headline headline__text"
              name="keyword"
              {...register('keyword', { required: true })}
              type="text"
              placeholder="HTML, CSS, Javascript"
            />

            {errors.keyword && (
              <span role="alert" className="headline headline__text headline__error">
                <b>Fix the error</b>
              </span>
            )}
          </div>

          <div className="input-area field__input__wrapper" id="divKeywords">
            <label htmlFor="keyword" className="headline headline__text">
              <b>Content (Markdown)</b>
            </label>

            <textarea
              id="smde"
              aria-invalid={errors.content ? 'true' : 'false'}
              {...register('content', { required: true })}
              className="headline headline__text"
              rows={8}
            />
            {errors.content && (
              <span role="alert" className="headline headline__text headline__error">
                <b>Fix the error</b>
              </span>
            )}
          </div>

          <div className="flex">
            <div className="field__input__wrapper">
              <label htmlFor="category" className="headline headline__text">
                <b>Category</b>
              </label>

              <select
                id="category"
                name="category"
                aria-invalid={errors.category ? 'true' : 'false'}
                {...register('category', { required: true })}
                form="category"
              >
                <option value="Designer">Designer</option>
                <option value="Front-end developer">Front-end developer</option>
                <option value="Full Stack developer">Full Stack developer</option>
                <option value="Marketing">Marketing</option>
                <option value="Other">Other</option>
              </select>

              {errors.category && (
                <span role="alert" className="headline headline__text headline__error">
                  <b>Fix the error</b>
                </span>
              )}
            </div>

            <div className="field__input__wrapper">
              <label htmlFor="workTime" className="headline headline__text">
                <b>Work Type</b>
              </label>

              <select
                id="workTime"
                name="workTime"
                aria-invalid={errors.workTime ? 'true' : 'false'}
                {...register('workTime', { required: true })}
                form="category"
              >
                <option value="Part Time">Part Time</option>
                <option value="Full Time">Full Time</option>
              </select>
            </div>
          </div>

          <div className="field__input__wrapper">
            <label htmlFor="applyLink" className="headline headline__text">
              <b>
                Apply Link <i>(Optional)</i>
              </b>
            </label>
            <input
              id="applyLink"
              aria-invalid={errors.applyLink ? 'true' : 'false'}
              name="applyLink"
              className="input-form headline headline__text"
              {...register('applyLink')}
              type="url"
              placeholder="https://example.url/applyLink"
            />

            {errors.title && (
              <span role="alert" className="headline headline__text headline__error">
                <b>Fix the error</b>
              </span>
            )}
          </div>

          <hr />

          {postTypeWatch == 'company' && (
            <>
              <div className="field__input__wrapper">
                <label htmlFor="companySelect" className="headline headline__text">
                  <b>Choose company from below options</b>
                </label>

                <select
                  id="companySelect"
                  name="companySelect"
                  aria-invalid={errors.companySelect ? 'true' : 'false'}
                  {...register('companySelect', { required: true })}
                  form="companySelect"
                >
                  {userCompanies && userCompanies.length ? (
                    <>
                      {userCompanies.map((company: any, index) => (
                        <option key={index} selected={index == 0 && true} value={company._id}>
                          {company.name}
                        </option>
                      ))}
                      <option value="newCompany">+ create new company</option>
                    </>
                  ) : (
                    <>
                      <option selected value="newCompany">
                        + create new company
                      </option>
                    </>
                  )}
                </select>
              </div>

              {watchComapny == 'newCompany' && (
                <CompanyFields
                  watch={watch}
                  errors={errors}
                  control={control}
                  register={register}
                />
              )}
            </>
          )}

          <div className="btns">
            <input
              className="btn small headline headline__text headline--b"
              onClick={onNextTab}
              type="text"
              value="Next →"
            />
          </div>
        </fieldset>
      </div>
    </>
  )
}

export default JobPost

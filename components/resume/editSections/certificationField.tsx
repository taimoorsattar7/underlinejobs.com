import React from 'react'

export default function CertificationField({ register }: any) {
  return (
    <>
      <section>
        <h2 className="headline">
          <b>Do you have any licenses or certifications?</b>
        </h2>
        {/* Work History Input */}
        <div className="field__input__wrapper">
          <label htmlFor="title" className="headline headline__text">
            <b>LICENSE / CERTIFICATION</b>
          </label>
          <input
            id="title"
            className="input-form headline headline__text"
            {...register('license')}
            type="text"
            placeholder="Fast Nuces"
            autoFocus
          />
        </div>
      </section>
    </>
  )
}

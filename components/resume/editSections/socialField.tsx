import React from 'react'

export default function SocialField({ register }: any) {
  return (
    <>
      <section>
        <h2 className="headline">
          <b>Social Media</b>
        </h2>
        {/* Work History Input */}
        <div className="field__input__wrapper">
          <label htmlFor="title" className="headline headline__text">
            <b>Social Media</b>
          </label>

          <input
            id="title"
            className="input-form headline headline__text"
            {...register('social', { required: true })}
            type="text"
            placeholder="Fast Nuces"
            autoFocus
          />
        </div>

        <div className="field__input__wrapper">
          <label htmlFor="title" className="headline headline__text">
            <b>Social Media</b>
          </label>

          <input
            id="title"
            className="input-form headline headline__text"
            {...register('social', { required: true })}
            type="text"
            placeholder="Fast Nuces"
            autoFocus
          />
        </div>
      </section>
    </>
  )
}

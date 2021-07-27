import React from 'react'

export default function WorkFields({ register, errors }: any) {
  return (
    <>
      <section>
        <h2 className="headline">
          <b>Work Experience</b>
        </h2>

        {/* Work History Input */}
        <div className="field__input__wrapper">
          <label htmlFor="personalWebsite" className="headline headline__text">
            <b>Website (optional)</b>
          </label>
          <input
            id="personalWebsite"
            className="input-form headline headline__text"
            {...register('personalWebsite', {
              pattern: {
                value:
                  /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/g,
                message: 'Entered value does not match email format',
              },
            })}
            type="text"
            placeholder="https://yourwebsite.dev"
            autoFocus
          />

          {errors.personalWebsite && errors.personalWebsite.type === 'pattern' && (
            <span role="alert" className="headline headline__text headline__text headline__error">
              Entered value does not match website pattern
            </span>
          )}
        </div>
      </section>
    </>
  )
}

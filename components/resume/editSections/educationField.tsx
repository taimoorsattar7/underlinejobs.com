import React from 'react'

export default function EducationField({ register, fields }: any) {
  return (
    <>
      <section>
        <h2 className="headline">
          <b>Enter Your Education Details</b>
        </h2>

        {fields.map((item: any, index: Number) => {
          return (
            <div key={item.id}>
              <div className="field__input__wrapper">
                <label htmlFor="college" className="headline headline__text">
                  <b>College or university name</b>
                </label>

                <input
                  id="college"
                  className="input-form headline headline__text"
                  {...register(`educationHistory[${index}].college`)}
                  defaultValue={`${item.college}`}
                  type="text"
                  placeholder="Fast Nuces"
                  autoFocus
                />
              </div>

              <div className="field__input__wrapper">
                <label htmlFor="degree" className="headline headline__text">
                  <b>Degree / Program</b>
                </label>
                <input
                  id="degree"
                  className="input-form headline headline__text"
                  {...register(`educationHistory[${index}].degree`)}
                  defaultValue={`${item.degree}`}
                  type="text"
                  placeholder="Pakistan"
                  autoFocus
                />
              </div>

              <div className="field__input__wrapper">
                <label htmlFor="title" className="headline headline__text">
                  <b>Country</b>
                </label>
                <input
                  id="title"
                  className="input-form headline headline__text"
                  {...register(`educationHistory[${index}].country`)}
                  defaultValue={`${item.country}`}
                  type="text"
                  placeholder="Lahore, Pakistan"
                  autoFocus
                />
              </div>
            </div>
          )
        })}
      </section>
    </>
  )
}

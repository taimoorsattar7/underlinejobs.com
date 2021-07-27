import React from 'react'

export default function SkillsField({ register }: any) {
  // console.log(data)
  return (
    <>
      <section>
        <h2 className="headline">
          <b>What additional skills would you like to display?</b>
        </h2>
        {/* Work History Input */}
        <div className="field__input__wrapper">
          <label htmlFor="title" className="headline headline__text">
            <b>Skill</b>
          </label>
          <input
            id="title"
            className="input-form headline headline__text"
            {...register('license', { required: true })}
            type="text"
            placeholder="Fast Nuces"
            autoFocus
          />
        </div>
      </section>
    </>
  )
}

import React from 'react';

export default function WorkFields({
    register
}: any) {
    // console.log(data)
    return (
            <>
            <section>

<h2 className="headline">
        <b>Work Experience</b>
    </h2>

    {/* Work History Input */}
<div className="field__input__wrapper">
    <label htmlFor="title"
        className="headline headline__text">
            <b>Website (optional)</b>
    </label>
    <input
        id="title"
        className="input-form headline headline__text"
        {...register("name", { required: true })}
        type="text"
        placeholder="https://taimoorsattar.dev"
        autoFocus
    />
    
    </div>

    </section></>
    );
}

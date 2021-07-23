import React from 'react';

export default function EducationField({
    register
}: any) {
    // console.log(data)
    return (
            <>
            <section>

<h2 className="headline">
    <b>Enter Your Education Details</b>
</h2>
    {/* Work History Input */}
<div className="field__input__wrapper">
    <label htmlFor="title"
        className="headline headline__text">
            <b>College or university name</b>
    </label>
    <input
        id="title"
        className="input-form headline headline__text"
        {...register("educationSchool", { required: true })}
        type="text"
        placeholder="Fast Nuces"
        autoFocus
    />
    
    </div>

    <div className="field__input__wrapper">
    <label htmlFor="title"
        className="headline headline__text">
            <b>Degree / Program</b>
    </label>
    <input
        id="title"
        className="input-form headline headline__text"
        {...register("country", { required: true })}
        type="text"
        placeholder="Pakistan"
        autoFocus
    />
    
    </div>

    <div className="field__input__wrapper">
    <label htmlFor="title"
        className="headline headline__text">
            <b>Country</b>
    </label>
    <input
        id="title"
        className="input-form headline headline__text"
        {...register("country", { required: true })}
        type="text"
        placeholder="Pakistan"
        autoFocus
    />
    
    </div>
</section>
            </>
    );
}

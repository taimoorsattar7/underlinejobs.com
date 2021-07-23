import React from 'react';

interface IFormInput {
    title: String;
    keyword: String;
    content: String;
    category: String;
    companyId?: String;
    creatorId: String;
}

const CompanyFields = ({
    register,
    errors}: any) => {

    return (
        <>
        <div className="flex flex-gap-l">
            <div className="field__input__wrapper">
                <label htmlFor="companyName"
                        className="headline headline__text">
                            <b>Company Name</b>
                </label>
                <input
                    id="companyName"
                    className="input-form headline headline__text"
                    aria-invalid={errors.companyName ? "true" : "false"}
                    {...register("companyName", { required: true })}
                    type="text"
                    placeholder="Google Inc."
                />

                {errors.companyName &&
                    <span role="alert" className="headline headline__text headline__error">
                        Fix the error</span>}
            
            </div>
            

            <div className="field__input__wrapper">
                <label htmlFor="companyWebsite"
                        className="headline headline__text">
                            <b>Company Website</b>
                </label>
                <input
                    id="companyWebsite"
                    aria-invalid={errors.companyWebsite ? "true" : "false"}
                    className="input-form headline headline__text"
                    {...register("companyWebsite", { required: true })}
                    type="url"
                    placeholder="https://www.google.com"
                />

                {errors.companyWebsite &&
                <span role="alert" className="headline headline__text headline__error">
                    Fix the error</span>}
            
            </div>

        </div>


        <div className="field__input__wrapper">
                <label htmlFor="CompanyHeadquarter"
                        className="headline headline__text">
                            <b>Company Headquarter</b>
                </label>
                <input
                    id="CompanyHeadquarter"
                    aria-invalid={errors.CompanyHeadquarter ? "true" : "false"}
                    className="input-form headline headline__text"
                    {...register("CompanyHeadquarter", { required: true })}
                    type="url"
                    placeholder="Amesterdam Netherlands"
                />

                {errors.companyWebsite &&
                <span role="alert" className="headline headline__text headline__error">
                    Fix the error</span>}
            
            </div>
            

            

            <div className="text-editor">

                <input className="upload_file"
                       type="file"
                       name="logo[uploaded_data]"
                       id="logo_uploaded_data" />

                <label id="editor-text">
                    Click or drag your photo here to upload </label>
            </div>

            <div className="input-area field__input__wrapper"
                         id="divKeywords">

                    <label htmlFor="companyContent"
                           className="headline headline__text">
                        <b>Company Description <i>(Markdown)</i></b>
                    </label>

                    <textarea
                        id="companyContent"
                        aria-invalid={errors.companyContent ? "true" : "false"}
                        {...register("companyContent", { required: true })}
                        className="headline headline__text"
                        rows={6} />
                    </div>
        </>
    );
};

export default CompanyFields;

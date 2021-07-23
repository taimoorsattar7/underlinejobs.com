import React from 'react';
import style from './Resume.module.scss'
import { Icon } from '@components/icon/Icon'

export default function AboutField({
    register }: any) {

    return (
            <>
            <div className="flex">

        {/* Name Input */}
        <div className="field__input__wrapper">
            <label htmlFor="name"
                className="headline headline__text">
                    <b>Name</b>
            </label>
            <input
                id="name"
                className="input-form headline headline__text"
                {...register("name", { required: true })}
                type="text"
                placeholder="Your name"
                autoFocus
            />
            
            </div>

            {/* Profession Input */}
        <div className="field__input__wrapper">
            <label htmlFor="profession"
                className="headline headline__text">
                    <b>Profession</b>
            </label>
            <input
                id="profession"
                className="input-form headline headline__text"
                {...register("profession", { required: true })}
                type="text"
                placeholder="Front end Developer"
                autoFocus
            />
            
            </div>

        </div>


        <div className="flex">

        <div className="field__input__wrapper">
        <label htmlFor="title"
            className="headline headline__text">
                <b>Email</b>
        </label>
        <input
            id="title"
            className="input-form headline headline__text"
            {...register("name", { required: true })}
            type="email"
            placeholder="your@email.com"
            autoFocus
        />

        </div>

        <div className="field__input__wrapper">
        <label htmlFor="title"
            className="headline headline__text">
                <b>Location</b>
        </label>
        <input
            id="title"
            className="input-form headline headline__text"
            {...register("location", { required: true })}
            type="text"
            placeholder="New York City, USA"
            autoFocus
        />

        </div>

        </div>
        {/* Email Input */}


        {/* Exerpt Input */}
        <div className="input-area field__input__wrapper"
            id="divKeywords">
            <label htmlFor="excerpt"
                className="headline headline__text">
                <b>Tell about yourself (1-3 lines)</b>
            </label>

            <textarea
                id="excerpt"
                {...register("content", { required: true })}
                className="headline headline__text"
                placeholder="I'm a front-end developer, designer, and educator. I’ve been building user interfaces for over a decade."
                rows={5} />
        </div>

        {/* Website Input */}
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
            
            </div></>
    );
}

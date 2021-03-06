import React, { useState, useEffect } from 'react'
import Link from 'next/link'

export default function JobPge({ watch, data = {} }: any) {
  let [jData, setJData] = useState(data)

  useEffect(() => {
    try {
      let watchData = watch()
      if (watchData) {
        setJData(watchData)
      }
    } catch (e) {}
  }, [jData])

  return (
    <div className="wrapper wrapper--narrow">
      <p className="headline headline__text">
        <Link href="/">
          <a>โ Back to all jobs</a>
        </Link>
      </p>
      <header className="flex m-b-45">
        <div>
          <h1 className="headline">{jData.title ?? ''}</h1>
          <span className="headline headline__text headline--r-margin-sml">๐ Remote</span>
          <span className="headline headline__text headline--r-margin-sml">ยท</span>
          <span className="headline headline__text">Posted on 18 Mar</span>
          <div>
            <div className="btns">
              {jData.workTime && (
                <span className="btn tiny btn-field">
                  <span className="headline headline__sml headline--white">
                    <span className="headline headline__sml headline--r-margin-sml">๐ผ</span>
                    <b>{jData.workTime}</b>
                  </span>
                </span>
              )}

              {jData.category && (
                <span className="btn tiny btn-field">
                  <span className="headline headline__sml headline--white">
                    <span className="headline headline__sml headline--r-margin-sml">๐ป</span>
                    <b>{jData.category}</b>
                  </span>
                </span>
              )}
            </div>
          </div>
        </div>
      </header>

      <main className="m-b-35">
        <p className="headline headline__text">{jData.content ?? ''}</p>
      </main>

      {data.applyLink && (
        <a className="btn small" href="btn">
          <span className="headline headline__text headline--white">Apply for this position</span>
        </a>
      )}
    </div>
  )
}

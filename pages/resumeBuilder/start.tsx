import React from 'react'
import SEO from '@components/SEO'

import EditResume from '@components/resume/Edit'

const ResumeBuilderStart = () => {
  return (
    <>
      <SEO title={'Build your Resume'} description={''} image={''} />

      <EditResume />
    </>
  )
}

export default ResumeBuilderStart

import React from 'react'
import StudentPageComp from './StudentPageComp'

const PeriodPageComp = props => {
  return (
    <>
      <section>
        <h2>
          Period {props.periodNumber} - {props.subject}
        </h2>
        <StudentPageComp />
      </section>
    </>
  )
}

export default PeriodPageComp

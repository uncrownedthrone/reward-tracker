import React from 'react'

const PeriodPageComp = props => {
  return (
    <>
      <section>
        <h2>
          Period {props.periodNumber} - {props.subject}
        </h2>
      </section>
    </>
  )
}

export default PeriodPageComp

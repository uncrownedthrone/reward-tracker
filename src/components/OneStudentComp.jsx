import React from 'react'

const OneStudentComp = props => {
  return (
    <>
      <section>
        <h2>NAME - {props.name}</h2>
        <p>HOUSE - {props.house}</p>
        <ul className="studentPageUl">
          <li className="studentPageLi">Period 1 - 10 McGonagall's Moola</li>
        </ul>
      </section>
    </>
  )
}

export default OneStudentComp

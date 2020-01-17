import React, { useState, useEffect } from 'react'
import axios from 'axios'
import StudentPageComp from './StudentPageComp'

const PeriodPageComp = props => {
  const [student, setStudent] = useState([])

  const getStudents = async () => {
    const resp = await axios.get('https://localhost:5001/api/Student/')
    setStudent(resp.data)
  }

  useEffect(() => {
    getStudents()
  }, [])

  return (
    <>
      <section>
        <h2>
          Period {props.periodNumber} - {props.subject}
        </h2>
        {student.map((student, i) => {
          return (
            <>
              <div class="wrap-collabsible">
                <input id="collapsible" className="toggle" type="checkbox" />
                <label for="collapsible" className="lbl-toggle">
                  {student.name}
                </label>
                <div class="collapsible-content">
                  <div class="content-inner">
                    <div className="addButtons">
                      <button className="addCollapseButton">ADD 1</button>
                      <button className="addCollapseButton">ADD 3</button>
                      <button className="addCollapseButton">ADD 5</button>
                    </div>
                    <div className="redeemButtons">
                      <button className="redeemCollapseButton">REDEEM 1</button>
                      <button className="redeemCollapseButton">REDEEM 3</button>
                      <button className="redeemCollapseButton">REDEEM 5</button>
                    </div>
                    <input
                      className="collapseText"
                      type="text"
                      placeholder="ADD/REDEEM Reason"
                    />
                    <button className="collapseButton">Submit</button>
                  </div>
                </div>
              </div>
            </>
          )
        })}
      </section>
    </>
  )
}

export default PeriodPageComp

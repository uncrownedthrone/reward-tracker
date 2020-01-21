import React, { useState, useEffect } from 'react'
import axios from 'axios'

const OneStudentComp = props => {
  const [student, setStudent] = useState({})
  const [isExpanded, setIsExpanded] = useState(false)

  const getStudent = async () => {
    const resp = await axios.get(
      `https://localhost:5001/api/Student/${props.periodId}`
    )
    setStudent(resp.data)
  }

  // const getReward = async () => {
  //   const resp = await axios.get(
  //     `https://localhost:5001/api/Student/AllRewards/${props.periodId}`
  //   )
  //   setReward(resp.data)
  // }

  // post to value
  // add a row and sum up

  useEffect(() => {
    getStudent()
    // getReward()
  }, [])

  return (
    <>
      <div class="wrap-collabsible">
        <input id="collapsible" className="toggle" type="checkbox" />
        <label for="collapsible" className="lbl-toggle">
          {student.name} - {student.house}
        </label>
        <div class="collapsible-content">
          <div class="content-inner">
            <div className="addButtons">
              <button className="addCollapseButton">ADD 1</button>
            </div>
            <div className="redeemButtons">
              <button className="redeemCollapseButton">REDEEM 1</button>
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
}

export default OneStudentComp

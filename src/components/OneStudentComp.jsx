import React, { useState, useEffect } from 'react'
import axios from 'axios'

const OneStudentComp = props => {
  const [student, setStudent] = useState({})
  const [reward, setReward] = useState([])

  const getStudent = async () => {
    const resp = await axios.get(
      `https://localhost:5001/api/Student/${props.match.params.id}`
    )
    setStudent(resp.data)
  }

  const getReward = async () => {
    const resp = await axios.get(
      `https://localhost:5001/api/Student/AllRewards/${props.match.params.id}`
    )
    setReward(resp.data)
  }

  const AddReward = async () => {
    const resp = await axios.put(
      `https://localhost:5001/api/Student/Add/${props.match.params.id}`
    )
    if (resp.status === 200) {
      setStudent(student => {
        student.AddReward += 1
        return {
          ...student,
        }
      })
    }
  }

  const RedeemReward = async () => {
    const resp = await axios.put(
      `https://localhost:5001/api/Student/Redeem/${props.match.params.id}`
    )
    if (resp.status === 200) {
      setStudent(student => {
        student.RedeemReward -= 1
        return {
          ...student,
        }
      })
    }
  }

  useEffect(() => {
    getStudent()
    getReward()
  }, [])

  return (
    <>
      <div class="wrap-collabsible">
        <input id="collapsible" className="toggle" type="checkbox" />
        <label for="collapsible" className="lbl-toggle">
          {props.name}
          {student.name}
        </label>
        <div class="collapsible-content">
          <div class="content-inner">
            <div className="addButtons">
              <button className="addCollapseButton" onClick={AddReward}>
                ADD 1
              </button>
            </div>
            <div className="redeemButtons">
              <button className="redeemCollapseButton" onClick={RedeemReward}>
                REDEEM 1
              </button>
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

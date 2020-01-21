import React, { useState, useEffect } from 'react'
import axios from 'axios'

const OneStudentComp = props => {
  const [student, setStudent] = useState(props.student)
  const [reason, setReason] = useState('')
  const [isExpanded, setIsExpanded] = useState(false)

  const sendRewardToApi = async () => {
    const resp = await axios.post('https://localhost:5001/api/reward', {
      reason: reason,
      studentId: parseInt(props.match.params.id),
    })

    console.log(resp.data)
    setStudent(prev => {
      return {
        ...prev,
        rewards: [...prev.rewards.concat(resp.data)],
      }
    })
  }

  // post to value
  // add a row and sum up

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <div className="wrap-collabsible">
        {/* <input id="collapsible" className="toggle" type="checkbox" /> */}
        <label
          for="collapsible"
          className="lbl-toggle"
          onClick={() => {
            setIsExpanded(!isExpanded)
          }}
        >
          {student.name}
        </label>
        {isExpanded && (
          <div className="collapsible-content">
            <div className="content-inner">
              <div className="addButtons">
                <button className="addCollapseButton">ADD 1</button>
              </div>
              <div className="redeemButtons">
                <button className="redeemCollapseButton">REDEEM 1</button>
              </div>
              <input
                className="collapseText"
                type="text"
                value={reason}
                onChange={e => setReason(e.target.value)}
                placeholder="ADD/REDEEM Reason"
              />
              <button onClick={sendRewardToApi} className="collapseButton">
                Update Record
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default OneStudentComp

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const OneStudentComp = props => {
  const [student, setStudent] = useState(props.student)
  const [reason, setReason] = useState('')
  const [rewardAmount, setRewardAmount] = useState('')
  const [isExpanded, setIsExpanded] = useState(false)

  const sendRewardToApi = async () => {
    const resp = await axios.post(
      'https://reward-tracker-api.herokuapp.com/api/reward',
      {
        reason: reason,
        rewardAmount: parseInt(rewardAmount),
        studentId: parseInt(props.student.id),
      }
    )
    console.log(resp.data)
  }

  return (
    <>
      <div className="wrap-collabsible">
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
                <button
                  className="addCollapseButton"
                  value={1}
                  onClick={e => setRewardAmount(e.target.value)}
                >
                  ADD 1
                </button>
                <button
                  className="addCollapseButton"
                  value={3}
                  onClick={e => setRewardAmount(e.target.value)}
                >
                  ADD 3
                </button>
                <button
                  className="addCollapseButton"
                  value={5}
                  onClick={e => setRewardAmount(e.target.value)}
                >
                  ADD 5
                </button>
              </div>
              <div className="redeemButtons">
                <button
                  className="redeemCollapseButton"
                  value={-1}
                  onClick={e => setRewardAmount(e.target.value)}
                >
                  REDEEM 1
                </button>
                <button
                  className="redeemCollapseButton"
                  value={-3}
                  onClick={e => setRewardAmount(e.target.value)}
                >
                  REDEEM 3
                </button>
                <button
                  className="redeemCollapseButton"
                  value={-5}
                  onClick={e => setRewardAmount(e.target.value)}
                >
                  REDEEM 5
                </button>
              </div>
              <input
                className="collapseText"
                type="text"
                value={reason}
                onChange={e => setReason(e.target.value)}
                placeholder="ADD/REDEEM Reason"
              />
              <button onClick={sendRewardToApi} className="collapseButton">
                Update {student.name}'s Moola
              </button>
              <button className="collapseButton">
                <Link to={`/student/${student.id}`}>
                  View {student.name}'s Moola
                </Link>
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default OneStudentComp

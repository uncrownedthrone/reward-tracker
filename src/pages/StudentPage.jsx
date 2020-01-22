import React, { useState, useEffect } from 'react'
import axios from 'axios'

const StudentPage = props => {
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

  useEffect(() => {
    getStudent()
    getReward()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <section>
        <h2>
          {student.name} - {student.house}
        </h2>
        <p>Add/Redeem History</p>
        {reward.map(reward => {
          return (
            <>
              <ul>
                <li>
                  Reason: {reward.reason} | Moola: {reward.rewardAmount}
                </li>
              </ul>
            </>
          )
        })}
      </section>
    </>
  )
}

export default StudentPage

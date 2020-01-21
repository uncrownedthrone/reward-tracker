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
        {reward.map(reward => {
          return <p>McGonagall's Moola - {reward.id}</p>
        })}
        <ul>Add/Redeem History</ul>
        <li>Added 1</li>
        <li>Redeemed 1</li>
      </section>
    </>
  )
}

export default StudentPage

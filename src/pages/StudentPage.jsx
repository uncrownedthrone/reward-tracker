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
    console.log(resp.data)
  }

  const getReward = async () => {
    const resp = await axios.get(
      `https://localhost:5001/api/Student/AllRewards/${props.match.params.id}`
    )
    setReward(resp.data)
    console.log(resp.data)
  }

  useEffect(() => {
    getStudent()
    getReward()
  }, [])

  return (
    <>
      <section>
        <h2>{student.name}</h2>
        {reward.map((reward, i) => {
          return <p>McGonagall's Moola - {reward.rewardRecord}</p>
        })}
      </section>
    </>
  )
}

export default StudentPage

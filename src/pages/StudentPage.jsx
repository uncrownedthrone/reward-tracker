import React, { useState, useEffect } from 'react'
import axios from 'axios'

const StudentPage = props => {
  const [student, setStudent] = useState({})
  const [reward, setReward] = useState([])
  const [totalRewards, setTotalRewards] = useState()

  const getStudent = async () => {
    const resp = await axios.get(
      `https://reward-tracker-api.herokuapp.com/api/Student/${props.match.params.id}`
    )
    setStudent(resp.data)
  }

  const getReward = async () => {
    const resp = await axios.get(
      `https://reward-tracker-api.herokuapp.com/api/Student/AllRewards/${props.match.params.id}`
    )
    setReward(resp.data)
    const total = resp.data.reduce((acc, reward) => {
      return acc + reward.rewardAmount
    }, 0)
    setTotalRewards(total)
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
        <h3>Add/Redeem History</h3>
        <ul className="moolaListUl">
          {reward.map(reward => {
            return (
              <>
                <li className="moolaListLi">
                  {reward.reason}
                  <span>&nbsp;</span>
                  <i class="fas fa-broom">
                    <span>&nbsp;</span>
                  </i>
                  {reward.rewardAmount}
                </li>
              </>
            )
          })}
        </ul>
        <button>Total Moola: {totalRewards}</button>
      </section>
    </>
  )
}

export default StudentPage

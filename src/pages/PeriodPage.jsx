import React, { useEffect, useState } from 'react'
import PeriodPageComp from '../components/PeriodPageComp'
import axios from 'axios'
import OneStudentComp from '../components/OneStudentComp'

const PeriodPage = props => {
  const [period, setPeriod] = useState({})
  const [student, setStudent] = useState([])

  const getPeriod = async () => {
    const resp = await axios.get(
      `https://localhost:5001/api/Period/${props.match.params.id}`
    )
    setPeriod(resp.data)
  }

  const getStudents = async () => {
    const resp = await axios.get('https://localhost:5001/api/Student')
    setStudent(resp.data)
    console.log(resp.data)
  }

  useEffect(() => {
    getPeriod()
    getStudents()
  }, [])

  return (
    <div>
      <PeriodPageComp
        periodNumber={period.periodNumber}
        subject={period.subject}
      />
      <ul>
        {student.map((student, i) => {
          return (
            <>
              <li>
                <OneStudentComp name={student.name} house={student.house} />
              </li>
            </>
          )
        })}
      </ul>
    </div>
  )
}

export default PeriodPage

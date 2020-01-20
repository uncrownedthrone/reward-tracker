import React, { useEffect, useState } from 'react'
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
    const resp = await axios.get(
      `https://localhost:5001/api/Period/AllStudentsJoin/${props.match.params.id}`
    )
    setStudent(resp.data)
  }

  useEffect(() => {
    getPeriod()
    getStudents()
  }, [])

  return (
    <>
      <section>
        <h2>
          Period {period.periodNumber} - {period.subject}
        </h2>
        {student.map((student, i) => {
          return <OneStudentComp name={student.name} house={student.house} />
        })}
      </section>
    </>
  )
}

export default PeriodPage

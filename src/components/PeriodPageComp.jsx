import React, { useState, useEffect } from 'react'
import axios from 'axios'
import StudentPageComp from './StudentPageComp'

const PeriodPageComp = props => {
  const [student, setStudent] = useState([])
  // const [periodId, setPeriodId] = useState('')

  const getStudents = async () => {
    const resp = await axios.get('https://localhost:5001/api/Student/')
    setStudent(resp.data)
  }

  // const getPeriodId = async () => {
  //   const resp = await axios.get(
  //     `https://localhost:5001/api/Period/${props.match.params.id}`
  //   )
  //   setPeriodId(resp.data.id)
  // }

  useEffect(() => {
    getStudents()
    // getPeriodId()
  }, [])

  return (
    <>
      <section>
        <h2>
          Period {props.periodNumber} - {props.subject}
        </h2>
        {student.map((student, i) => {
          return (
            <>
              <StudentPageComp name={student.name} house={student.house} />
            </>
          )
        })}
      </section>
    </>
  )
}

export default PeriodPageComp

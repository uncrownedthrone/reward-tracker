import React, { useEffect, useState } from 'react'
import axios from 'axios'
import OneStudentComp from '../components/OneStudentComp'

const PeriodPage = props => {
  const [period, setPeriod] = useState({})
  const [students, setStudents] = useState([])
  const [newStudent, setNewStudent] = useState({})

  const getPeriod = async () => {
    const resp = await axios.get(
      `https://reward-tracker-api.herokuapp.com/api/Period/${props.match.params.id}`
    )
    setPeriod(resp.data)
  }

  const getStudents = async () => {
    const resp = await axios.get(
      `https://reward-tracker-api.herokuapp.com/api/Period/AllStudentsJoin/${props.match.params.id}`
    )
    setStudents(resp.data)
  }

  const updateStudentObject = e => {
    e.persist()
    setNewStudent(prevStudent => ({
      ...prevStudent,
      [e.target.name]: e.target.value,
    }))
  }

  const submitNewStudent = async e => {
    e.preventDefault()
    const resp = await axios.post(
      'https://reward-tracker-api.herokuapp.com/api/student',
      {
        ...newStudent,
        periodId: parseInt(props.match.params.id),
      }
    )
    window.location.reload()
    console.log(resp.data)
  }

  useEffect(() => {
    getPeriod()
    getStudents()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <section>
        <h2>
          Period {period.periodNumber} - {period.subject}
        </h2>
        {students.map(student => {
          return (
            <OneStudentComp
              periodId={props.match.params.id}
              student={student}
            />
          )
        })}
      </section>
      <section>
        <>
          <h2>Add a Student?</h2>
          {/* <form onSubmit={submitNewStudent}> */}
          <input
            type="text"
            placeholder="Full Name"
            value={newStudent.name}
            name="name"
            onChange={updateStudentObject}
          />
          <input
            type="text"
            placeholder="House"
            value={newStudent.house}
            name="house"
            onChange={updateStudentObject}
          />
          <button onClick={submitNewStudent}>Add Student</button>
          {/* </form> */}
        </>
      </section>
    </>
  )
}

export default PeriodPage

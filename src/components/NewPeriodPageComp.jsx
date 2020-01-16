import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

const NewPeriodPageComp = () => {
  const [teachers, setTeachers] = useState([])
  const [teacherId, setTeacherId] = useState()
  const [classroom, setClassroom] = useState({})
  const [classroomId, setClassroomId] = useState()
  const [periodNumber, setPeriodNumber] = useState('')
  const [subject, setSubject] = useState('')
  const [
    wasClassroomCreatedSuccessfully,
    setWasClassroomCreatedSuccessfully,
  ] = useState(false)

  const getClassroom = async props => {
    const resp = await axios.get(
      `https://localhost:5001/api/classroom/${props.match.params.id}`
    )
    setClassroom(resp.data)
    setClassroomId(resp.data.id)
  }

  const getTeachers = async () => {
    const resp = await axios.get(`https://localhost:5001/api/teacher`)
    setTeachers(resp.data)
  }

  const sendClassroomToApi = async () => {
    const resp = await axios.post('https://localhost:5001/api/classroom', {
      teacherId: parseInt(teacherId),
      periodNumber: parseInt(periodNumber),
      subject: subject,
    })
    console.log(resp.data)
  }

  console.log(classroom)

  useEffect(() => {
    getTeachers()
    if (classroomId) {
      setWasClassroomCreatedSuccessfully(true)
    }
  }, [classroomId])

  return wasClassroomCreatedSuccessfully ? (
    <Redirect to={`/period/${classroomId}`} />
  ) : (
    <>
      <section className="newClassCompSection">
        <h2>Create a New Period</h2>
        <select onChange={e => setTeacherId(e.target.value)}>
          <option value="">Select Teacher</option>
          {teachers.map(teacher => {
            return (
              <option key={teacher.id} value={teacher.id}>
                {teacher.name}
              </option>
            )
          })}
        </select>
        <p>What's the period number?</p>
        <input
          placeholder="Period Number"
          type="number"
          value={periodNumber}
          onChange={e => setPeriodNumber(e.target.value)}
        />
        <p>What's the subject?</p>
        <input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={e => setSubject(e.target.value)}
        />
        <button onClick={sendClassroomToApi}>Create Period</button>
      </section>
    </>
  )
}

export default NewPeriodPageComp

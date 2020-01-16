import React, { useState, useEffect } from 'react'
import axios from 'axios'

const NewPeriodPageComp = () => {
  const [teachers, setTeachers] = useState([])
  const [teacherId, setTeacherId] = useState()
  const [classroom, setClassroom] = useState({})
  const [name, setName] = useState('')

  const getClassroom = async props => {
    const resp = await axios.get(
      `https://localhost:5001/api/classroom/${props.match.params.id}`
    )
    setClassroom(resp.data)
  }

  const getTeachers = async () => {
    const resp = await axios.get(`https://localhost:5001/api/teacher`)
    setTeachers(resp.data)
  }

  const sendClassroomToApi = async props => {
    const resp = await axios.post('https://localhost:5001/api/classroom', {
      teacherId: parseInt(teacherId),
      name,
    })
  }

  useEffect(() => {
    getTeachers()
  }, [])

  return (
    <>
      <section className="newClassCompSection">
        <h2>Create a New Period</h2>
        <p>What's the period number?</p>
        <input
          placeholder="Period Number"
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <h2>{classroom.teacherId}</h2>
        <p>What's the subject?</p>
        <input type="text" placeholder="Subject" />
        <select onChange={e => setTeacherId(e.target.value)}>
          <option value="">select teacher</option>
          {teachers.map(teacher => {
            return (
              <option key={teacher.id} value={teacher.id}>
                {teacher.name}
              </option>
            )
          })}
        </select>
        <button onClick={sendClassroomToApi}>Create Period</button>
      </section>
    </>
  )
}

export default NewPeriodPageComp

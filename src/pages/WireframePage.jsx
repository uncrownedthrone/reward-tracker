import React from 'react'
import AddSchool from '../images/addSchool.JPG'
import NewTeacher from '../images/newTeacher.JPG'
import TransferStudents from '../images/transferStudent.JPG'

const WireframePage = () => {
  return (
    <section>
      <h2>Add a New School</h2>
      <img src={AddSchool} alt="add school wireframe" className="wireframes" />
      <h2>New Teacher</h2>
      <img
        src={NewTeacher}
        alt="add teacher wireframe"
        className="wireframes"
      />
      <h2>Transfer Students</h2>
      <img
        src={TransferStudents}
        alt="transfer students wireframe"
        className="wireframes"
      />
    </section>
  )
}

export default WireframePage

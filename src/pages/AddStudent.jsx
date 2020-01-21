import React from 'react'

const AddStudent = () => {
  return (
    <section>
      <form>
        <input type="text" placeholder="Student Name" />
        <input type="text" placeholder="House" />
        <input type="number" placeholder="Period" />
        <button>Add</button>
      </form>
    </section>
  )
}

export default AddStudent

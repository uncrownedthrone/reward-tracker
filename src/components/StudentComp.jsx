import React from 'react'

const StudentComp = () => {
  return (
    <>
      <div class="wrap-collabsible">
        <input id="collapsible" className="toggle" type="checkbox" />
        <label for="collapsible" className="lbl-toggle">
          Harry Potter
        </label>
        <div class="collapsible-content">
          <div class="content-inner">
            <button>test 1</button>
            <p>test 2</p>
            <p>test 3</p>
            <button>test 4</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default StudentComp

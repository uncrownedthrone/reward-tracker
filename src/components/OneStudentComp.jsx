import React from 'react'

const OneStudentComp = props => {
  return (
    <>
      <div class="wrap-collabsible">
        <input id="collapsible" className="toggle" type="checkbox" />
        <label for="collapsible" className="lbl-toggle">
          {props.name}
        </label>
        <div class="collapsible-content">
          <div class="content-inner">
            <div className="addButtons">
              <button className="addCollapseButton">ADD 1</button>
            </div>
            <div className="redeemButtons">
              <button className="redeemCollapseButton">REDEEM 1</button>
            </div>
            <input
              className="collapseText"
              type="text"
              placeholder="ADD/REDEEM Reason"
            />
            <button className="collapseButton">Submit</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default OneStudentComp

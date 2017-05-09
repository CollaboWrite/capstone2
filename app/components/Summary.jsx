import React from 'react'

const statusOptions = ['To Do', 'First Draft', 'Revised Draft', 'Final Draft']

export default (props) =>
  <div className="panel panel-warning">
    <div className="panel-heading">
      <h3>Summary</h3>
    </div>
    <div className="panel-body">
      <textarea
          className='scratchpad'
          rows={4}
          cols={40}
          value={props.summary}
       />
      <form>
        <div>
          <label>Label</label>
          <select>
            <option></option>
            {
              props.label && props.label.map(label => <option key={label}>{label}</option>)
            }
          </select>
        </div>
        <div>
          <label>Status</label>
          <select>
            {
              statusOptions.map(status => {
                status === props.status
                ? (<option selected>{status}</option>)
                : (<option>{status}</option>)
              })
            }
          </select>
        </div>
      </form>
    </div>
  </div>

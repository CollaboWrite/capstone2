import React from 'react'

export default (props) =>
  <div>
    <h3>Summary</h3>
    <p>This is a summary of the thing we are looking at</p>
    <form>
      <div>
        <label>Label</label>
        <select>
          <option></option>
          <option>Main</option>
          <option>New York</option>
          <option>Add new label</option>
        </select>
      </div>
      <div>
        <label>Status</label>
        <select>
          <option></option>
          <option>Draft 1</option>
          <option>Draft 2</option>
          <option>Final Draft</option>
        </select>
      </div>
    </form>
  </div>
import React from 'react'

export default (props) =>
  <div className="panel panel-success">
    <div className="panel-heading">
      <h3>Resources</h3>
    </div>
    <div className="panel-body">
      <ul>
        <li>Google: Google.com</li>
        <li>Bing: Bing.com</li>
        <li>Wiki: Wikipedia.com</li>
      </ul>
      <h4>Add a new resource</h4>
      <form>
        <div>
          <label>Title:</label>
          <input type='text' />
        </div>
        <div>
          <label>Url:</label>
          <input type='text' />
        </div>
        <button type='submit'>Add Resource</button>
      </form>
    </div>
  </div>

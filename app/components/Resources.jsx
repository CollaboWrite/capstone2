import React from 'react'

export default (props) =>
  <div>
    <h3>Resources</h3>
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

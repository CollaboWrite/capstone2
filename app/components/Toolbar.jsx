import React from 'react'

const Toolbar = (props) =>
  <nav className='toolbar navbar'>
    <select onChange={(evt) => {
      console.log(evt.target.value)
      props.fetchProject(evt.target.value)
    }
    }>
      {
        props.projects && props.projects.map(project => (
          <option value={project.id} key={project.id}>{project.title}</option>
        )
        )
      }
    </select>
    <button>Something</button>
    <button>Else</button>
    <button>Here</button>

  </nav>

export default Toolbar

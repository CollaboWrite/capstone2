import React from 'react'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showInput: false,
      newContainer: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(evt) {
    evt.preventDefault()
    this.setState({ newContainer: evt.target.value })
  }

  handleSubmit(evt) {
    evt.preventDefault()
    this.props.createContainer({ title: this.state.newContainer })
  }

  render() {
    const selectedProject = this.props.selectedProject
    console.log('SELECTED PROJECT', selectedProject)
    return (
      <div className='panel panel-info'>
        <div className='panel-heading'>
          <h3>Binder</h3>
        </div>
        <div className='panel-body'>
          <ul>
            <li>Chapter 1</li>
            <li>Chapter 2</li>
            <li>Chapter 3</li>
            <li>Chapter 4</li>
          </ul>
          <form onSubmit={this.handleSubmit}>
            <div>
              <label>New Folder</label>
              <input type='text' onChange={this.handleChange} />
            </div>
            <button type='submit'>Add Folder</button>
          </form>
        </div>
      </div>
    )
  }
}

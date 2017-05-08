import React from 'react'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
    this.write = this.write.bind(this)
    this.saveBlurb = this.saveBlurb.bind(this)
  }

  write(evt) {
    evt.preventDefault()
    this.setState({
      value: evt.target.value
    })
  }

  saveBlurb(evt) {
    evt.preventDefault()
    this.props.createBlurb({text: this.state.value})
  }

  render() {
    return (
      <div>
        <h3>Editor</h3>
        <textarea
          className='scratchpad'
          rows={10}
          cols={80}
          value={this.state.value}
          onChange={this.write} />
        <button onClick={this.saveBlurb}>Save Blurb</button>
      </div>
    )
  }
}

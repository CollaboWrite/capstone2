import React from 'react'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state({
      value=''
    })
    this.write = this.write.bind(this)
  }

  write(evt) {
    evt.preventDefault()
    this.setState({
      value: evt.target.value
    })
  }

  render() {
    return (
      <div>
      <textarea
          className='scratchpad'
          rows={10}
          cols={120}
          value={this.state.value}
          onChange={this.write}/>
    </div>
    )
  }
}
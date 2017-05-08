import React from 'react'

import Toolbar from '../components/Toolbar'
import Binder from '../components/Binder'
import Uploads from '../components/Uploads'
import Trashcan from '../components/Trashcan'

import Editor from '../components/Editor'

import Summary from '../components/Summary'
import Notes from '../components/Notes'
import Resources from '../components/Resources'

export default class extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <div className='col-lg-12'>
          <Toolbar />
        </div>
        <div className='col-lg-3 sidebar-right'>
          <Binder />
          <Uploads />
          <Trashcan />
        </div>
        <div className='col-lg-6 project-center'>
          <Editor />
        </div>
        <div className='col-lg-3 sidebar-left'>
          <Summary />
          <Notes />
          <Resources />
        </div>
      </div>
    )
  }
}

import React from 'react'

import Toolbar from '../components/Toolbar'
import Binder from '../components/Binder'
import Uploads from '../components/Uploads'
import Trashcan from '../components/Trashcan'

import EditorContainer from '../containers/EditorContainer'
import BinderContainer from '../containers/BinderContainer'


import Summary from '../components/Summary'
import Notes from '../components/Notes'
import Resources from '../components/Resources'

export default class extends React.Component {
  render() {
    return (
      <div>
        <div className='col-lg-12'>
          <Toolbar />
        </div>
        <div className='col-lg-3 sidebar-right'>
          <BinderContainer />
          <Uploads />
          <Trashcan />
        </div>
        <div className='col-lg-6 project-center'>
          <EditorContainer />
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

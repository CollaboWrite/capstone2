import React from 'react'
import {connect} from 'react-redux'

import ToolbarContainer from '../containers/ToolbarContainer'
import BinderContainer from '../containers/BinderContainer'
import Uploads from '../components/Uploads'
import Trashcan from '../components/Trashcan'
import EditorContainer from '../containers/EditorContainer'
import SummaryContainer from '../containers/SummaryContainer'
import Notes from '../components/Notes'
import Resources from '../components/Resources'

export default class AppContainer extends React.Component {
  render() {
    return (
      <div>
        <div className='col-lg-12'>
          <ToolbarContainer />
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
          <SummaryContainer />
          <Notes />
          <Resources />
        </div>
      </div>
    )
  }
}

// const mapStateToProps = (state) => ({projects: state.projects.list})

// const mapDispatchToProps = null

// export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)

import React from 'react'
import {connect} from 'react-redux'

import ToolbarContainer from '../containers/ToolbarContainer'
import BinderContainer from '../containers/BinderContainer'
import Trashcan from '../components/Trashcan'
import EditorContainer from '../containers/EditorContainer'
import Summary from '../components/Summary'
import NotesContainer from '../containers/NotesContainer'
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
          <Trashcan />
        </div>
        <div className='col-lg-6 project-center'>
          <EditorContainer />
        </div>
        <div className='col-lg-3 sidebar-left'>
          <Summary />
          <NotesContainer />
          <Resources />
        </div>
      </div>
    )
  }
}

// const mapStateToProps = (state) => ({projects: state.projects.list})

// const mapDispatchToProps = null

// export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)

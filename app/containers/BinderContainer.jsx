import {connect} from 'react-redux'
import Binder from '../components/Binder'
import {createContainer} from '../reducers/containers'
import {selectItem} from '../reducers/projects'

const mapStateToProps = (state) => ({ selectedProject: state.projects.selected })

const mapDispatchToProps = {createContainer, selectItem}

export default connect(mapStateToProps, mapDispatchToProps)(Binder)

import {connect} from 'react-redux'
import Binder from '../components/Binder'
import {selectItem} from '../reducers/items'

const mapStateToProps = (state) => ({ selectedProject: state.projects.selected })

const mapDispatchToProps = {selectItem}

export default connect(mapStateToProps, mapDispatchToProps)(Binder)

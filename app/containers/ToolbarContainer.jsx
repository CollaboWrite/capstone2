import { connect } from 'react-redux'
import Toolbar from '../components/Toolbar'
import { fetchProject } from '../reducers/projects'

const mapStateToProps = (state) => ({ projects: state.projects.list })

const mapDispatchToProps = { fetchProject }

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar)

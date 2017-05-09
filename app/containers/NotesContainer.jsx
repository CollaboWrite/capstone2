import {connect} from 'react-redux'
import Notes from '../components/Notes'

const mapStateToProps = (state) => ({ item: state.projects.item })

const mapDispatchToProps = null

export default connect(mapStateToProps, mapDispatchToProps)(Notes)

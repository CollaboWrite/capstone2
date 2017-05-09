import {connect} from 'react-redux'
import Notes from '../components/Notes'

const mapStateToProps = (state) => ({ item: state.items.selected })

const mapDispatchToProps = null

export default connect(mapStateToProps, mapDispatchToProps)(Notes)

import {connect} from 'react-redux'
import Editor from '../components/Editor'

const mapStateToProps = (state) => ({item: state.items.selected})

const mapDispatchToProps = null

export default connect(mapStateToProps, mapDispatchToProps)(Editor)

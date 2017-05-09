import {connect} from 'react-redux'
import Editor from '../components/Editor'
import {createBlurb} from '../reducers/blurbs'

const mapStateToProps = (state) => ({item: state.projects.item})

const mapDispatchToProps = {createBlurb}

export default connect(mapStateToProps, mapDispatchToProps)(Editor)

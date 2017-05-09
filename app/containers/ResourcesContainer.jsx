import { connect } from 'react-redux'
import Resources from '../components/Resources'
import {updateBlurb} from '../reducers/blurbs'

const mapStateToProps = (state) => ({ item: state.projects.item })

const mapDispatchToProps = {updateBlurb}

export default connect(mapStateToProps, mapDispatchToProps)(Resources)

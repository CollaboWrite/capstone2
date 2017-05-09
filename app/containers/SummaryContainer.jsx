import { connect } from 'react-redux'
import Summary from '../components/Summary'

const mapStateToProps = (state) => ({ item: state.projects.item })

const mapDispatchToProps = null

export default connect(mapStateToProps, mapDispatchToProps)(Summary)

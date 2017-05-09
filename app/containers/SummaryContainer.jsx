import { connect } from 'react-redux'
import Summary from '../components/Summary'

const mapStateToProps = (state) => ({ item: state.items.selected })

const mapDispatchToProps = null

export default connect(mapStateToProps, mapDispatchToProps)(Summary)

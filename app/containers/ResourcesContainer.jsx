import { connect } from 'react-redux'
import Resources from '../components/Resources'
import {updateItem} from '../reducers/items'

const mapStateToProps = (state) => ({ item: state.items.selected })

const mapDispatchToProps = {updateItem}

export default connect(mapStateToProps, mapDispatchToProps)(Resources)

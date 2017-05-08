import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: require('./auth').default,
  blurbs: require('./blurbs').default,
  containers: require('./containers').default,
})

export default rootReducer

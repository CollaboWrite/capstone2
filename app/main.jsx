'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'
import axios from 'axios'

import store from './store'
import Login from './components/Login'
import WhoAmI from './components/WhoAmI'
import NotFound from './components/NotFound'
import Home from './components/Home'
import Scratchpad from './components/Scratchpad'
import AppContainer from './containers/AppContainer'

import { fetchProjects } from './reducers/projects'

/* const ExampleApp = connect(
  ({ auth }) => ({ user: auth })
)(
  ({ user, children }) =>
    <div>
      <nav>
        {user ? <WhoAmI/> : <Login/>}
      </nav>
      {children}
    </div>
) */

const onAppEnter = () => {
  store.dispatch(fetchProjects())
}

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/'>
        <IndexRedirect to='/home' />
        <Route path='/home' component={Home} />
        <Route path='/scratchpad/:title' component={Scratchpad} />
        <Route path='/project' onEnter={onAppEnter} component={AppContainer} />
      </Route>
      <Route path='*' component={NotFound}/>
    </Router>
  </Provider>,
  document.getElementById('main')
)

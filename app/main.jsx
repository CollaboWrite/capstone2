'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'

import store from './store'
import Jokes from './components/Jokes'
import Login from './components/Login'
import WhoAmI from './components/WhoAmI'
import NotFound from './components/NotFound'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import Scratchpad from './components/Scratchpad'

import AppContainer from './containers/AppContainer'

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

const App = ({children}) =>
  <div>
    {children}
  </div>

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRedirect to='/home' />
        <Route path='/home' component={Home} />
        <Route path='/scratchpad/:title' component={Scratchpad} />
        <Route path='/project' component={AppContainer} />
      </Route>
      <Route path='*' component={NotFound}/>
    </Router>
  </Provider>,
  document.getElementById('main')
)

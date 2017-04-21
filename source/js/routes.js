import React, { Component } from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import App from './containers/App'
import Home from './views/HomeView'
import News from './views/NewsView'
import Form from './views/FormView'

const publicPath = '/'

export const routeCodes = {
  NEWS: `${publicPath}news`,
  FORM: `${publicPath}form`,
}

export default class Routes extends Component {
  render() {
    return (
      <Router history={browserHistory} >
        <Route path={publicPath} component={App} >
          <IndexRoute component={Home} />
          <Route path={routeCodes.NEWS} component={News} />
          <Route path={routeCodes.FORM} component={Form} />
        </Route>
      </Router>
    )
  }
}

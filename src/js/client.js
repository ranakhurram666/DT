import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Layout from "./components/Layout"
import Overview from './components/Overview';
import Main from './components/containers/Main';
import Performance from './components/containers/Performance';
import store from "./store"

const app = document.getElementById('app')

// ReactDOM.render(<Provider store={store}>
//   <Layout />
// </Provider>, app);

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
    <Route component={Main}>
      <IndexRoute component={Overview}>
      </IndexRoute>
      <Route path="performance" component={Performance}></Route>
    </Route>
    {/*<Route path="archives" name="archives" component={Archives}></Route>*/}
    </Route>
  </Router>,
app);
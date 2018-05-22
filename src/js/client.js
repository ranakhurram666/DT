import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Layout from "./components/Layout"
import Overview from './components/Overview';
import Main from './components/containers/Main';
import Performance from './components/containers/Performance';
import Revenue from './components/containers/Revenue';
import Categories from './components/containers/Categories';
import Program from './components/containers/Program';
import Episodes from './components/containers/Episodes';

import AgeGender from './components/containers/AgeGender';
import Location from './components/containers/Location';

import Newuploads from './components/containers/Newuploads';
import Mylibrary from './components/containers/Mylibrary';

import store from "./store"

const app = document.getElementById('app')

// ReactDOM.render(<Provider store={store}>
//   <Layout />
// </Provider>, app);

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
    <Route component={Main}>
      <IndexRoute component={Overview}></IndexRoute>
      <Route path="performance" component={Performance}></Route>
      <Route path="revenue" component={Revenue}></Route>
      <Route path="categories" component={Categories}></Route>
      <Route path="program" component={Program}></Route>
      <Route path="episodes" component={Episodes}></Route>
      <Route path="ageGender" component={AgeGender}></Route>
      <Route path="location" component={Location}></Route>
      
      <Route path="newuploads" component={Newuploads}></Route>
      <Route path="mylibrary" component={Mylibrary}></Route>

    </Route>
    {/*<Route path="archives" name="archives" component={Archives}></Route>*/}
    </Route>
  </Router>,
app);
import React from "react";
import { connect } from "react-redux";
import Performance from './Performance';

import PageTitle  from "../PageTitle";
import Overview  from "../Overview";
 
export default class Main extends React.Component {
  constructor() {
    super();
  }
  componentWillMount() {
  //this.props.dispatch(fetchUser())
  //document.title = "t"
  }

render() {
  return (
    <main id="main">
      <div class="main-wrapper">
        <div class="container-fluid">
          <PageTitle />
          <div class="main-content">
              {this.props.children}
          </div>
        </div>
        </div>
      </main>
    );
  }
}

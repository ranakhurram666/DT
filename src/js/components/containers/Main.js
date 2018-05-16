import React from "react";
import { connect } from "react-redux";

import PageTitle  from "../PageTitle";
import Overview  from "../Overview";
/*
@connect((store) => {
return {
user: store.user.user,
userFetched: store.user.fetched,
tweets: store.tweets.tweets,
};
})*/
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
            <Overview />
          </div>
        </div>
      </div>
    </main>
    );
}
}

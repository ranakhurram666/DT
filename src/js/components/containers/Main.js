import React from "react"
import { connect } from "react-redux"

import InnerMain  from "../InnerMain";
import PageTitle  from "../PageTitle";


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
}


render() {
  return (
    <main id="main">
    <div class="container-fluid">
    <div class="main-wrapper">
    <PageTitle />
    <InnerMain />
    </div>
    </div>
    </main>
    );
  }
}

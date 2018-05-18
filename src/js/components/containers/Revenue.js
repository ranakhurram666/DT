import React from "react";
import { connect } from "react-redux";
/*
@connect((store) => {
return {
user: store.user.user,
userFetched: store.user.fetched,
tweets: store.tweets.tweets,
};
})*/
export default class Revenue extends React.Component {
  constructor() {
    super();
  }
  componentWillMount() {
  //this.props.dispatch(fetchUser())
  //document.title = "t"
}

render() {
  return (

    <div>Hi from revenue</div>

    );
}
}

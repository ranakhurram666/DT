import React from "react"
import { connect } from "react-redux"

/*
@connect((store) => {
  return {
    user: store.user.user,
    userFetched: store.user.fetched,
    tweets: store.tweets.tweets,
  };
})*/

export default class PageTitle extends React.Component {
  constructor() {
    super();
  }
  componentWillMount() {
    //this.props.dispatch(fetchUser())
    
  }
  
  render() {
    return (
     <div class="heading">
        <h1>AMN Overview</h1>
      </div>
    );
  }
}

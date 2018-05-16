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

export default class Footer extends React.Component {
  constructor() {
    super();
  }
  componentWillMount() {
    //this.props.dispatch(fetchUser())
  }

  
  render() {
    return (
      <footer id="footer">
      <div class="footer-wrapper">   <p>All rights reserved with &copy; Telenor.</p>                                             
      </div>
      </footer>
      );
  }
}

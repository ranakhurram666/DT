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
export default class RatingListItem extends React.Component {
  constructor() {
    super();
  }
  componentWillMount() {
    //this.props.dispatch(fetchUser())
  }

  render() {
        return (
            <li><a href="#"><span className="order">#{this.props.rating}</span>{this.props.name}</a></li>
        );
  }
}

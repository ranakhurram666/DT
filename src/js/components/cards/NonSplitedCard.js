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
export default class NonSplitedCard extends React.Component {
  constructor() {
    super();
  }
  componentWillMount() {
    //this.props.dispatch(fetchUser())
  }

  render() {
        return (
        <div className="stats-wrapper bordered">
            <span className="value">{this.props.cardValue}</span>
            <span className="title">{this.props.cardTitle}</span>
        </div>
        );
  }
}

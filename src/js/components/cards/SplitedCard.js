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
export default class SplitedCard extends React.Component {
  constructor() {
    super();
  }
  componentWillMount() {
    //this.props.dispatch(fetchUser())
  }

  getRiseAndFall(rise, value) {
      if (rise) {
        return <span className="range"><i className="fas fa-arrow-up"></i> {value}%</span>;
      } else {
        return <span className="range danger"><i className="fas fa-arrow-down"></i> {value}%</span>;
      }
  }

  render() {
        return (
        <div className={this.props.colClass}>
        <div className="listener-tile">
            <div className="title">
                <h2><i className={this.props.icon}></i>{this.props.cardTitle}</h2>
            </div>
            <span className="value">{this.props.cardValue}</span>
            {this.getRiseAndFall(this.props.rise, this.props.percentValue)}
        </div>
        </div>
        );
  }
}

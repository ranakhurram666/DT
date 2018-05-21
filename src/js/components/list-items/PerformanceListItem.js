import React from "react"
import { connect } from "react-redux"
import TotalListItem from './TotalListItem';
/*
@connect((store) => {
  return {
    user: store.user.user,
    userFetched: store.user.fetched,
    tweets: store.tweets.tweets,
  };
})*/
export default class PerformanceListItem extends React.Component {
  constructor() {
    super();
  }
  componentWillMount() {
    //this.props.dispatch(fetchUser())
  }
  getRiseAndFall(rise, value) {
    if (rise) {
      return <span className="range sucess"><i className="fas fa-arrow-up"></i> {value}%</span>;
    } else {
      return <span className="range danger"><i className="fas fa-arrow-down"></i> {value}%</span>;
    }
  }

  render() {
        return (
            <tr>
                <td><span className="order">#{this.props.rating}</span>{this.props.name}</td>
                <TotalListItem total={this.props.total} rise={this.props.rise} percentValue={this.props.percentValue} />
            </tr>
        );
  }
}

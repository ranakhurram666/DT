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
export default class TotalListItem extends React.Component {
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
                <td> {this.props.total} <span className="range sucess"> {this.getRiseAndFall(this.props.rise, this.props.percentValue)} </span></td>
        );
  }
}

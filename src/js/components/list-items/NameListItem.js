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
export default class NameListItem extends React.Component {
  constructor() {
    super();
  }
  componentWillMount() {
    //this.props.dispatch(fetchUser())
  }
  getRiseAndFall(rise) {
    if (rise) {
      return <span className="range sucess"><i className="fas fa-caret-up"></i></span>;
    } else {
      return <span className="range danger"><i className="fas fa-caret-down"></i></span>;
    }
  }

  render() {
        return (
                <td><span className="range sucess"> {this.getRiseAndFall(this.props.rise)} </span> {this.props.name} </td>
        );
  }
}

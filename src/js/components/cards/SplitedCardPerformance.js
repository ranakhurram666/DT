import React from "react"
import { connect } from "react-redux"
import  TinyLineChart from '../charts/TinyLineChart'
/*
@connect((store) => {
  return {
    user: store.user.user,
    userFetched: store.user.fetched,
    tweets: store.tweets.tweets,
  };
})*/
export default class SplitedCardPerformance extends React.Component {
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
    <div className={this.props.colClass}>
      <div className="listener-tile performance-card">
          <div className="title">
              <h2>{this.props.cardTitle} <i className={this.props.icon}></i></h2>
          </div>
          <span className="value">{this.props.cardValue}</span>
          {this.getRiseAndFall(this.props.rise, this.props.percentValue)}
          <div class="performance-graph">
            <TinyLineChart data={this.props.tinyChartData} width={300} />
          </div>
          <div className="tagline">{this.props.tagLine}</div>
      </div>
    </div>
    );
  }
}

import React from "react"
import { connect } from "react-redux"
import { CartesianGrid, LineChart, Line } from 'recharts';

import thousandFormatter from '../../utils'
/*
@connect((store) => {
  return {
    user: store.user.user,
    userFetched: store.user.fetched,
    tweets: store.tweets.tweets,
  };
})*/
export default class TinyLineChart extends React.Component {
  constructor() {
    super();
  }
  componentWillMount() {
    //this.props.dispatch(fetchUser())
  }
  thousandFormatter(item) {
    if (item || item === 0) {
      if (item >= 1000) {
          return `${item/1000}K`;
      } else {
          return item;
      }
    }
    return ;
  }

  render() {
    return (
      <LineChart width={this.props.width} height={100} data={this.props.data}>
        <Line dot={false} type='monotone' dataKey='x' stroke='#8884d8' strokeWidth={2}/>
        <CartesianGrid strokeDasharray="4 4" vertical={false} horizontalPoints={[50]}></CartesianGrid>
      </LineChart>
      );
  }
}

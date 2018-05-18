import React from "react"
import { connect } from "react-redux"
import { XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar } from 'recharts';

import thousandFormatter from '../../utils'
/*
@connect((store) => {
  return {
    user: store.user.user,
    userFetched: store.user.fetched,
    tweets: store.tweets.tweets,
  };
})*/
export default class SimpleBarStackChart extends React.Component {
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
      <BarChart width={this.props.width} height={300} data={this.props.data}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
        <XAxis dataKey="name" type="category" />
        <YAxis tickFormatter={this.thousandFormatter} />
        <CartesianGrid strokeDasharray="4 4" vertical={false}/>
        <Tooltip content={(value) => {
           // We can create tooltip in a function.
          if (value.payload.length) {
            return (<div style={{backgroundColor: '#fff'}}>
              <p>UV: {value.payload[0].payload.uv}</p>
              <p>PV: {value.payload[0].payload.pv}</p>
            </div>);
          }
        }} />
        <Legend />
        <Bar stackId="a" dataKey="pv" fill={this.props.firstStack} />
        <Bar stackId="a" dataKey="uv" fill={this.props.secondStack} />

      </BarChart>
      );
  }
}

import React from "react"
import { connect } from "react-redux"
import { XAxis, YAxis, CartesianGrid, Tooltip, Legend, ScatterChart, ReferenceArea } from 'recharts';

import thousandFormatter from '../../utils'
/*
@connect((store) => {
  return {
    user: store.user.user,
    userFetched: store.user.fetched,
    tweets: store.tweets.tweets,
  };
})*/
export default class RefAreaChart extends React.Component {
  constructor() {
    super();
  }
  componentWillMount() {
    //this.props.dispatch(fetchUser())
  }

  daysFormatter(day) {
    return day[0].toUpperCase();
  }

  render() {
    return (
      <ScatterChart width={730} height={250} data={this.props.data}
          margin={{ top: 20, right: 20, bottom: 10, left: 10 }}>
          <XAxis dataKey="x" type="number" ticks={[100, 200, 300, 400, 500, 600]} />
          <YAxis dataKey="y" type="category" tickFormatter={this.daysFormatter}/>
          <CartesianGrid strokeDasharray="3 3" fill="#B2ACCD" />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Legend />
          <ReferenceArea x1={200} x2={300} y1={'Tue'} y2={'Wed'} fill="#51487C" stroke="red" strokeOpacity={0.3} />
          <ReferenceArea x1={300} x2={400} y1={'Tue'} y2={'Wed'} fill="#51487C" stroke="red" strokeOpacity={0.3} />
        </ScatterChart>
      );
  }
}

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
      <ScatterChart width={1100} height={250} data={this.props.data}
          margin={{ top: 20, right: 20, bottom: 10, left: 10 }}>
          <XAxis dataKey="x" type="category"  />
          <YAxis dataKey="y" type="category" tickFormatter={this.daysFormatter}/>
          <CartesianGrid strokeDasharray="3 3" fill="#B2ACCD" />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Legend />
          <ReferenceArea x1={'3 PM'} x2={'4 PM'} y1={'Tue'} y2={'Wed'} fill="#51487C" stroke="red" strokeOpacity={0.3} />
          <ReferenceArea x1={'4 PM'} x2={'5 PM'} y1={'Tue'} y2={'Wed'} fill="#51487C" stroke="red" strokeOpacity={0.3} />
          <ReferenceArea x1={'5 PM'} x2={'6 PM'} y1={'Tue'} y2={'Wed'} fill="#51487C" stroke="red" strokeOpacity={0.3} />
          <ReferenceArea x1={'6 PM'} x2={'7 PM'} y1={'Tue'} y2={'Wed'} fill="#51487C" stroke="red" strokeOpacity={0.3} />
        </ScatterChart>
      );
  }
}

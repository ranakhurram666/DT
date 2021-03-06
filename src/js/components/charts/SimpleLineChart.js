import React from "react"
import { connect } from "react-redux"
import { CartesianGrid, LineChart, Line,XAxis, YAxis, Tooltip} from 'recharts';


export default class SimpleLineChart extends React.Component {
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
        <LineChart width={this.props.width} height={400} data={this.props.data}>
            <XAxis dataKey="name" type="category" />
            <YAxis tickFormatter={this.thousandFormatter} />
            <Line dot={false} type='monotone' dataKey='uv' stroke='#8884d8' strokeWidth={2}/>
            <Line dot={false} type='monotone' dataKey='pv' stroke='#82ca9d' strokeWidth={2}/>
            <Line dot={false} type='monotone' dataKey='amt' stroke='#8884d8' strokeWidth={2}/>
            <CartesianGrid strokeDasharray="4 4" vertical={false} horizontalPoints={[50]}></CartesianGrid>
            <Tooltip content={(value) => {
        // We can create tooltip in a function.
            if (value.payload.length) {
             return (<div style={{backgroundColor: '#fff'}}>
                    <p>UV: {value.payload[0].payload.uv}</p>
                    <p>PV: {value.payload[0].payload.pv}</p>
                    <p>amt: {value.payload[0].payload.amt}</p>
             </div>)
            }
        }} />
        </LineChart>
        );
    }
  }
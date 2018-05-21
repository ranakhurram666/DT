import React from "react"
import { connect } from "react-redux"

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import HorizontalBarChart from './charts/HorizontalBarChart';
import SimpleBarChart from './charts/SimpleBarChart';
import RefAreaChart from './charts/RefAreaChart';

/*
@connect((store) => {
  return {
    user: store.user.user,
    userFetched: store.user.fetched,
    tweets: store.tweets.tweets,
  };
})*/

export default class TabSection extends React.Component {
  constructor() {
    super();
    this.state = {
        popularDays: [
            {name: 'M', uv: 4000, pv: 2400, amt: 1000},
            {name: 'T', uv: 3000, pv: 1398, amt: 2000},
            {name: 'W', uv: 2000, pv: 9800, amt: 3000},
            {name: 'T', uv: 2780, pv: 3908, amt: 4000},
            {name: 'F', uv: 1890, pv: 4800, amt: 5000},
            {name: 'S', uv: 2390, pv: 3800, amt: 6000},
            {name: 'S', uv: 3490, pv: 4300, amt: 7000},
        ],
        peekHours: [
            {name: '12 AM', uv: 4000, pv: 2400, amt: 1000},
            {name: '1 AM', uv: 3000, pv: 1398, amt: 2000},
            {name: '2 AM', uv: 2000, pv: 9800, amt: 3000},
            {name: '3 AM', uv: 2780, pv: 3908, amt: 4000},
            {name: '4 AM', uv: 1890, pv: 4800, amt: 5000},
            {name: '5 AM', uv: 2390, pv: 3800, amt: 6000},
            {name: '6 AM', uv: 3490, pv: 4300, amt: 7000},
            {name: '7 AM', uv: 3697, pv: 4500, amt: 8000},
            {name: '8 AM', uv: 3697, pv: 4500, amt: 8000},
            {name: '9 AM', uv: 3697, pv: 4500, amt: 8000},
            {name: '10 AM', uv: 3697, pv: 4500, amt: 8000},
            {name: '11 AM', uv: 3697, pv: 4500, amt: 8000},
            {name: '12 PM', uv: 4000, pv: 2400, amt: 1000},
            {name: '1 PM', uv: 3000, pv: 1398, amt: 2000},
            {name: '2 PM', uv: 2000, pv: 9800, amt: 3000},
            {name: '3 PM', uv: 2780, pv: 3908, amt: 4000},
            {name: '4 PM', uv: 1890, pv: 4800, amt: 5000},
            {name: '5 PM', uv: 2390, pv: 3800, amt: 6000},
            {name: '6 PM', uv: 3490, pv: 4300, amt: 7000},
            {name: '7 PM', uv: 3697, pv: 4500, amt: 8000},
            {name: '8 PM', uv: 3697, pv: 4500, amt: 8000},
            {name: '9 PM', uv: 3697, pv: 4500, amt: 8000},
            {name: '10 PM', uv: 3697, pv: 4500, amt: 8000},
            {name: '11 PM', uv: 3697, pv: 4500, amt: 8000},
            {name: '12 AM', uv: 3697, pv: 4500, amt: 8000},

        ],
        daysHours: [
          {x: '12 AM', y: 'Mon'},
          {x: '1 AM', y: 'Tue'},
          {x: '2 AM', y: 'Wed'},
          {x: '3 AM', y: 'Thu'},
          {x: '4 AM', y: 'Fri'},
          {x: '5 AM', y: 'Sat'},
          {x: '6 AM', y: 'Sun'},
          {x: '7 AM'},
          {x: '8 AM'},
          {x: '9 AM'},
          {x: '10 AM'},
          {x: '11 AM'},
          {x: '12 PM'},
          {x: '1 PM'},
          {x: '2 PM'},
          {x: '3 PM'},
          {x: '4 PM'},
          {x: '5 PM'},
          {x: '6 PM'},
          {x: '7 PM'},
          {x: '8 PM'},
          {x: '9 PM'},
          {x: '10 PM'},
          {x: '11 PM'},

        ]
    }
  }

  componentWillMount() {
    //this.props.dispatch(fetchUser())
  }
  
  render() {
    return (
        <div className="tabs-area">
          <Tabs>
            <TabList className="nav nav-pills text-center">
              <Tab>Popular Days</Tab>
              <Tab>Days &amp; Hours</Tab>
              <Tab>Peek Hours</Tab>
            </TabList>

            <TabPanel className="text-center">
              <div class="graph-container">
                <HorizontalBarChart data={this.state.popularDays} width={700} />
              </div>
            </TabPanel>
            <TabPanel className="text-center">
               <div class="graph-container">
                <RefAreaChart data={this.state.daysHours} width={1100} />
               
              </div>
            </TabPanel>
            <TabPanel className="text-center">
               <div class="graph-container">
                   <SimpleBarChart data={this.state.peekHours} width={1100}/>
              </div>
            </TabPanel>
          </Tabs>
        </div>
    );
  }
}

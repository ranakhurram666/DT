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
            {name: 'Page A', uv: 4000, pv: 2400, amt: 1000},
            {name: 'Page B', uv: 3000, pv: 1398, amt: 2000},
            {name: 'Page C', uv: 2000, pv: 9800, amt: 3000},
            {name: 'Page D', uv: 2780, pv: 3908, amt: 4000},
            {name: 'Page E', uv: 1890, pv: 4800, amt: 5000},
            {name: 'Page F', uv: 2390, pv: 3800, amt: 6000},
            {name: 'Page G', uv: 3490, pv: 4300, amt: 7000},
            {name: 'Page H', uv: 3697, pv: 4500, amt: 8000},
        ],
        peekHours: [
            {name: 'Page A', uv: 4000, pv: 2400, amt: 1000},
            {name: 'Page B', uv: 3000, pv: 1398, amt: 2000},
            {name: 'Page C', uv: 2000, pv: 9800, amt: 3000},
            {name: 'Page D', uv: 2780, pv: 3908, amt: 4000},
            {name: 'Page E', uv: 1890, pv: 4800, amt: 5000},
            {name: 'Page F', uv: 2390, pv: 3800, amt: 6000},
            {name: 'Page G', uv: 3490, pv: 4300, amt: 7000},
            {name: 'Page H', uv: 3697, pv: 4500, amt: 8000},
        ],
        daysHours: [
            {x: 100, y: 'Mon'},
            {x: 200, y: 'Tue'},
            {x: 300, y: 'Wed'},
            {x: 400, y: 'Thu'},
            {x: 500},
            {x: 600},
            {x: 700},
            {x: 800},
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
                <RefAreaChart data={this.state.daysHours} width={700} />
              </div>
            </TabPanel>
            <TabPanel className="text-center">
               <div class="graph-container">
                   <SimpleBarChart data={this.state.peekHours} width={700}/>
              </div>
            </TabPanel>
          </Tabs>
        </div>
    );
  }
}

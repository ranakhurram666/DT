import React from "react"
import { connect } from "react-redux"

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

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
                <img class="img-responsive" src="assets/images/graph1.png" alt="graph img"/>
              </div>
            </TabPanel>
            <TabPanel className="text-center">
               <div class="graph-container">
                <img class="img-responsive" src="assets/images/graph2.png" alt="graph img"/>
              </div>
            </TabPanel>
            <TabPanel className="text-center">
               <div class="graph-container">
                <img class="img-responsive" src="assets/images/graph3.png" alt="graph img"/>
              </div>
            </TabPanel>
          </Tabs>
        </div>
    );
  }
}

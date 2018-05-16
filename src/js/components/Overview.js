import React from "react"
import { connect } from "react-redux"
import SplitedCard from "./cards/SplitedCard";

import TopListing from "./TopListing";
import TabSection from "./TabSection";

/*
@connect((store) => {
  return {
    user: store.user.user,
    userFetched: store.user.fetched,
    tweets: store.tweets.tweets,
  };
})*/

export default class Overview extends React.Component {
  constructor() {
    super();
  }

  componentWillMount() {
    //this.props.dispatch(fetchUser())

  }

  
  render() {
    return (
      <div>
      <section class="content-white">
      <SplitedCard colClass={'col-md-3'} 
      cardTitle={'Total Listeners'} 
      cardValue={'599,404'} 
      rise={true} 
      percentValue={'10.6'} 
      icon={'fas fa-user-circle'} 
      />

      <SplitedCard 
      colClass={'col-md-3'} 
      cardTitle={'Minutes per Listener'} 
      cardValue={'9m, 23sec'} 
      rise={false} 
      percentValue={'10.4'} 
      icon={'fas fa-user-circle'} 
      />

      <SplitedCard 
      colClass={'col-md-3'} 
      cardTitle={'Total Content Consumed'} 
      cardValue={'22,332,860m'} 
      rise={true} 
      percentValue={'10.4'} 
      icon={'fas fa-user-circle'} 
      />

      <SplitedCard 
      colClass={'col-md-3'} 
      cardTitle={'Minutes per Listener'} 
      cardValue={'43,92,554m'} 
      rise={true} 
      percentValue={'10.4'} 
      icon={'fas fa-user-circle'} 
      />
      <div class="clearfix"></div>   
        <div class="col-sm-12">
          <div class="total-listener-graph">
          <img class="img-responsive" src="assets/images/graph1.png" alt="graph img"/>
          </div>
        </div>

        <div class="clearfix">
          <div class="col-md-6">
            <img class="img-responsive" src="assets/images/graph2.png" alt="graph img"/>
          </div>
          <div class="col-md-6">
            <img class="img-responsive" src="assets/images/graph3.png" alt="graph img"/>
          </div>
        </div>
</section>
        <section class="content-white clearfix">
          <TopListing title={"TOTAL NUMBER OF PUBLISHERS"} />
        </section>

                <section class="content-white clearfix">
          <TabSection />
        </section>

      </div>
      );
  }
}

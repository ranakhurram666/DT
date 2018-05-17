import React from "react"
import { connect } from "react-redux"
import SplitedCard from "./cards/SplitedCard";
import NonBorderCard from './cards/NonBorderCard';
import NonSplitedCard from './cards/NonSplitedCard';
import SimpleBarChart from './graphs/SimpleBarChart';
import SimpleAreaChart from './graphs/SimpleAreaChart';

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
    this.state = {
        listenersGraphData : [
            {name: 'Page A', uv: 4000, pv: 2400, amt: 1000},
            {name: 'Page B', uv: 3000, pv: 1398, amt: 2000},
            {name: 'Page C', uv: 2000, pv: 9800, amt: 3000},
            {name: 'Page D', uv: 2780, pv: 3908, amt: 4000},
            {name: 'Page E', uv: 1890, pv: 4800, amt: 5000},
            {name: 'Page F', uv: 2390, pv: 3800, amt: 6000},
            {name: 'Page G', uv: 3490, pv: 4300, amt: 7000},
            {name: 'Page H', uv: 3697, pv: 4500, amt: 8000},
        ]
    }
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
          <div className="stat-section clearfix">

            <NonBorderCard cardTitle={'Total Listeners'} cardValue={'599,404'}
                            rise={true} percentValue={'10.6'}/>
            <div class="pull-right">                
            <NonSplitedCard cardTitle={'Total Viewers'} cardValue={'599,404'}/>
            <NonSplitedCard cardTitle={'Total Publishers'} cardValue={'599,404'}/>
            </div>
            </div>
            <div className="clearfix"></div>

                <div className="col-sm-12">
                    <div className="total-listener-graph">
                        <SimpleBarChart data={this.state.listenersGraphData} width={700}/>
                    </div>
                </div>

        <div class="clearfix">
          <div class="col-md-5">
            <SimpleAreaChart data={this.state.listenersGraphData} width={500} />
          </div>
          <div class="col-md-5">
            <SimpleBarChart data={this.state.listenersGraphData} width={500}/>
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

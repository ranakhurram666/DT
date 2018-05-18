import React from "react"
import { connect } from "react-redux"
import SplitedCard from "./cards/SplitedCard";
import NonBorderCard from './cards/NonBorderCard';
import NonSplitedCard from './cards/NonSplitedCard';
import SimpleBarChart from './charts/SimpleBarChart';
import SimpleAreaChart from './charts/SimpleAreaChart';
import SimpleBarStackChart from './charts/SimpleBarStackChart';

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
        ],
        newListenersColor: '#5c3dee',
        returningListenersColor: '#5c3dee',
        returnCardColor: null,
        newCardColor: null,
        topPublishers: {
          value: 12,
          title: 'TOTAL NUMBER OF PUBLISHERS',
          listheading: 'Top Publishers',
          listItems: [
              {rating: 1, name: 'Planet Beyond'},
              {rating: 2, name: 'Game Over'},
              {rating: 3, name: 'Mercury Studio'},
              {rating: 4, name: 'Urdu Studio'},
              {rating: 5, name: 'Emumba'}
          ]
        }
    }
  }

  componentWillMount() {
    //this.props.dispatch(fetchUser())
  }

  listenerChartHandler (listenerType) {
      if (listenerType === 'new') {
          this.setState({newListenersColor: (this.state.newListenersColor === '#5c3dee' ? '#60dbc1' : '#5c3dee')});
          this.setState({newCardColor: (this.state.newCardColor ? null : '#60dbc1')});
      } else if(listenerType === 'returning') {
          this.setState({returningListenersColor: (this.state.returningListenersColor === '#5c3dee' ? '#ac86cd' : '#5c3dee')});
          this.setState({returnCardColor: (this.state.returnCardColor ? null : '#ac86cd')});
      }
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

            <div className="stat-section clearfix">

              <NonBorderCard cardTitle={'Total Listeners'} cardValue={'599,404'} rise={true} percentValue={'10.6'}/>
              <div className="pull-right">
                <div className="inline-stats" onClick={this.listenerChartHandler.bind(this, 'new')}>
                  <NonSplitedCard cardTitle={'New Listeners'} cardValue={'599,404'} fill={this.state.newCardColor}/>
                </div>
                <div className="inline-stats" onClick={this.listenerChartHandler.bind(this, 'returning')}>
                  <NonSplitedCard cardTitle={'Returning Listeners'} cardValue={'599,404'} fill={this.state.returnCardColor}/>
                </div>
              </div>
            </div>

            <div className="col-sm-12">
              <div className="total-listener-graph">
                {this.state.newListenersColor === '#5c3dee' && this.state.returningListenersColor === '#5c3dee'
                && <SimpleBarChart data={this.state.listenersGraphData} width={700}/>}
                {(this.state.newListenersColor !== '#5c3dee' ||
                this.state.returningListenersColor !== '#5c3dee') &&
                <SimpleBarStackChart data={this.state.listenersGraphData} width={700}
                  firstStack={this.state.returningListenersColor} secondStack={this.state.newListenersColor} />}
                </div>
              </div>

            <div className="stat-section clearfix">
              <div className="col-md-6">
                <NonBorderCard cardTitle={'Munites Per Listener'} cardValue={'599,404'} rise={true} percentValue={'10.6'}/>
              </div>
              <div className="col-md-6">
                <NonBorderCard cardTitle={'Total Content Consumed'} cardValue={'599,404'} rise={true} percentValue={'10.6'}/>
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
              <TopListing topListData={this.state.topPublishers} />
              <TopListing topListData={this.state.topPublishers} />
              <TopListing topListData={this.state.topPublishers} />
            </section>

            <section class="content-white clearfix">
              <TabSection />
            </section>
          </div>
    );
  }
}

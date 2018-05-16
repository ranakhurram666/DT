import React from "react"
import { connect } from "react-redux"
import SplitedCard from "./cards/SplitedCard";

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
      <main id="main">
       <div class="main-wrapper">
        <div class="container-fluid">
        <div class="main-content">
                      <div class="heading">
                <h1>AMN Overview</h1>
            </div>
            <div class="row">
              <div class="main-content">
                  <SplitedCard colClass={'col-md-3'} cardTitle={'Total Listeners'}
                               cardValue={'599,404'} rise={true} percentValue={'10.6'}
                               icon={'fas fa-user-circle'} />
                  <SplitedCard colClass={'col-md-3'} cardTitle={'Minutes per Listener'}
                               cardValue={'9m, 23sec'} rise={false} percentValue={'10.4'}
                               icon={'fas fa-user-circle'} />
                  <SplitedCard colClass={'col-md-3'} cardTitle={'Total Content Consumed'}
                               cardValue={'22,332,860m'} rise={true} percentValue={'10.4'}
                               icon={'fas fa-user-circle'} />
                  <SplitedCard colClass={'col-md-3'} cardTitle={'Minutes per Listener'}
                               cardValue={'43,92,554m'} rise={true} percentValue={'10.4'}
                               icon={'fas fa-user-circle'} />
                  <div class="col-sm-12">
                    <div class="total-listener-graph">
                        <img class="img-responsive" src="assets/images/graph1.png" alt="graph img"/>
                    </div>
                  </div>
                </div>
              </div>
        </div>
        </div>
       </div>
      </main>
      );
  }
}

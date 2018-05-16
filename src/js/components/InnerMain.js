import React from "react"
import { connect } from "react-redux"

/*
@connect((store) => {
  return {
    user: store.user.user,
    userFetched: store.user.fetched,
    tweets: store.tweets.tweets,
  };
})*/

export default class InnerMain extends React.Component {
  constructor() {
    super();
  }
  componentWillMount() {
    //this.props.dispatch(fetchUser())
  }
  
  render() {
    return (
        
          <div class="main-content">
          <div class="col-md-3">
          <div class="listener-tile">
          <div class="title">
          <h2><i class="fas fa-user-circle"></i> Total Listeners</h2>
          </div>
          <span class="value">599,404</span>
          <span class="range"><i class="fas fa-arrow-up"></i> 10.6%</span>
          </div>
          </div>
          <div class="col-md-3">
          <div class="listener-tile">
          <div class="title">
          <h2><i class="fas fa-user-circle"></i> Total Listeners</h2>
          </div>
          <span class="value">599,404</span>
          <span class="range"><i class="fas fa-arrow-up"></i> 10.6%</span>
          </div>
          </div>
          <div class="col-md-3">
          <div class="listener-tile">
          <div class="title">
          <h2><i class="fas fa-user-circle"></i> Total Listeners</h2>
          </div>
          <span class="value">599,404</span>
          <span class="range"><i class="fas fa-arrow-up"></i> 10.6%</span>
          </div>
          </div>
            <div class="col-md-3">
              <div class="listener-tile">
                <div class="title">
                  <h2><i class="fas fa-user-circle"></i> Total Listeners</h2>
                </div>
              <span class="value">599,404</span>
              <span class="range"><i class="fas fa-arrow-up"></i> 10.6%</span>
              </div>
            </div>
            <div class="col-sm-12">
              <div class="total-listener-graph">
                <img class="img-responsive" src="assets/images/graph1.png" alt="graph img"/>
              </div>
            </div>
          </div>
      );
  }
}

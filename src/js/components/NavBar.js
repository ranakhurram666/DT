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

export default class NavBar extends React.Component {
  constructor() {
    super();
  }
  componentWillMount() {
    //this.props.dispatch(fetchUser())
  }

  
  render() {
    return (
      
      <nav class="navbar main-nav navbar-fixed-top">
        <div class="mobile-only-brand pull-left">
          <div class="nav-header pull-left">
            <div class="logo-wrap">
              <a href="index.html">
                <img class="brand-img" src="./assets/images/logo.png" alt="Telenor AMN" title="Telenor AMN"/>
              </a>
            </div>
          </div>  
          <a id="toggle_nav_btn" class="toggle-left-nav-btn inline-block ml-20 pull-left" href="javascript:void(0);"><i class="fas fa-bars"></i></a>

          <a id="toggle_mobile_nav" class="mobile-only-view" href="javascript:void(0);"><i class="zmdi zmdi-more"></i></a>

        </div>
        <div id="mobile_only_nav" class="mobile-only-nav pull-right">
          <ul class="nav navbar-right top-nav pull-right">
            <li class="dropdown alert-drp">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                <i class="fas fa-bell top-nav-icon"></i>
                <span class="top-nav-icon-badge">5</span>
              </a>
              <ul  class="dropdown-menu alert-dropdown" data-dropdown-in="bounceIn" data-dropdown-out="bounceOut">
                <li>
                  <div class="notification-box-head-wrap">
                    <span class="notification-box-head pull-left inline-block">notifications</span>
                    <a class="txt-danger pull-right clear-notifications inline-block" href="javascript:void(0)"> clear all </a>
                    <div class="clearfix"></div>
                    <hr class="light-grey-hr ma-0"/>
                  </div>
                </li>
                <li>
                  <div class="streamline">
                    <div class="sl-item">
                      <a href="javascript:void(0)">
                        <div class="icon bg-green">
                          <i class="fas fa-user"></i>
                        </div>
                        <div class="sl-content">
                          <span class="inline-block capitalize-font  pull-left truncate head-notifications">
                          New subscription created</span>
                          <span class="inline-block font-11  pull-right notifications-time">2pm</span>
                          <div class="clearfix"></div>
                          <p class="truncate">Your customer subscribed for the basic plan. The customer will pay $25 per month.</p>
                        </div>
                      </a>  
                    </div>
                    <hr class="light-grey-hr ma-0"/>
                    <div class="sl-item">
                      <a href="javascript:void(0)">
                        <div class="icon bg-red">
                          <i class="fas fa-user"></i>
                        </div>
                        <div class="sl-content">
                          <span class="inline-block capitalize-font  pull-left truncate head-notifications txt-danger">9%9 server space occupied.</span>
                          <span class="inline-block font-11  pull-right notifications-time">1pm</span>
                          <div class="clearfix"></div>
                          <p class="truncate">consectetur, adipisci velit.</p>
                        </div>
                      </a>  
                    </div>
                  </div>
                </li>
                <li>
                  <div class="notification-box-bottom-wrap">
                    <hr class="light-grey-hr ma-0"/>
                    <a class="block text-center read-all" href="javascript:void(0)"> read all </a>
                    <div class="clearfix"></div>
                  </div>
                </li>
              </ul>
            </li>
            <li>
                <a class="user-img" href="#">
                  <img src="assets/images/user1.png" alt="user img"/>
                </a>
              </li>
            <li class="dropdown profile">
                <a class="dropdown-toggle" id="dropdownMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Planet Beyond <i class="fas fa-caret-down"></i>
                </a>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenu">
                  <li class="dropdown-item" type="button"><a href="#">Action</a></li>
                  <li class="dropdown-item" type="button"><a href="#">Another action</a></li>
                </ul>
            </li>
          </ul>
        </div>  
      </nav>
      );
  }
}

import React from "react"
import { connect } from "react-redux"
import { Link } from 'react-router';

/*
@connect((store) => {
  return {
    user: store.user.user,
    userFetched: store.user.fetched,
    tweets: store.tweets.tweets,
  };
})*/

export default class SideMenu extends React.Component {
  constructor() {
    super();
  }
  componentWillMount() {
    //this.props.dispatch(fetchUser())
  }

  
  render() {
    return (
            <div class="fixed-sidebar-left">
        <div id="slimScrollDiv">
        <ul class="nav navbar-nav side-nav nicescroll-bar">
          <li>
            <a class="active" href="#" data-toggle="collapse" data-target="#dashboard_dr">
              <div class="pull-left">
                <i class="fas fa-circle-notch"></i>
                <span class="right-nav-text"> AMN Overview</span>
              </div><div class="clearfix"></div>
            </a>
          </li>
          <li>
              <a href="#" data-toggle="collapse" data-target="#performance_dr">
                <div class="pull-left">
                  <i class="fas fa-signal"></i>
                  <span class="right-nav-text"><Link to="performance">Performance</Link></span>
                </div>
                <div class="clearfix"></div>
              </a>
          </li>
          <li>
            <a href="#" data-toggle="collapse" data-target="#revenue_dr">
              <div class="pull-left">
                <i class="fas fa-dollar-sign"></i>
                <span class="right-nav-text"><Link to="revenue">Revenue</Link></span>
              </div>
              <div class="clearfix"></div>
            </a>
          </li>
          <li class="navigation-header">
            <span>CONTENT ANALYTICS</span> 
          </li>
          <li>
            <a href="#" data-toggle="collapse" data-target="#cat_dr">
              <div class="pull-left">
              <i class="fas fa-circle-notch"></i>
              <span class="right-nav-text"><Link to="categories">Categories</Link></span>
              </div>
              <div class="clearfix"></div>
            </a>
          </li>

          <li>
            <a href="#" data-toggle="collapse" data-target="#prog_dr">
              <div class="pull-left">
              <i class="fas fa-circle-notch"></i>
              <span class="right-nav-text"><Link to="program">Program</Link></span>
              </div>
              <div class="clearfix"></div>
            </a>
          </li>

          <li>
            <a href="#" data-toggle="collapse" data-target="#epi_dr">
              <div class="pull-left">
              <i class="fas fa-circle-notch"></i>
              <span class="right-nav-text"><Link to="episodes">Episodes</Link></span>
              </div>
              <div class="clearfix"></div>
            </a>
          </li>

          <li class="navigation-header">
            <span>AUDIENCE</span> 
          </li>


          <li>
            <a href="#" data-toggle="collapse" data-target="#age_dr">
              <div class="pull-left">
              <i class="fas fa-circle-notch"></i>
              <span class="right-nav-text"><Link to="agegender">Age Gender</Link></span>
              </div>
              <div class="clearfix"></div>
            </a>
          </li>


          <li>
            <a href="#" data-toggle="collapse" data-target="#loc_dr">
              <div class="pull-left">
              <i class="fas fa-map-marker"></i>
              <span class="right-nav-text"><Link to="location">Location</Link></span>
              </div>
              <div class="clearfix"></div>
            </a>
          </li>

         
          <li class="navigation-header">
            <span>LIBRARY</span> 
          </li>
          
          <li>
            <a href="#" data-toggle="collapse" data-target="#new_dr">
              <div class="pull-left">
              <i class="fas fa-map-marker"></i>
              <span class="right-nav-text"><Link to="newuploads">New Uploads</Link></span>
              </div>
              <div class="clearfix"></div>
            </a>
          </li>

          <li>
            <a href="#" data-toggle="collapse" data-target="#mylib_dr">
              <div class="pull-left">
              <i class="fas fa-map-marker"></i>
              <span class="right-nav-text"><Link to="mylibrary">My Library</Link></span>
              </div>
              <div class="clearfix"></div>
            </a>
          </li>
          <li class="navigation-header">
            <span>GOALS</span> 
          </li>
          <li>
            <div class="progress">
              <div class="progress-bar" role="progressbar" style={{width: `50%`}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <span class="progress-details">98 / 200 mins uploaded</span>
          </li>
          <li>
            <div class="users">
              <span class="title"> LIVE USERS </span>
              <strong class="user-count"> 3981 </strong>
              <p class="sync">last sync: <a href="#">4:00pm</a></p>
            </div>
          </li>
        </ul>
        </div>
      </div>
      );
  }
}

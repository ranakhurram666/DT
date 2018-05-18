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
            <a class="active" href="#" data-toggle="collapse" data-target="#dashboard_dr"><div class="pull-left"><i class="fas fa-circle-notch"></i><span class="right-nav-text"> AMN Overview</span></div><div class="clearfix"></div></a>
            <ul id="dashboard_dr" class="collapse collapse-level-1 list-unstyled">
              <li>
                <a href="index.html">Analytical</a>
              </li>
              <li>
                <a href="index2.html">Demographic</a>
              </li>
              <li>
                <a  class="active-page" href="index3.html">Project</a>
              </li>
              <li>
                <a href="index4.html">Hospital</a>
              </li>
              <li>
                <a href="index5.html">HRM</a>
              </li>
              <li>
                <a href="index6.html">Real Estate</a>
              </li>
              <li>
                <a href="profile.html">profile</a>
              </li>
            </ul>
          </li>
          <li>
              <a href="#" data-toggle="collapse" data-target="#performance_dr"><div class="pull-left"><i class="fas fa-signal"></i><span class="right-nav-text"><Link to="performance">Performance</Link></span></div><div class="clearfix"></div></a>
            <ul id="performance_dr" class="collapse collapse-level-1 list-unstyled">
              <li>
                <a href="#">Dashboard</a>
              </li>
              <li>
                <a href="#">Products</a>
              </li>
              <li>
                <a href="#">Product Detail</a>
              </li>
              <li>
                <a href="#">Add Product</a>
              </li>
              <li>
                <a href="#">Orders</a>
              </li>
              <li>
                <a href="#">Cart</a>
              </li>
              <li>
                <a href="#">Checkout</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#" data-toggle="collapse" data-target="#revenue_dr"><div class="pull-left"><i class="fas fa-dollar-sign"></i><span class="right-nav-text"> Revenue </span></div><div class="clearfix"></div></a>
            <ul id="revenue_dr" class="collapse collapse-level-1 list-unstyled">
              <li>
                <a href="chats.html">chats</a>
              </li>
              <li>
                <a href="calendar.html">calendar</a>
              </li>
              <li>
                <a href="weather.html">weather</a>
              </li>
              <li>
                <a href="javascript:void(0);" data-toggle="collapse" data-target="#email_dr">Email<div class="pull-right"><i class="zmdi zmdi-caret-down"></i></div><div class="clearfix"></div></a>
                <ul id="email_dr" class="collapse collapse-level-2">
                  <li>
                    <a href="inbox.html">inbox</a>
                  </li>
                  <li>
                    <a href="inbox-detail.html">detail email</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="javascript:void(0);" data-toggle="collapse" data-target="#contact_dr">Contacts<div class="pull-right"><i class="zmdi zmdi-caret-down"></i></div><div class="clearfix"></div></a>
                <ul id="contact_dr" class="collapse collapse-level-2">
                  <li>
                    <a href="contact-list.html">list</a>
                  </li>
                  <li>
                    <a href="contact-card.html">cards</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="file-manager.html">File Manager</a>
              </li>
              <li>
                <a href="todo-tasklist.html">To Do/Tasklist</a>
              </li>
            </ul>
          </li>
          <li class="navigation-header">
            <span>CONTENT ANALYTICS</span> 
          </li>
          <li>
            <a href="#" data-toggle="collapse" data-target="#cat_dr"><div class="pull-left"><i class="fas fa-circle-notch"></i><span class="right-nav-text">Categories</span></div><div class="clearfix"></div></a>
            <ul id="cat_dr" class="collapse list-unstyled collapse-level-1 two-col-list list-unstyled">
              <li>
                <a href="panels-wells.html">Panels & Wells</a>
              </li>
              <li>
                <a href="modals.html">Modals</a>
              </li>
              <li>
                <a href="sweetalert.html">Sweet Alerts</a>
              </li>
              <li>
                <a href="notifications.html">notifications</a>
              </li>
              <li>
                <a href="typography.html">Typography</a>
              </li>
              <li>
                <a href="buttons.html">Buttons</a>
              </li>
              <li>
                <a href="accordion-toggle.html">Accordion / Toggles</a>
              </li>
              <li>
                <a href="tabs.html">Tabs</a>
              </li>
              <li>
                <a href="progressbars.html">Progress bars</a>
              </li>
              <li>
                <a href="skills-counter.html">Skills & Counters</a>
              </li>
              <li>
                <a href="pricing.html">Pricing Tables</a>
              </li>
              <li>
                <a href="nestable.html">Nestables</a>
              </li>
              <li>
                <a href="dorpdown.html">Dropdowns</a>
              </li>
              <li>
                <a href="bootstrap-treeview.html">Tree View</a>
              </li>
              <li>
                <a href="carousel.html">Carousel</a>
              </li>
              <li>
                <a href="range-slider.html">Range Slider</a>
              </li>
              <li>
                <a href="grid-styles.html">Grid</a>
              </li>
              <li>
                <a href="bootstrap-ui.html">Bootstrap UI</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#" data-toggle="collapse" data-target="#program_dr"><div class="pull-left"><i class="fas fa-circle-notch"></i><span class="right-nav-text">Programs</span></div><div class="clearfix"></div></a>
            <ul id="program_dr" class="collapse list-unstyled collapse-level-1 two-col-list list-unstyled">
              <li>
                <a href="form-element.html">Basic Forms</a>
              </li>
              <li>
                <a href="form-layout.html">form Layout</a>
              </li>
              <li>
                <a href="form-advanced.html">Form Advanced</a>
              </li>
              <li>
                <a href="form-mask.html">Form Mask</a>
              </li>
              <li>
                <a href="form-picker.html">Form Picker</a>
              </li>
              <li>
                <a href="form-validation.html">form Validation</a>
              </li>
              <li>
                <a href="form-wizard.html">Form Wizard</a>
              </li>
              <li>
                <a href="form-x-editable.html">X-Editable</a>
              </li>
              <li>
                <a href="cropperjs.html">Cropperjs</a>
              </li>
              <li>
                <a href="form-file-upload.html">File Upload</a>
              </li>
              <li>
                <a href="dropzone.html">Dropzone</a>
              </li>
              <li>
                <a href="bootstrap-wysihtml5.html">Bootstrap Wysihtml5</a>
              </li>
              <li>
                <a href="tinymce-wysihtml5.html">Tinymce Wysihtml5</a>
              </li>
              <li>
                <a href="summernote-wysihtml5.html">summernote</a>
              </li>
              <li>
                <a href="typeahead-js.html">typeahead</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#" data-toggle="collapse" data-target="#episode_dr"><div class="pull-left"><i class="fas fa-music"></i><span class="right-nav-text">Episodes </span></div><div class="clearfix"></div></a>
            <ul id="episode_dr" class="collapse list-unstyled collapse-level-1 two-col-list list-unstyled">
              <li>
                <a href="flot-chart.html">Flot Chart</a>
              </li>
              <li>
                <a href="echart.html">Echart Chart</a>
              </li>
              <li>
                <a href="morris-chart.html">Morris Chart</a>
              </li>
              <li>
                <a href="chart.js.html">chartjs</a>
              </li>
              <li>
                <a href="chartist.html">chartist</a>
              </li>
              <li>
                <a href="easy-pie-chart.html">Easy Pie Chart</a>
              </li>
              <li>
                <a href="sparkline.html">Sparkline</a>
              </li>
              <li>
                <a href="peity-chart.html">Peity Chart</a>
              </li>
            </ul>
          </li>
          <li class="navigation-header">
            <span>AUDIENCE</span> 
          </li>
          <li>
            <a href="#" data-toggle="collapse" data-target="#age_dr"><div class="pull-left"><i class="fas fa-users"></i><span class="right-nav-text">Age & Gender</span></div><div class="clearfix"></div></a>
            <ul id="age_dr" class="collapse list-unstyled collapse-level-1 two-col-list list-unstyled">
              <li>
                <a class="active" href="blank.html">Blank Page</a>
              </li>
              <li>
                <a href="javascript:void(0);" data-toggle="collapse" data-target="#auth_dr">Authantication pages<div class="pull-right"><i class="zmdi zmdi-caret-down"></i></div><div class="clearfix"></div></a>
                <ul id="auth_dr" class="collapse list-unstyled collapse-level-2">
                  <li>
                    <a href="login.html">Login</a>
                  </li>
                  <li>
                    <a href="signup.html">Register</a>
                  </li>
                  <li>
                    <a href="forgot-password.html">Recover Password</a>
                  </li>
                  <li>
                    <a href="reset-password.html">reset Password</a>
                  </li>
                  <li>
                    <a href="locked.html">Lock Screen</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="javascript:void(0);" data-toggle="collapse" data-target="#invoice_dr">Invoice<div class="pull-right"><i class="zmdi zmdi-caret-down"></i></div><div class="clearfix"></div></a>
                <ul id="invoice_dr" class="collapse list-unstyled collapse-level-2">
                  <li>
                    <a href="invoice.html">Invoice</a>
                  </li>
                  <li>
                    <a href="invoice-archive.html">Invoice Archive</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="javascript:void(0);" data-toggle="collapse" data-target="#error_dr">error pages<div class="pull-right"><i class="zmdi zmdi-caret-down"></i></div><div class="clearfix"></div></a>
                <ul id="error_dr" class="collapse list-unstyled collapse-level-2">
                  <li>
                    <a href="404.html">Error 404</a>
                  </li>
                  <li>
                    <a href="500.html">Error 500</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="gallery.html">Gallery</a>
              </li>
              <li>
                <a href="timeline.html">Timeline</a>
              </li>
              <li>
                <a href="faq.html">FAQ</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#"><div class="pull-left"><i class="fas fa-map-marker"></i><span class="right-nav-text">Location </span></div><div class="clearfix"></div></a>
          </li>
          <li class="navigation-header">
            <span>LIBRARY</span> 
          </li>
          <li>
            <a href="#"><div class="pull-left"><i class="fas fa-cloud-upload-alt"></i><span class="right-nav-text">New Uploads </span></div><div class="clearfix"></div></a>
          </li>
          <li>
            <a href="#"><div class="pull-left"><i class="fas fa-book"></i><span class="right-nav-text">My Library </span></div><div class="clearfix"></div></a>
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

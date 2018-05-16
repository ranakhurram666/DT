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

export default class TopListing extends React.Component {
  constructor() {
    super();
  }
  componentWillMount() {
    //this.props.dispatch(fetchUser())
    
  }
  
  render() {
    return (
        <div>
          <div class="col-md-4">
            <section class="section-item">
              <div class="section-item-header">
                <strong class="value">12</strong>
                <span class="title">{this.props.title}</span>
              </div>
              <div class="section-content">
                <p class="heading">Top Publishers</p>
                <ul class="section-list list-unstyled">
                  <li><a href="#"><span class="order">#1</span> Planet Beyond</a></li>
                  <li><a href="#"><span  class="order">#2</span>Game Over</a></li>
                  <li><a href="#"><span class="order">#3</span>Mercury Studio</a></li>
                  <li><a href="#"><span class="order">#4</span>Urdu Studio</a></li>
                  <li><a href="#"><span class="order">#5</span>Emumba</a></li>
                </ul>
              </div>
            </section>
          </div>
          <div class="col-md-4">
            <section class="section-item">
              <div class="section-item-header">
                <strong class="value">12</strong>
                <span class="title">TOTAL MINUTES OF CONTENT</span>
              </div>
              <div class="section-content">
                <p class="heading">Top Categories</p>
                <ul class="section-list list-unstyled">
                  <li><a href="#"><span class="order">#1</span>Health</a></li>
                  <li><a href="#"><span class="order">#2</span>News</a></li>
                  <li><a href="#"><span class="order">#3</span>Cricket</a></li>
                  <li><a href="#"><span class="order">#4</span>Drama</a></li>
                  <li><a href="#"><span class="order">#5</span>Jokes</a></li>
                </ul>
              </div>
            </section>
          </div>
          <div class="col-md-4">
            <section class="section-item">
              <div class="section-item-header">
                <strong class="value">12</strong>
                <span class="title">TOTAL NUMBER OF PROGRAMS</span>
              </div>
              <div class="section-content">
                <p class="heading">Top Programs</p>
                <ul class="section-list list-unstyled">
                  <li><a href="#"><span class="order">#1</span>headlines by Samaa</a></li>
                  <li><a href="#"><span class="order">#2</span>badsurat Shehzada</a></li>
                  <li><a href="#"><span class="order">#3</span>Life of Prophet</a></li>
                  <li><a href="#"><span class="order">#4</span>Ulta Phulta</a></li>
                  <li><a href="#"><span class="order">#5</span>Home Ingredients Tips</a></li>
                </ul>
              </div>
            </section>
          </div>
        </div>
    );
  }
}

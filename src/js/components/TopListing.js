import React from "react"
import { connect } from "react-redux"

import RatingListItem from './list-items/RatingListItem';
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
      <div class="col-md-4">
        <section class="section-item">
          <div class="section-item-header">
            <strong class="value">{this.props.topListData.value}</strong>
            <span class="title">{this.props.topListData.title}</span>
          </div>
          <div class="section-content">
            <p class="heading">{this.props.topListData.listheading}</p>
            <ul class="section-list list-unstyled">
                {this.props.topListData.listItems.map((obj) => {
                  return <RatingListItem rating={obj.rating} name={obj.name} key={obj.rating} />
                })}
            </ul>
          </div>
        </section>
      </div>
    );
  }
}

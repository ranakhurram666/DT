import React from "react";
import { connect } from "react-redux";
/*
@connect((store) => {
return {
user: store.user.user,
userFetched: store.user.fetched,
tweets: store.tweets.tweets,
};
})*/
export default class Location extends React.Component {
  constructor() {
    super();
  }
  componentWillMount() {
  //this.props.dispatch(fetchUser())
  //document.title = "t"
}

render() {
  return (

    <div>
    	<section className="content-white">
    		Hi from Location
    	</section>
    </div>

    );
}
}

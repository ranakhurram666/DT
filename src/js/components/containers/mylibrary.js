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
export default class Mylibrary extends React.Component {
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
    		Hi from Mylibrary
    	</section>
    </div>

    );
}
}

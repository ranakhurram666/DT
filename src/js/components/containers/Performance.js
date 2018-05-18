import React from "react";
import { connect } from "react-redux";

import SplitedCardPerformance from "../cards/SplitedCardPerformance";


/*
@connect((store) => {
return {
user: store.user.user,
userFetched: store.user.fetched,
tweets: store.tweets.tweets,
};
})*/
export default class Performance extends React.Component {
  constructor() {
    super();
  }
  componentWillMount() {
  //this.props.dispatch(fetchUser())
  //document.title = "t"
}

render() {
  return (
    <section class="content-white">
    	<div class="clearfix">
	    	<SplitedCardPerformance 
		    	colClass={'col-md-3'}
		      cardTitle={'Total Listeners'}
		      cardValue={'599,404'}
		      rise={true}
		      percentValue={'10.6'}
		      icon={'fas fa-question-circle pull'}
		      tagLine={'13% Of Community Listeners'}
	      />
			
	    	<SplitedCardPerformance 
		    	colClass={'col-md-3'}
		      cardTitle={'Minutes Consumed'}
		      cardValue={'653,091m'}
		      rise={true}
		      percentValue={'22.9'}
		      icon={'fas fa-question-circle'}
		      tagLine={'20% Of Community Munites'}
	      />

	    	<SplitedCardPerformance 
		    	colClass={'col-md-3'}
		      cardTitle={'Revenue Generated'}
		      cardValue={'120,003'}
		      rise={true}
		      percentValue={'35.1'}
		      icon={'fas fa-question-circle'}
		      tagLine={'300 Mins Broadcasted'}
	      />

	    	<SplitedCardPerformance 
		    	colClass={'col-md-3'}
		      cardTitle={'Revenue Generated'}
		      cardValue={'120,003'}
		      rise={true}
		      percentValue={'35.1'}
		      icon={'fas fa-question-circle'}
		      tagLine={'300 Mins Broadcasted'}
	      />
	      

			</div>
    </section>
    );
}
}

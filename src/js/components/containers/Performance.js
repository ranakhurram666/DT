import React from "react";
import { connect } from "react-redux";

import SplitedCardPerformance from "../cards/SplitedCardPerformance";
import PerformanceListItem from '../list-items/PerformanceListItem';


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
    this.state = {
       totalListeners: [
			{x: 100, y: 'Mon'},
			{x: 600, y: 'Tue'},
			{x: 800, y: 'Wed'},
			{x: 500, y: 'Thu'},
			{x: 100}, {x: 700},
			{x: 300}, {x: 600},
       ],
		minutesConsumed: [
			{x: 100, y: 'Mon'},
			{x: 600, y: 'Tue'},
			{x: 800, y: 'Wed'},
			{x: 400, y: 'Thu'},
			{x: 100}, {x: 600},
			{x: 300}, {x: 700},
       ],
		revenueGenerated: [
			{x: 100, y: 'Mon'},
			{x: 600, y: 'Tue'},
			{x: 800, y: 'Wed'},
			{x: 500, y: 'Thu'},
			{x: 100}, {x: 700},
			{x: 300}, {x: 600},
       ]
	}
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
		    	colClass={'col-md-4'}
		      cardTitle={'Total Listeners'}
		      cardValue={'599,404'}
		      rise={true}
		      percentValue={'10.6'}
			  tinyChartData={this.state.totalListeners}
		      icon={'fas fa-question-circle pull'}
		      tagLine={'13% Of Community Listeners'}
	      />
			
	    	<SplitedCardPerformance 
		    	colClass={'col-md-4'}
		      cardTitle={'Minutes Consumed'}
		      cardValue={'653,091m'}
		      rise={true}
		      percentValue={'22.9'}
		      icon={'fas fa-question-circle'}
			  tinyChartData={this.state.minutesConsumed}
		      tagLine={'20% Of Community Munites'}
	      />

	    	<SplitedCardPerformance 
		    	colClass={'col-md-4'}
		      cardTitle={'Revenue Generated'}
		      cardValue={'120,003'}
		      rise={true}
		      percentValue={'35.1'}
		      icon={'fas fa-question-circle'}
			  tinyChartData={this.state.revenueGenerated}
		      tagLine={'300 Mins Broadcasted'}
	      />
			</div>
			<div className="tablular-data-wrapper clearfix">
				<div className="col-md-6">
					<table class="table table-striped">
						<thead>
							<tr>
								<th>Categories</th>
								<th>Total Listeners</th>
							</tr>
						</thead>
						<tbody>
							<PerformanceListItem rating={1} name={'News'} rise={true} percentValue={10.6} total={5,693} />
							<PerformanceListItem rating={2} name={'News'} rise={true} percentValue={10.6} total={5,693} />
							<PerformanceListItem rating={3} name={'News'} rise={true} percentValue={10.6} total={5,693} />
							<PerformanceListItem rating={4} name={'News'} rise={true} percentValue={10.6} total={5,693} />
							<PerformanceListItem rating={5} name={'News'} rise={true} percentValue={10.6} total={5,693} />
							<PerformanceListItem rating={6} name={'News'} rise={true} percentValue={10.6} total={5,693} />
							</tbody>
						</table>
						<div className="more-categories"><a href="">More Categories Details <i className="fas fa-chevron-right"></i></a></div>
					</div>

					<div className="col-md-6">
					<table class="table table-striped">
						<thead>
							<tr>
								<th>Categories</th>
								<th>Total Listeners</th>
							</tr>
						</thead>
						<tbody>
							<PerformanceListItem rating={1} name={'News'} rise={true} percentValue={10.6} total={5,693} />
							<PerformanceListItem rating={2} name={'News'} rise={true} percentValue={10.6} total={5,693} />
							<PerformanceListItem rating={3} name={'News'} rise={true} percentValue={10.6} total={5,693} />
							<PerformanceListItem rating={4} name={'News'} rise={true} percentValue={10.6} total={5,693} />
							<PerformanceListItem rating={5} name={'News'} rise={true} percentValue={10.6} total={5,693} />
							<PerformanceListItem rating={6} name={'News'} rise={true} percentValue={10.6} total={5,693} />
							</tbody>
						</table>
						<div className="more-categories"><a href="">More Categories Details <i className="fas fa-chevron-right"></i></a></div>
					</div>
			</div>
    </section>
    );
}
}

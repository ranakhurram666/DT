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
		    	colClass={'col-md-4'}
		      cardTitle={'Total Listeners'}
		      cardValue={'599,404'}
		      rise={true}
		      percentValue={'10.6'}
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
		      tagLine={'20% Of Community Munites'}
	      />

	    	<SplitedCardPerformance 
		    	colClass={'col-md-4'}
		      cardTitle={'Revenue Generated'}
		      cardValue={'120,003'}
		      rise={true}
		      percentValue={'35.1'}
		      icon={'fas fa-question-circle'}
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
							<tr>
								<td><span class="order">1</span> News</td>
								<td>
									34,597 
									<span className="range sucess"><i className="fas fa-arrow-up"></i>10.6 %</span>
								</td>
							</tr>
							<tr>
								<td><span class="order">2</span> Drama</td>
								<td>
									4,495
									<span className="range sucess"><i className="fas fa-arrow-up"></i>8.4 %</span>
								</td>
							</tr>
								<tr>
									<td><span class="order">3</span> Kids Stories</td>
									<td>
										2,115
										<span className="range sucess"><i className="fas fa-arrow-up"></i>8.4 %</span>
									</td>
								</tr>
								<tr>
									<td><span class="order">4</span> Cricket</td>
									<td>
										1,597
										<span className="range sucess"><i className="fas fa-arrow-up"></i>5.9 %</span>
									</td>
								</tr>
								<tr>
									<td><span class="order">5</span> Tips &amp; Tricks</td>
									<td>1,030
										<span className="range sucess"><i className="fas fa-arrow-up"></i>9.7 %</span>
									</td>
								</tr>
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
							<tr>
								<td><span class="order">1</span> News</td>
								<td>
									34,597 
									<span className="range sucess"><i className="fas fa-arrow-up"></i>10.6 %</span>
								</td>
							</tr>
							<tr>
								<td><span class="order">2</span> Drama</td>
								<td>
									4,495
									<span className="range sucess"><i className="fas fa-arrow-up"></i>8.4 %</span>
								</td>
							</tr>
								<tr>
									<td><span class="order">3</span> Kids Stories</td>
									<td>
										2,115
										<span className="range sucess"><i className="fas fa-arrow-up"></i>8.4 %</span>
									</td>
								</tr>
								<tr>
									<td><span class="order">4</span> Cricket</td>
									<td>
										1,597
										<span className="range sucess"><i className="fas fa-arrow-up"></i>5.9 %</span>
									</td>
								</tr>
								<tr>
									<td><span class="order">5</span> Tips &amp; Tricks</td>
									<td>1,030
										<span className="range sucess"><i className="fas fa-arrow-up"></i>9.7 %</span>
									</td>
								</tr>
							</tbody>
						</table>
						<div className="more-categories"><a href="">More Categories Details <i className="fas fa-chevron-right"></i></a></div>
					</div>
			</div>
    </section>
    );
}
}

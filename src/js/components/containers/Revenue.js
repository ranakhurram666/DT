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
export default class Revenue extends React.Component {
  
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
        <div className="tablular-data-wrapper">
      		<table className="table table-with-borderless-header table-bordered"> 
            <thead> 
              <tr> 
                <th>Content Consumption</th> 
                <th>Content &lt; 3 Minutes</th> 
                <th>Content &gt; 3 minutes</th> 
              </tr> 
            </thead>   
            <tbody> 
              <tr> 
                <th scope="row">Play during &lt; 50%</th> 
                <td>289,786</td> 
                <td>17,061</td> 
              </tr> 
              <tr> 
                <th scope="row">Play during &gt; 50%</th> 
                <td>106,633</td> 
                <td>0</td> 
              </tr> 
            </tbody> 
          </table>
          <div class="table-footer text-right">Estimated Total (PKR): Rs.413,480</div>
        </div>
    	</section>
    </div>
    );
  }
}

import React from "react";
import { connect } from "react-redux";
import SearchInput from 'react-search-input';

/*
@connect((store) => {
return {
user: store.user.user,
userFetched: store.user.fetched,
tweets: store.tweets.tweets,
};
})*/

export default class MyLibrary extends React.Component {
  constructor() {
    super();
  }
  componentWillMount() {
  //this.props.dispatch(fetchUser())
  //document.title = "t"
}

searchUpdated (term) {
    console.log(term);
  }

render() {
  return (

    <div>
    	<section className="content-white">
    		
        <div className="filter-area">
          <div className="col-md-6">
            <SearchInput className="search-input" onChange={this.searchUpdated} placeholder="Search All Programs" />
          </div>
          <div className="col-md-offset-4 col-md-2 text-right">
            <button class="btn btn-primary" type="submit"><i class="fas fa-plus"></i> New Program</button>
          </div>
        </div>

        <div className="tablular-data-wrapper clearfix">

        </div>
    	</section>
    </div>

    );
}
}

import React from "react"
import { connect } from "react-redux"

<<<<<<< HEAD
import InnerMain  from "../InnerMain";
import PageTitle  from "../PageTitle";


=======
import Overview  from "../Overview";
>>>>>>> 805fbc407b8e11744fa65c11317c778073cc51b9
/*
@connect((store) => {
return {
user: store.user.user,
userFetched: store.user.fetched,
tweets: store.tweets.tweets,
};
})*/
export default class Main extends React.Component {
  constructor() {
    super();
  }
  componentWillMount() {
//this.props.dispatch(fetchUser())
}


  
  render() {
    return (
      <main id="main">
       <div class="main-wrapper">
        <div class="container-fluid">
          <Overview />
        </div>
       </div>
      </main>
      );
  }
}

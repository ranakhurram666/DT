import React from "react"
import { connect } from "react-redux"

import { fetchUser } from "../actions/userActions"
import { fetchTweets } from "../actions/tweetsActions"
import NavBar  from "../components/NavBar";
import Main  from "../components/containers/Main";
import SideMenu  from "../components/SideMenu";
import Footer  from "../components/Footer";

// @connect((store) => {
//   return {
//     user: store.user.user,
//     userFetched: store.user.fetched,
//     tweets: store.tweets.tweets,
//   };
// })

export default class Layout extends React.Component {
  componentWillMount() {
    //this.props.dispatch(fetchUser())
  }

  fetchTweets() {
    //this.props.dispatch(fetchTweets())
  }

  render() {
    return (
      <div>
        <NavBar />
          {this.props.children}
        <SideMenu />
        <Footer />
      </div>
      );
    }
  }

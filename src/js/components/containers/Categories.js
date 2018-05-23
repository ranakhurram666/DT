import React from "react";
import { connect } from "react-redux";
import TotalListItem from '../list-items/TotalListItem';
import NameListItem from '../list-items/NameListItem';
/*
@connect((store) => {
return {
user: store.user.user,
userFetched: store.user.fetched,
tweets: store.tweets.tweets,
};
})*/
export default class Categories extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [
        {
          name: 'News',
          nameRise: true,
          totalListener: '76,272',
          listenersPercent: '9.7',
          listenerRise: true,
          totalMinutes: '36,265',
          minutesPercent: '7.1',
          minutesRise: true,
        },
        {
          name: 'Dramas',
          nameRise: true,
          totalListener: '76,272',
          listenersPercent: '9.7',
          listenerRise: true,
          totalMinutes: '36,265',
          minutesPercent: '7.1',
          minutesRise: true,
        },
        {
          name: 'Cricket',
          nameRise: true,
          totalListener: '76,272',
          listenersPercent: '9.7',
          listenerRise: true,
          totalMinutes: '36,265',
          minutesPercent: '7.1',
          minutesRise: true,
        },
      ]
    }
  }
  componentWillMount() {
  //this.props.dispatch(fetchUser())
  //document.title = "t"
}

render() {
  return (

    <div>
    <section className="content-white">
        <div className="tablular-data-wrapper clearfix">
            <div className="col-md-12">
                <table className="table table-bordered table-striped">
                    <thead>
                    <tr>
                        <th>Names</th>
                        <th>Total Listeners</th>
                        <th>Minutes Consumed</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    { this.state.categories.map((item) => {
                      return (
                          <tr>
                            <NameListItem name={item.name} rise={item.nameRise}/>
                            <TotalListItem total={item.totalListener} rise={item.listenerRise}
                                           percentValue={item.listenersPercent}/>
                            <TotalListItem total={item.totalMinutes} rise={item.minutesRise} percentValue={item.minutesPercent}/>
                            <td><a href="#"> View More</a></td>
                        </tr>
                      )
                    })
                    }
                    </tbody>
                </table>
            </div>
        </div>
    </section>
    </div>

    );
}
}

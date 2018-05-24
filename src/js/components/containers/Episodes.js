import React from "react";
import { connect } from "react-redux";
import TotalListItem from '../list-items/TotalListItem';
import NameListItem from '../list-items/NameListItem';
import { Link } from 'react-router';
/*
@connect((store) => {
return {
user: store.user.user,
userFetched: store.user.fetched,
tweets: store.tweets.tweets,
};
})*/
export default class Episodes extends React.Component {
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
      <div className="filter-area">
        <div className="col-md-6">
        <input type="text" class="form-control"  placeholder="Search episodes here" />
        </div>
        <div className="col-md-offset-4 col-md-2 text-right">
        <button class="btn btn-primary" type="submit"><i class="fas fa-download"></i> Download</button>
        </div>
      </div>
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
                            <td>
                            <Link to="episodes/details"> View More</Link>
                            </td>
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

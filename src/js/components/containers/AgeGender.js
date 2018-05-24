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
export default class AgeGender extends React.Component {
  constructor() {
    super();
    this.state = {
      Programs : [
        {
          id : 1,
          name: 'Women 1',
          nameRise: true,
          totalListener: '76,272',
          listenersPercent: '9.7',
          listenerRise: true,
          totalMinutes: '36,265',
          minutesPercent: '7.1',
          minutesRise: true,
        },
        {
          id : 2,
          name: 'Men 1',
          nameRise: true,
          totalListener: '76,272',
          listenersPercent: '9.7',
          listenerRise: true,
          totalMinutes: '36,265',
          minutesPercent: '7.1',
          minutesRise: true,
        },
        {
          id : 3,
          name: 'Women 2',
          nameRise: true,
          totalListener: '76,272',
          listenersPercent: '9.7',
          listenerRise: true,
          totalMinutes: '36,265',
          minutesPercent: '7.1',
          minutesRise: true,
        },
        {
          id : 4,
          name: 'Men 2',
          nameRise: true,
          totalListener: '76,272',
          listenersPercent: '9.7',
          listenerRise: true,
          totalMinutes: '36,265',
          minutesPercent: '7.1',
          minutesRise: true,
        },
        {
          id : 5,
          name: 'Women 3',
          nameRise: true,
          totalListener: '76,272',
          listenersPercent: '9.7',
          listenerRise: true,
          totalMinutes: '36,265',
          minutesPercent: '7.1',
          minutesRise: true,
        },
        {
          id : 6,
          name: 'Men 3',
          nameRise: true,
          totalListener: '76,272',
          listenersPercent: '9.7',
          listenerRise: true,
          totalMinutes: '36,265',
          minutesPercent: '7.1',
          minutesRise: true,
        },
        {
          id : 7,
          name: 'Women 4',
          nameRise: true,
          totalListener: '76,272',
          listenersPercent: '9.7',
          listenerRise: true,
          totalMinutes: '36,265',
          minutesPercent: '7.1',
          minutesRise: true,
        },
        {
          id : 8,
          name: 'Men 4',
          nameRise: false,
          totalListener: '76,272',
          listenersPercent: '9.7',
          listenerRise: false,
          totalMinutes: '36,265',
          minutesPercent: '7.1',
          minutesRise: false,
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
    	<section class="content-white">
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
                    { this.state.Programs.map((item) => {
                      return (
                          <tr key={item.id}>
                            <NameListItem name={item.name} rise={item.nameRise}/>
                            <TotalListItem total={item.totalListener} rise={item.listenerRise}
                                           percentValue={item.listenersPercent}/>
                            <TotalListItem total={item.totalMinutes} rise={item.minutesRise} percentValue={item.minutesPercent}/>
                            <td><Link to="ageGender/details"> View More <i class="fas fa-angle-right"></i></Link></td>
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

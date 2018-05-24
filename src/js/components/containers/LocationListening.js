import React from "react";
import { connect } from "react-redux";
import TotalListItem from '../list-items/TotalListItem';
import RatingListItem from '../list-items/RatingListItem';
import { Link } from 'react-router';
export default class LocationListening extends React.Component {
  constructor() {
    super();
    this.state = {
      Programs : [
        {
          id : 1,
          name: 'Location 1',
          rating:1,
          totalListener: '76,272',
          listenersPercent: '9.7',
          listenerRise: true,
          totalMinutes: '36,265',
          minutesPerUser: '3m 30sec',
        },
        {
            id : 2,
            name: 'Location 2',
            rating:1,
            totalListener: '76,272',
            listenersPercent: '9.7',
            listenerRise: true,
            totalMinutes: '36,265',
            minutesPerUser: '3m 30sec',
        },
        {
            id : 3,
            name: 'Location 3',
            rating:1,
            totalListener: '76,272',
            listenersPercent: '9.7',
            listenerRise: true,
            totalMinutes: '36,265',
            minutesPerUser: '3m 30sec',
        },
        {
          id : 4,
          name: 'Location 4',
          rating:1,
          totalListener: '76,272',
          listenersPercent: '9.7',
          listenerRise: true,
          totalMinutes: '36,265',
          minutesPerUser: '3m 30sec',
        },
        {
          id : 5,
          name: 'Location 5',
          rating:1,
          totalListener: '76,272',
          listenersPercent: '9.7',
          listenerRise: true,
          totalMinutes: '36,265',
          minutesPerUser: '3m 30sec',
        },
        {
          id : 6,
          name: 'Location 6',
          rating:1,
          totalListener: '76,272',
          listenersPercent: '9.7',
          listenerRise: true,
          totalMinutes: '36,265',
          minutesPerUser: '3m 30sec',
        },
        {
          id : 7,
          name: 'Location 7',
          rating:1,
          totalListener: '76,272',
          listenersPercent: '9.7',
          listenerRise: true,
          totalMinutes: '36,265',
          minutesPerUser: '3m 30sec',
        },
        {
          id : 8,
          name: 'Location 8',
          rating:1,
          totalListener: '76,272',
          listenersPercent: '9.7',
          listenerRise: true,
          totalMinutes: '36,265',
          minutesPerUser: '3m 30sec',
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
        
        </div>
      </div>
        <div className="tablular-data-wrapper clearfix">
            <div className="col-md-12">
                <table className="table table-bordered table-striped">
                    <thead>
                    <tr>
                        <th>Districts</th>
                        <th>Total Listeners</th>
                        <th>Minutes Consumed</th>
                        <th>Minutes per Listener</th>
                    </tr>
                    </thead>
                    <tbody>
                    { this.state.Programs.map((item) => {
                      return (
                          <tr key={item.id}>
                          <RatingListItem name={item.name} rating={item.rating} />
                          <TotalListItem total={item.totalListener} rise={item.listenerRise}
                                           percentValue={item.listenersPercent}/>
                            <td>{item.totalMinutes}</td>
                            <td>{item.minutesPerUser}</td>
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

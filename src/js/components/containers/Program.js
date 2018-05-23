import React from "react";
import { connect } from "react-redux";
import TotalListItem from '../list-items/TotalListItem';
import NameListItem from '../list-items/NameListItem';
import { Link } from 'react-router';
export default class Program extends React.Component {
  constructor() {
    super();
    this.state = {
      Programs : [
        {
          id : 1,
          name: 'Program 1',
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
          name: 'Program 2',
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
          name: 'Program 3',
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
          name: 'Program 4',
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
          name: 'Program 5',
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
          name: 'Program 6',
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
          name: 'Program 7',
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
          name: 'Program 8',
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
    	<div className="stat-section clearfix">
        <input type="Text" value="Search" />
        <button type="button" className="btn btn-primary">Download Report</button>
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
                            <td><Link to="program/details"> View More</Link></td>
                        </tr>
                      )
                    })
                    }
                    </tbody>
                </table>
            </div>
        </div>
		
      </div>

    </section>
    </div>

    );
}
}

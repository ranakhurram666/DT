import React from "react";
import { connect } from "react-redux";
import SplitedCardPerformance from "../cards/SplitedCardPerformance";
import PerformanceListItem from '../list-items/PerformanceListItem';
import PerformerListItem from '../list-items/PerformerListItem'
import NonBorderCard from '../cards/NonBorderCard';
import SimpleLineChart  from '../charts/SimpleLineChart'
import TabSection from "../TabSection";
import TotalListItem from '../list-items/TotalListItem';

export default class AgeGenderDetail extends React.Component {
    constructor() {
        super();
        this.state = {
           totalListeners: [
                {x: 100},
                {x: 600},
                {x: 800},
                {x: 500},
                {x: 100}, {x: 700},
                {x: 300}, {x: 600},
           ],
            minutesConsumed: [
                {x: 100},
                {x: 600},
                {x: 800},
                {x: 400},
                {x: 100}, {x: 600},
                {x: 300}, {x: 700},
           ],
            averageMinutes: [
                {x: 100},
                {x: 600},
                {x: 800},
                {x: 500},
                {x: 100}, {x: 700},
                {x: 300}, {x: 600},
           ],
           ProgramsGraphData : [
            {name: 'JAN 22', uv: 4000, pv: 2400, amt: 7000},
            {name: 'JAN 23', uv: 3000, pv: 1398, amt: 2700},
            {name: 'JAN 24', uv: 2000, pv: 9800, amt: 2800},
            {name: 'JAN 25', uv: 2780, pv: 3908, amt: 9000},
            {name: 'JAN 26', uv: 1890, pv: 4800, amt: 1500},
            {name: 'JAN 27', uv: 2390, pv: 3800, amt: 6000},
            {name: 'JAN 28', uv: 3490, pv: 4300, amt: 7000},
            {name: 'JAN 29', uv: 3697, pv: 4500, amt: 2200},
            {name: 'JAN 30', uv: 3697, pv: 4500, amt: 8000},
            {name: 'JAN 31', uv: 3697, pv: 4500, amt: 300},
            {name: 'FEB 1', uv: 3697, pv: 4500, amt: 2300},
            {name: 'FEB 2', uv: 3697, pv: 4500, amt: 1050},
            {name: 'FEB 3', uv: 3697, pv: 4500, amt: 2500},
            {name: 'FEB 4', uv: 3697, pv: 4500, amt: 3700},
            {name: 'FEB 5', uv: 3697, pv: 4500, amt: 3900},
            {name: 'FEB 6', uv: 3697, pv: 4500, amt: 4200},
            {name: 'FEB 7', uv: 3697, pv: 4500, amt: 8000},
        ],
        episodes : [
            {
              id : 1,
              name: 'Program 1',
              totalListener: '76,272',
              listenersPercent: '9.7',
              listenerRise: true,
              minutes: '36,265',
              minutesRise: true,
              minutesPercent: '9.7',
              averageTime: '4:30'
            },
            {
              id : 2,
              name: 'Program 2',
              totalListener: '76,272',
              listenersPercent: '9.7',
              listenerRise: true,
              minutes: '36,265',
              minutesRise: true,
              minutesPercent: '2.7',
              averageTime: '2:30'
            },
            {
              id : 3,
              name: 'Program 3',
              totalListener: '76,272',
              listenersPercent: '9.7',
              listenerRise: true,
              minutes: '36,265',
              minutesRise: true,
              minutesPercent: '5.7',
              averageTime: '1:30'
            },
            {
              id : 4,
              name: 'Program 4',
              totalListener: '76,272',
              listenersPercent: '9.7',
              listenerRise: true,
              minutes: '36,265',
              minutesRise: true,
              minutesPercent: '6.7',
              averageTime: '1:06'
            },
            
            
          ]
        }
      }
      componentWillMount() {
    }

    render() {
        return (
            <div>
          <section class="content-white">
              <div class="clearfix">
                  <SplitedCardPerformance 
                      colClass={'col-md-4'}
                    cardTitle={'Total Listeners'}
                    cardValue={'599,404'}
                    rise={true}
                    percentValue={'10.6'}
                    tinyChartData={this.state.totalListeners}
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
                    tinyChartData={this.state.minutesConsumed}
                    tagLine={'20% Of Community Munites'}
                />
      
                  <SplitedCardPerformance 
                      colClass={'col-md-4'}
                    cardTitle={'Minutes Per User'}
                    cardValue={'5m 30sec'}
                    rise={true}
                    percentValue={'35.8'}
                    icon={'fas fa-question-circle'}
                    tinyChartData={this.state.averageMinutes}
                    tagLine={'Average Minutes Per User'}
                />
                  </div>
                  <div className="tablular-data-wrapper clearfix">

                  <div className="col-md-6">
                          <table class="table table-bordered table-striped">
                              <thead>
                                  <tr>
                                      <th>Categories</th>
                                      <th>Total Listeners</th>
                                  </tr>
                              </thead>
                              <tbody>
                                  <PerformanceListItem rating={1} name={'News'} rise={true} percentValue={10.6} total={5693} />
                                  <PerformanceListItem rating={2} name={'News'} rise={true} percentValue={10.6} total={5693} />
                                  <PerformanceListItem rating={3} name={'News'} rise={true} percentValue={10.6} total={5693} />
                                  <PerformanceListItem rating={4} name={'News'} rise={true} percentValue={10.6} total={5693} />
                                  <PerformanceListItem rating={5} name={'News'} rise={true} percentValue={10.6} total={5693} />
                                  <PerformanceListItem rating={6} name={'News'} rise={true} percentValue={10.6} total={5693} />
                                  </tbody>
                              </table>
                              <div className="table-footer more-categories"><a href="">More Categories Details <i className="fas fa-chevron-right"></i></a></div>
                          </div>
                      <div className="col-md-6">
                          <table class="table table-bordered table-striped">
                              <thead>
                                  <tr>
                                      <th>Locations</th>
                                      <th>Total Listeners</th>
                                  </tr>
                              </thead>
                              <tbody>
                                  <PerformanceListItem  rating={1} name={'News'} rise={true} percentValue={10.6} total={5693} />
                                  <PerformanceListItem rating={2} name={'News'} rise={true} percentValue={10.6} total={5693} />
                                  <PerformanceListItem rating={3} name={'News'} rise={true} percentValue={10.6} total={5693} />
                                  <PerformanceListItem rating={4} name={'News'} rise={true} percentValue={10.6} total={5693} />
                                  <PerformanceListItem rating={5} name={'News'} rise={true} percentValue={10.6} total={5693} />
                                  <PerformanceListItem rating={6} name={'News'} rise={true} percentValue={10.6} total={5693} />
                                  </tbody>
                              </table>
                              <div className="table-footer more-categories"><a href="">More locations Details <i className="fas fa-chevron-right"></i></a></div>
                          </div>
      
                          
                  </div>
          </section>
          
          <section class="content-white">
              <div className="stat-section clearfix">
              <NonBorderCard cardTitle={'Total Listeners'} cardValue={'599,404'} rise={true} percentValue={'10.6'}/>
      
              <button type="button" className="btn btn-primary">Download Report</button>
              
              <SimpleLineChart data={this.state.ProgramsGraphData} width={1000} />
              <div className="tablular-data-wrapper clearfix">
                      <div className="col-md-12">
                          <table class="table table-bordered table-striped">
                              <thead>
                                  <tr>
                                      <th>Top Programs</th>
                                      <th>Total Listeners</th>
                                      <th>Minutes Consumed</th>
                                      <th>Average Session</th>
                                  </tr>
                              </thead>
                              <tbody>
                    { this.state.episodes.map((item) => {
                      return (
                          <tr>
                            <td><span className="order"><input type="checkbox" /></span>{item.name}</td>
                            <TotalListItem total={item.totalListener} rise={item.listenerRise}
                                           percentValue={item.listenersPercent}/>
                            <TotalListItem total={item.minutes} rise={item.minutesRise}
                                           percentValue={item.minutesPercent}/>
                            <td>{item.averageTime}</td>
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
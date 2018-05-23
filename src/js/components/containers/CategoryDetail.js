import React from "react";
import { connect } from "react-redux";

import SplitedCardPerformance from "../cards/SplitedCardPerformance";
import PerformanceListItem from '../list-items/PerformanceListItem';
import PerformerListItem from '../list-items/PerformerListItem'
import TotalListItem from '../list-items/TotalListItem'
import NonBorderCard from '../cards/NonBorderCard';
import SimpleLineChart  from '../charts/SimpleLineChart'

/*
@connect((store) => {
return {
user: store.user.user,
userFetched: store.user.fetched,
tweets: store.tweets.tweets,
};
})*/
export default class CategoryDetail extends React.Component {
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
            revenueGenerated: [
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
            programs: [
                {
                    programName: 'News',
                    totalListener: '76,272',
                    listenersPercent: '9.7',
                    listenerRise: true,
                    totalMinutes: '36,265',
                    minutesPercent: '7.1',
                    minutesRise: true,
                    avgSession: '5m 12sec'
                },
                {
                    programName: 'Pyray Afzal',
                    totalListener: '36,472',
                    listenersPercent: '6.7',
                    listenerRise: true,
                    totalMinutes: '24,726',
                    minutesPercent: '5.1',
                    minutesRise: true,
                    avgSession: '18m 34sec'
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
                            cardTitle={'Revenue Generated'}
                            cardValue={'120,003'}
                            rise={true}
                            percentValue={'35.1'}
                            icon={'fas fa-question-circle'}
                            tinyChartData={this.state.revenueGenerated}
                            tagLine={'300 Mins Broadcasted'}
                        />
                    </div>
                    <div className="tablular-data-wrapper clearfix">
                        <div className="col-md-6">
                            <table class="table table-bordered table-striped">
                                <thead>
                                <tr>
                                    <th>Locations</th>
                                    <th>Total Listeners</th>
                                </tr>
                                </thead>
                                <tbody>
                                <PerformanceListItem  rating={1} name={'News'} rise={true} percentValue={10.6} total={5,693} />
                                <PerformanceListItem rating={2} name={'News'} rise={true} percentValue={10.6} total={5,693} />
                                <PerformanceListItem rating={3} name={'News'} rise={true} percentValue={10.6} total={5,693} />
                                <PerformanceListItem rating={4} name={'News'} rise={true} percentValue={10.6} total={5,693} />
                                <PerformanceListItem rating={5} name={'News'} rise={true} percentValue={10.6} total={5,693} />
                                <PerformanceListItem rating={6} name={'News'} rise={true} percentValue={10.6} total={5,693} />
                                </tbody>
                            </table>
                            <div className="table-footer more-categories"><a href="">More locations details <i className="fas fa-chevron-right"></i></a></div>
                        </div>

                        <div className="col-md-6">
                            <table class="table table-bordered table-striped">
                                <thead>
                                <tr>
                                    <th>Age & Gender</th>
                                    <th>Listeners Count</th>
                                </tr>
                                </thead>
                                <tbody>
                                <PerformanceListItem rating={1} name={'News'} rise={true} percentValue={10.6} total={5,693} />
                                <PerformanceListItem rating={2} name={'News'} rise={true} percentValue={10.6} total={5,693} />
                                <PerformanceListItem rating={3} name={'News'} rise={true} percentValue={10.6} total={5,693} />
                                <PerformanceListItem rating={4} name={'News'} rise={true} percentValue={10.6} total={5,693} />
                                <PerformanceListItem rating={5} name={'News'} rise={true} percentValue={10.6} total={5,693} />
                                <PerformanceListItem rating={6} name={'News'} rise={true} percentValue={10.6} total={5,693} />
                                </tbody>
                            </table>
                            <div className="table-footer more-categories"><a href="">More age & gender details <i className="fas fa-chevron-right"></i></a></div>
                        </div>
                    </div>
                </section>

                <section class="content-white">
                    <div className="stat-section clearfix">
                        <NonBorderCard cardTitle={'PROGRAMS'} cardValue={'599,404'} rise={true} percentValue={'10.6'}/>

                        <button type="button" className="btn btn-primary">Download Report</button>

                        <SimpleLineChart data={this.state.ProgramsGraphData} width={1000} />
                        <div className="tablular-data-wrapper clearfix">
                            <div className="col-md-12">
                                <table class="table table-bordered table-striped">
                                    <thead>
                                    <tr>
                                        <th>Top Programs</th>
                                        <th>Total Listeners</th>
                                        <th>Minutes Consumer</th>
                                        <th>Average Session</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    { this.state.programs.map((item) => {
                                        return (
                                            <tr key={item.programName}>
                                                <td>
                                                    <span className="order"><input type="checkbox" /></span>{item.programName}
                                                </td>
                                                <TotalListItem total={item.totalListener} rise={item.listenerRise}
                                                               percentValue={item.listenersPercent}/>
                                                <TotalListItem total={item.totalMinutes} rise={item.minutesRise} percentValue={item.minutesPercent}/>
                                                <td><span>{item.avgSession}</span></td>
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

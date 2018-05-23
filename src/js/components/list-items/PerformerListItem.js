import React from "react"
import { connect } from "react-redux"
import TotalListItem from './TotalListItem';

export default class PerformerListItem extends React.Component {
  constructor() {
    super();
  }
  componentWillMount() {
  }
  

  render() {
        return (
            <tr>
                <td><span className="order"><input type="checkbox" checked={this.props.checked} /></span>{this.props.name}</td>
                <TotalListItem total={this.props.total} rise={this.props.rise} percentValue={this.props.percentValue} />
            </tr>
        );
  }
}

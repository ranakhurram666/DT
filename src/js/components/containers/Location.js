import React from "react";
import { connect } from "react-redux";
import { GoogleMap, withGoogleMap, withScriptjs } from "react-google-maps";
import MarkerWithLabel from "react-google-maps/lib/components/addons/MarkerWithLabel";
import  SearchBox  from "react-google-maps/lib/components/places/SearchBox";

/*
@connect((store) => {
return {
user: store.user.user,
userFetched: store.user.fetched,
tweets: store.tweets.tweets,
};
})*/
export default class Location extends React.Component {
  constructor() {
    super();
  }
  componentWillMount() {
  //this.props.dispatch(fetchUser())
  //document.title = "t"
}

render() {
  return (

    <div>
    	<section className="content-white">
          <div className="container-fluid">
    		<MapComponent isMarkerShown={true} googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: `100%`, width:'auto', overflow: `visible` }} />}
                containerElement={<div style={{height: `100%`, width:'auto', overflow: `visible`}}/>}
                mapElement={<div style={{height: 450+'px', overflow: `visible`}}/>} />
            </div>
    	</section>
    </div>

    );
}
}

const MapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }} style={{position: 'static', overflow: 'visible'}}
  >
      <SearchBox
      controlPosition={google.maps.ControlPosition.TOP_LEFT}
      >
        <input
        type="text"
        placeholder="Customized your placeholder"
        style={{
          boxSizing: `border-box`,
          border: `1px solid transparent`,
          width: `240px`,
          height: `32px`,
          marginTop: `27px`,
          padding: `0 12px`,
          borderRadius: `3px`,
          boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
          fontSize: `14px`,
          outline: `none`,
          textOverflow: `ellipses`,
        }}
      />
      </SearchBox>
    {props.isMarkerShown && <MapInfoWindow position={{ lat: -34.397, lng: 150.644 }} labelValue={'Hi'} />}
    {props.isMarkerShown && <MapInfoWindow position={{ lat: -34.397, lng: 148.644 }} labelValue={'Hello'} />}
  </GoogleMap>
));


export class MapInfoWindow extends React.Component {
    constructor() {
        super();
        this.state = {
          showLabel: false
        }
    }

    componentWillMount() {
    }

    showLabelToggle() {
      this.setState({showLabel: !this.state.showLabel})
    }

    render() {
      return (
        <MarkerWithLabel
          position={this.props.position}
          labelAnchor={new google.maps.Point(0, 0)}
          labelStyle={{backgroundColor: "yellow", fontSize: "32px"}}
          visible={true}
          onMouseOver={()=>{this.showLabelToggle();}}
          onMouseOut={()=>{this.showLabelToggle();}}
          // onVisibleChanged={showMarkerLabel}
        >
            <div>{this.state.showLabel && <span style={{padding: '16px'}}>{this.props.labelValue}</span>}</div>
        </MarkerWithLabel>
      )
    }
}

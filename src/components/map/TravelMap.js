import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { connect } from 'react-redux'

import { travelMapStyle } from './TravelMapCustomStyle.js';
import PhotoAlbumMarker from './PhotoAlbumMarker.js';
 
import './../../css/index.css'
import './../../css/map/TravelMap.css'

class TravelMap extends Component {
  
  constructor(props) {
    super(props);

    this.state = {};

    this.renderTravelPaths = this.renderTravelPaths.bind(this);
  }

  static defaultProps = {
    center: {
      /* centered on roughly hong kong */
      lat: 10,
      lng: 114.1095
    },
    zoom: 1,
    styles: travelMapStyle
  };

  // Renders all travel paths on load.... 
  // Currently saving paths... only needed if enable hovering
  renderTravelPaths(map, maps) {
    // individual dash in dashed line
    map.style = travelMapStyle;
    const lineSymbol = {
            path: 'M 0,-1 0,1',
            strokeOpacity: 1,
            scale: 4
    };

    this.props.latlongs.forEach(loc => {
      this.setState({
        [loc.name]: []
      });
      
      if (loc.path) {
        loc.path.forEach(path => {
          var flightPath = new maps.Polyline({
            path: path,
            geodesic: true,
            strokeColor: '#000',
            strokeOpacity: 0,
            icons: [{
              icon: lineSymbol,
              offset: '0',
              repeat: '20px'
            }],
          });

          flightPath.setMap(map);
          // flightPath.setVisible(false); ... use onmouseover in marker to setVisible(true)
          this.setState({
            [loc.name]: this.state[loc.name].concat(flightPath)
          });
        });
      }
    });
  }
 
  render() {
      const photoAlbums = this.props.latlongs.map(album => <PhotoAlbumMarker  
            key={album.name}
            lat={album.lat}
            lng={album.lng}
            name={album.name} 
            image={album.imagePath}
            paths={this.state[album.name]}
          />);

    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '90vh', width: '100%' }}>
        <GoogleMapReact
          /* GoogleMapsKey set to null. bootstrapURLKeys={{ key: }} */
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          onGoogleApiLoaded={({ map, maps }) => this.renderTravelPaths(map, maps)}
        >
          {photoAlbums}
        </GoogleMapReact>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {latlongs: state.latlongs}
};
 
export default connect(mapStateToProps)(TravelMap);
import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { connect } from 'react-redux'

import { travelMapStyle } from './TravelMapCustomStyle.js';
import PhotoAlbumMarker from './PhotoAlbumMarker.js';
import Directory from './../Directory.js';
 
import './../../css/index.css'
import './../../css/map/TravelMap.css'

class TravelMap extends Component {
  static defaultProps = {
    center: {
      /* centered on roughly hong kong */
      lat: 10,
      lng: 114.1095
    },
    zoom: -5,
    styles: travelMapStyle
  };
 
  render() {
      const photoAlbums = this.props.latlongs.map(album => <PhotoAlbumMarker className="map-directory" 
            lat={album.lat}
            lng={album.lng}
            name={album.name} 
            image={album.imagePath} 
          />);

    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '90vh', width: '100%' }}>
        <GoogleMapReact
          /* GoogleMapsKey set to null. bootstrapURLKeys={{ key: }} */
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
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
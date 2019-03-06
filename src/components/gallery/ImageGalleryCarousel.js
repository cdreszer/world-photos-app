import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import { requireWithBackup } from './../../util';

import './../../css/index.css';
import './../../css/ImageGalleryCarousel.css';



class ImageGalleryCarousel extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);
    this.ImageGalleryCarouselItem = this.ImageGalleryCarouselItem.bind(this);

    this.state = {
      index: 0,
      direction: null,
      images: [...this.props.images]
    }
  }

  /** Reset index and direction if new images are passed. */
  componentWillReceiveProps(nextProps) {
    if (nextProps.images !== this.props.images) {
      this.setState({index: 0, direction: null, images:[...nextProps.images]});
    }
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction,
      images: [...this.state.images]
    });
  }

  /** Each carousel item. */
  ImageGalleryCarouselItem(props) {
    const imageURI = requireWithBackup(props.image);
    return (
        <Carousel.Item key={props.name} className="carouselItem">
          <img
            className="d-block w-100"
            src={imageURI}
            alt={"Slide" + props.slide}
            fluid
          />
          <Carousel.Caption >
            <h3 className="imageName">{props.name}</h3>
            <p className="imageDescription">{props.desc}</p>
          </Carousel.Caption>
        </Carousel.Item>
    );
  }

  render() {
    const { index, direction, images } = this.state;
    let slide = 1;
    const carouselItems = images.map(im => 
      this.ImageGalleryCarouselItem({image:im.image, slide:slide++, name:im.name, desc:im.desc})
      // <this.ImageGalleryCarouselItem image={im.image} slide={slide++} name={im.name} desc={im.desc} />
    );

    return (
      <div id="image-gallery-container">
        
        <Carousel
          className="imageGallery"
          activeIndex={index}
          direction={direction}
          onSelect={this.handleSelect}
        >
          {carouselItems}
        </Carousel>
        <span id="country-title">{this.props.title}</span>
      </div>
    );
  }
}


export default ImageGalleryCarousel;


//  glyphicon glyphicon-th -- gallery icon
//  glyphicon glyphicon-edit -- edit
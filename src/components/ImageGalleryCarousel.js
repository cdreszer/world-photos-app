import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import './../css/index.css';
import './../css/ImageGalleryCarousel.css';

class ImageGalleryCarousel extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);
    this.imageGalleryCarouselItem = this.imageGalleryCarouselItem.bind(this);

    this.state = {
      index: 0,
      direction: null,
      images: [
        {
          "name": "Bali Scooter",
          "image": "Bali Scooter.JPG",
        },
        {
          "name": "Paris",
          "image": "Paris.JPG",
        },
        {
          "name": "P1010115",
          "image": "P1010115.JPG",
        },
        {
          "name": "santorini-water",
          "image": "santorini-water.JPG",
        },
        {
          "name": "P1010071",
          "image": "P1010071.JPG",
        },
        {
          "name": "P1010138",
          "image": "P1010138.JPG",
        },
        {
          "name": "athens",
          "image": "athens.JPG",
        },
        {
          "name": "P1010072",
          "image": "P1010072.JPG",
        },
        {
          "name": "P1010107",
          "image": "P1010107.JPG",
        },
        {
          "name": "P1010152",
          "image": "P1010152.JPG",
        },
        {
          "name": "SanSebastian",
          "image": "SanSebastian.JPG",
        },
        {
          "name": "P1010120",
          "image": "P1010120.JPG",
        },
        {
          "name": "P1010086",
          "image": "P1010086.JPG",
        },
        {
          "name": "peniche",
          "image": "peniche.JPG",
        }
        ]
    }
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction,
      images: [
        {
          "name": "Bali Scooter",
          "image": "Bali Scooter.JPG",
        },
        {
          "name": "Paris",
          "image": "Paris.JPG",
        },
        {
          "name": "P1010115",
          "image": "P1010115.JPG",
        },
        {
          "name": "santorini-water",
          "image": "santorini-water.JPG",
        },
        {
          "name": "P1010071",
          "image": "P1010071.JPG",
        },
        {
          "name": "P1010138",
          "image": "P1010138.JPG",
        },
        {
          "name": "athens",
          "image": "athens.JPG",
        },
        {
          "name": "P1010072",
          "image": "P1010072.JPG",
        },
        {
          "name": "P1010107",
          "image": "P1010107.JPG",
        },
        {
          "name": "P1010152",
          "image": "P1010152.JPG",
        },
        {
          "name": "SanSebastian",
          "image": "SanSebastian.JPG",
        },
        {
          "name": "P1010120",
          "image": "P1010120.JPG",
        },
        {
          "name": "P1010086",
          "image": "P1010086.JPG",
        },
        {
          "name": "peniche",
          "image": "peniche.JPG",
        }
        ]
    });
  }

  /** Needed to place inside here for whatever reason */
  imageGalleryCarouselItem(props) {
    const imageURI = require('./../images/' + props.image);
    return (
        <Carousel.Item className="carouselItem">
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
      this.imageGalleryCarouselItem({image:im.image, slide:slide++, name:im.name, desc:"Blah Blah Blah"}));

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
        <span id="country-title">{this.state.country || "2018"}</span>
      </div>
    );
  }
}


export default ImageGalleryCarousel;
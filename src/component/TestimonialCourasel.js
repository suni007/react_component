import React, { Component } from 'react'
import Slider from 'react-slick';
import '../css/carousel.css'

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay:true,
      pauseOnHover:true,
      arrows:true
    };
    const Items=[{ image: require ('../images/c/1.png') },
    { image: require ('../images/c/2.png') },
    { image: require ('../images/c/3.png') },
    { image: require ('../images/c/4.png') },
    { image: require ('../images/c/5.png') },
    { image: require ('../images/c/6.png') },
    { image: require ('../images/c/7.png') },
    { image: require ('../images/c/8.png') },
    { image: require ('../images/c/9.png') }];

    return (
      <section class="section" id="testimonials">
      <h1 class="section-heading wow fadeIn" data-wow-delay="0.2s">Our Clients</h1>
      <div className="cal">

        <Slider {...settings}>
        {Items.map((Item) => {
          return(
            <div>
            <img src={Item.image}  role="presentation"/>
            </div>
          );
        })}

        </Slider>
      </div>
      </section>
    );
  }
}

import React from 'react';

const data = [
              { imageUrl: require('../images/1.png'), heading: 'Distribute Animations easily', description: 'Tailor your message into an animation and distribute it over various channels like email, SMS and other social media platforms.' },
              { imageUrl: require('../images/2.png'), heading: 'Realize ROI and Analytics', description: 'Benefit from powerful analytic capabilities that help you realize ROI on marketing spends and also understand user behaviour.' },
              { imageUrl: require('../images/3.png'), heading: 'Simple Call to Actions', description: 'Configurable Call To Actions allow your audience to click and interact with the advertisement making the experience engaging and call back that much easier.' },
              { imageUrl: require('../images/4.png'), heading: 'Viewable across devices', description: 'Hola Cards can be viewed on any smartphone with an internet connection, zero software installation needed.'}
            ];



const AboutView = props =>
<div className="col-md-3 m-b-r wow zoomIn">
  <img src={props.imageUrl} alt="" />
  <h4 className="feature-title">{props.heading}</h4>
  <p className="grey-text"> {props.description}</p>
</div>

class About extends React.Component{
  render(){
    return(

      <section className="section feature-box" id="best-features1">



        <h1 className="section-heading wow fadeIn" data-wow-delay="0.2s">About Hola</h1>
        <p>Reach your customers right on their mobiles with Hola. Hola Enterprise is an Animated Content Distribution platform for generating and distributing Light weight and Interactive animations - Hola cards.
</p>

        <div className="row features-big">
            {data.map(info =>
                <AboutView {...info} />
            )}
        </div>


    </section>


    );
  }
};
export default About;

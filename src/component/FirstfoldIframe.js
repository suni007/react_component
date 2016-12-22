import React from 'react';



class FirstfoldIframe extends React.Component{
render(){
return(
<div className="view hm-black-light">
    <div className="full-bg-img flex-center">
        <div className="container">
            <div className="row" id="home">
                <div className="col-lg-5">
                    <div className="description">
                       <h5 className="h5-responsive black-text wow fadeInLeft" data-wow-delay="0.2s"><strong>Animation To The Power Of Marketing</strong></h5>

                        <p className="wow fadeInLeft black-text" data-wow-delay="0.4s">Explain your product, distribute over multiple channels, engage customers, track user behaviours and get them to take Action !!</p>

                        <a href="#hola" className="btn btn-warning btn-lg wow fadeInLeft" data-wow-delay="0.7s"> Learn how</a>
                    </div>
                </div>
                <div className="col-lg-7">
                <div className="embed-responsive embed-responsive-16by9 wow fadeInRight hola">

                  <iframe src={ this.props.link }className="embed-responsive-item"  name="myiFrame" scrolling="no" frameborder="1" marginheight="0px" marginwidth="0px" height="400px" width="600px" allowfullscreen></iframe>

                </div>
                </div>
            </div>
        </div>
    </div>
</div>

);
}
};

export default FirstfoldIframe;

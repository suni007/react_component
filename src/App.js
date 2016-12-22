import React, { Component } from 'react';

import './App.css';
import MenuBur from './component/MenuBur.js';
import MultipleItems from './component/TestimonialCourasel.js';

import './css/main.css';
import About from './component/About.js';
import './css/bootstrap.css';
import './css/about.css';
import './sass/carousel.min.css';


class App extends Component {
    render() {
        return (
          <div>
            <MenuBur pageWrapId={"page-wrap"}/>
            <main>
            <div className="container">
              <About/>
              <MultipleItems />
            </div>
            </main>
          </div >

        );
    }
}

export default App;

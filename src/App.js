import React, { Component } from 'react';

import './App.css';
import MenuBur from './component/MenuBur.js';
import MultipleItems from './component/TestimonialCourasel.js';
import Price from './component/PriceTable.js';
import AreaChart from './component/AreaChart.jsx';
import About from './component/About.js';

import './css/bootstrap.css';
import './css/about.css';
import './css/price.css';


class App extends Component {
    render() {
        return (
          <div>
            <MenuBur pageWrapId={"page-wrap"}/>
            <main>
            <div className="container">
              <About/>
              <MultipleItems />
              <Price />
              <AreaChart />

            </div>
            </main>
          </div >

        );
    }
}

export default App;

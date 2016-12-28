import React from 'react';
import '../css/mouse.css';
import '../css/mousee.css';



class Mouse extends React.Component{
  render(){
    return(
      
      <div className="flex">
        <a bg="a" className="a" width="350" height="275">A</a>
        <a bg="b" className="b" width="250" height="175">B</a>
        <a bg="c" className="c" width="125" height="350">C</a>
        <a bg="d" className="d" width="175" height="150">D</a>
        <a bg="e" className="e" width="200" height="250">E</a>
        <a bg="f" className="f" width="150" height="225">F</a>
        <a bg="g" className="g" width="225" height="150">G</a>
        <a bg="h" className="h" width="200" height="200">H</a>
        <a bg="i" className="i" width="250" height="140">I</a>
        <a bg="j" className="j" width="125" height="275">J</a>
        <a bg="k" className="k" width="75" height="200">K</a>
     </div>

    );
  }
}

export default Mouse;

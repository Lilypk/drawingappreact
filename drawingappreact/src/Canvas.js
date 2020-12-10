import React, { Component } from "react";
import "./Canvas.css";
import ReactDOM from "react-dom";
import CanvasDraw from "react-canvas-draw";
 
class Canvas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: '#ffc600',
      width: 600,
      height: 600,
      brushRadius: 5

    };
  }
  componentDidMount() {
    // change the color randomly every 2 seconds
    window.setInterval(() => {
      this.setState({
        color: "#" + Math.floor(Math.random() * 16777215).toString(16)
      });
    }, 2000);
  }

  render() {
  
    return (
      <div>
<div className='logo'>DAYDOODLE</div>

      <div className="canvas">
        
        <CanvasDraw  brushColor={this.state.color}/>
        
        <form>
  <label>
    add caption:
    <input type="text" name="caption" />
  </label>
  <input type="submit" value="Save" />
</form>
      <div className='post'>post</div>  
      </div>
      </div>
    );
  }
}

export default Canvas;


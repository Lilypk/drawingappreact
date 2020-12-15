import React, { Component } from "react";
import "./Canvas.css";
import ReactDOM from "react-dom";
import CanvasDraw from "react-canvas-draw";
import tree from "./images/tree.jpeg";
class Canvas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "#ffc600",
      width: 600,
      height: 600,
      brushRadius: 4,
      lazyRadius: 8,
      caption: "",
      drawings: [],
    };
  }
  componentDidMount() {
    // change the color randomly every 2 seconds
    window.setInterval(() => {
      this.setState({
        color: "#" + Math.floor(Math.random() * 16777215).toString(16),
      });
    }, 2000);
    fetch("https://drawingapp-capstone.herokuapp.com/canvas")
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        this.setState({ drawings: data })
      })
      
      
  }

  canvasString = (e) => {
    e.preventDefault();
    console.log(this.state.caption);
    let canvasSelector = document.querySelector("canvas")
    console.log(canvasSelector)
    // let canvasDrawing = {
    //   caption: this.state.caption,
    //   drawing: canvasSelector,
    // };
    // // console.log(document.querySelector('canvas'))
    // fetch("https://drawingapp-capstone.herokuapp.com/canvas", {
    //   method: "POST",
    //   body: JSON.stringify(canvasDrawing),
    //   headers: {
    //     "Content-Type": "application/json",
    //     Accept: "application/json",
    //   },
    // })
    //   .then((res) => res.json())
    //   .then((data) => console.log(data));
  };

  handleDelete = (_id, e) => {
    console.log(_id);
    fetch("https://drawingapp-capstone.herokuapp.com/canvas" + _id, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  // handleCanvasStoring = (e) => {
  //   // e.preventDefault()
  //   // console.log('here')
  //   // let ctx = this.canvas.getContext('2d')
  //   // let url = URL.createObjectURL(e.target.CanvasDraw)
  //   // let img = new Image()

  //   // img.src = url
  //   // img.onload = function () {
  //   //   console.log('!!!')
  //   //   let dataImg = this.canvas.toDataURL()
  //   //   console.log(dataImg)
  //   //   ctx.drawImage(img, 0, 0, 600, 600, 0, 0, 200, 200)
  //   }

  // };

  render() {
    return (
      <div>
        <div className="logo">DAYDOODLE</div>

        <div className="canvas">
          <div>
            <label>Brush-Radius:</label>
            <input
              type="number"
              value={this.state.brushRadius}
              onChange={(e) =>
                this.setState({ brushRadius: parseInt(e.target.value, 10) })
              }
            />
          </div>
          <div>
            <label>Lazy-Radius:</label>
            <input
              type="number"
              value={this.state.lazyRadius}
              onChange={(e) =>
                this.setState({ lazyRadius: parseInt(e.target.value, 10) })
              }
            />
          </div>
          <button
            className="clear"
            onClick={() => {
              this.saveableCanvas.clear();
            }}
          >
            Clear
          </button>
          
          <CanvasDraw
            ref={(canvasDraw) => (this.saveableCanvas = canvasDraw)}
            brushColor={this.state.color}
            brushRadius={this.state.brushRadius}
            lazyRadius={this.state.lazyRadius}
          />

          {/* <CanvasDraw
            id="myCanvas"
            disabled
            hideGrid
            ref={(canvasDraw) => (this.loadableCanvas = canvasDraw)}
            saveData={localStorage.getItem("savedDrawing")}
          /> */}
       <button
            onClick={() => {
              localStorage.setItem(
                "savedDrawing",
                this.saveableCanvas.getSaveData()
              );
            }}
          >
            Save
          </button>
          <form>
            <label>
              caption:
              <input
                onChange={(e) => this.setState({ caption: e.target.value })}
                type="text"
                name="caption"
                value={this.state.caption}
              />
            </label>
            
            <button
              onClick={(e) => this.canvasString(e)}
              type="submit"
              className="post"
            >
              post
            </button>
          </form>
          <div>
            {this.state.drawings.map((drawing, i) => (
              <div key={i}>
                <h1>caption: </h1> {drawing.caption}
                <div>
                  {/* <CanvasDraw
                    disabled
                    hideGrid
                    ref={(canvasDraw) => (this.loadableCanvas = canvasDraw)}
                    saveData={localStorage.getItem("savedDrawing")}
                  /> */}
                  <img className='imageDiv' src= {drawing.drawing} />
                </div>
              </div>
            ))}
            {/* <button
              className="delete"
              label="Delete"
              onClick={(e) => this.handleDelete(canvasDraw._id, e)}
            /> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Canvas;

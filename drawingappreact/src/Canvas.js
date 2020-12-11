import React, { Component } from "react";
import "./Canvas.css";
import ReactDOM from "react-dom";
import CanvasDraw from "react-canvas-draw";

class Canvas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "#ffc600",
      width: 600,
      height: 600,
      brushRadius: 10,
      lazyRadius: 12,
    };
  }
  handleCanvasStoring = () => {
    const dataURL = CanvasDraw.toDataURL();
    console.log(dataURL);
  };
  componentDidMount() {
    // change the color randomly every 2 seconds
    window.setInterval(() => {
      this.setState({
        color: "#" + Math.floor(Math.random() * 16777215).toString(16),
      });
    }, 2000);
  }

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

          <CanvasDraw
            disabled
            hideGrid
            ref={(canvasDraw) => (this.loadableCanvas = canvasDraw)}
            saveData={localStorage.getItem("savedDrawing")}
          />
          <form onSubmit={this.handleCanvasStoring}>
            <label>
              add caption:
              <input type="text" name="caption" />
            </label>
            <button
              className="post"
              onClick={() => {
                localStorage.setItem(
                  "savedDrawing",
                  this.saveableCanvas.getSaveData()
                );
              }}
            >
              post
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Canvas;

import React, { Component } from "react";
import "./Homepage.css";

class Homepage extends Component {
  constructor(props) {
    super();
  }

  render() {
    console.log(this.props.data);
    return (
      <div className="login">
          {/* <div className='homepageall'>
        <div className='daydoodle'>DAYDOODLE</div>
        <div className='homepageloginsignup'>
        <div className='login'>login</div>
        <div className='signup'>signup</div>
        </div>
        </div> */}
      </div>
    );
  }
}

export default Homepage;

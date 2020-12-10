import React, { Component } from "react";
import "./Register.css";
import {Link} from 'react-router-dom'
class Register extends Component {
  constructor(props) {
    super();
  }

  render() {
    console.log(this.props.data);
    return (
      <div className="register">
<div className='registerforms'>
<form>
  <label>
    create username:
    <input type="text" name="name" />
  </label>
  {/* <input type="submit" value="Submit" /> */}
</form>
<form>
  <label>
    create password:
    <input type="text" name="name" />
  </label>
  {/* <input type="submit" value="Submit" /> */}
  <div className='submit'><Link to = '/feed'>submit</Link></div>
</form>
</div>
      </div>
    );
  }
}

export default Register;
import React, { Component } from "react";
import "./Login.css";
import {Link} from 'react-router-dom'
class Login extends Component {
  constructor(props) {
    super();
  }

  render() {
    console.log(this.props.data);
    return (
      <div className="login">
          <div className='loginforms'>
      <form>
  <label>
    username:
    <input type="text" name="name" />
  </label>
  {/* <input type="submit" value="Submit" /> */}
</form>
<form>
  <label>
    password:
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

export default Login;
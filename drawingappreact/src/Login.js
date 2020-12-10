import React, { Component } from "react";
import "./Login.css";
import {Link} from 'react-router-dom'
class Login extends Component {
  constructor(props) {
    super();
  }
  handleSubmit = (req, res) => {
    
    
    console.log('user is logged in')
    console.log(req.user)
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
</form>
<form>
  <label>
    password:
    <input type="text" name="name" />
  </label>
  <div type='text' onClick={this.handleSubmit} className='submit'><Link to = '/feed'>submit</Link></div>
</form>
</div>
      </div>
    );
  }
}

export default Login;
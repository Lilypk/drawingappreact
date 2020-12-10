import React, { Component } from "react";
import "./Register.css";
import {Link} from 'react-router-dom'
class Register extends Component {
  constructor(props) {
    super();
  }

handleAuthTrue = () => {

}
handleAuthFalse = () => {
   
}

handleSubmit = (req, res) => {
    
    
    console.log('user is logged in')
    console.log(req.user)
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
</form>
<form>
  <label>
    create password:
    <input type="text" name="name" />
  </label>
    <div type='text' onClick={this.handleSubmit} className='submit'><Link to = '/feed'>submit</Link></div>
</form>
</div>
      </div>
    );
  }
}

export default Register;
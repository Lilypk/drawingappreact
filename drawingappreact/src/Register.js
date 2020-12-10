import React, { Component } from "react";
import "./Register.css";

class Register extends Component {
  constructor(props) {
    super();
  }

  render() {
    console.log(this.props.data);
    return (
      <div className="register">
{/* <div className='registerforms'>
<form>
  <label>
    create username:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
</form>
<form>
  <label>
    create password:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
</form>
</div> */}
      </div>
    );
  }
}

export default Register;
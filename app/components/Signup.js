import React, { Component } from "react";
import ReactDOM from "react-dom";

class Signup extends Component {

render(){
    return(
    <div>
     <h2>Sign Up Form</h2>
        <form class="signup">
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="email-input" placeholder="Email" />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="password-input" placeholder="Password" />
          </div>
          <button type="submit" class="btn btn-default">Sign Up</button>
        </form>
     </div>
    )
}

};

export default Signup;
import React, { Component } from "react";
import ReactDOM from "react-dom";

class Member extends Component {

    render(){
        return(
              <div class="container">
                <div class="row">
                <div class="col-md-6 col-md-offset-3">
                    <h2>Welcome <span className="member-name"></span> Finish creating Profile</h2>
                </div>
                </div>
            </div>
        )
    }
}

export default Member;

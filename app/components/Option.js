import React, { Component } from "react";
import ReactDOM from "react-dom";

class Option extends Component {
    render(){
        return(
            <div class="row">
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6 br-red">
                    <h2> I am a teacher</h2>
                </div>
                 <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6 br-blue">
                    <h2> I am a Professional</h2>
                </div>        
             </div>
        )
    }
}

export default Option;
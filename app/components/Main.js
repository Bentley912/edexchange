
import React, { Component } from "react";
import ReactDOM from "react-dom";
import Navbar from "./common/Navbar"


class Main extends Component {
render(){
    return(
       <div>
           <Navbar />
        {this.props.children}

       </div>
    );
}

}

export default Main;
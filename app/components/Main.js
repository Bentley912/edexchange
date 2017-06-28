
import React, { Component } from "react";
import ReactDOM from "react-dom";
import Home from "./Home"
import Navbar from "./common/Navbar";

class Main extends Component {
render(){
    return(
       <div>
            <Navbar />
           <Home />
       </div>
    );
}

}

export default Main;
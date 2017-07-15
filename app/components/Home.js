import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router";
class Home extends Component {
 
    render(){
        return(
            <div className ="container">
                

                    <div className="col-lg-12 col-md-12 col-sm-12 banner white">

                        <h1 className="white">Welcome to the Education Exchange</h1>
                        <h1 className="white">Where Professionals Connect with Educators</h1>
                        <button className = "btn btn-large">
                            <Link  to="/signup">Sign up</Link>
                        </button>
                                            </div>
            </div> 
        )
    }


}

export default Home;
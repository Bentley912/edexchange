import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router";
class Home extends Component {
 
    render(){
        return(
            <div className ="container">
                <h1>Home Page Content</h1>

                    <div className="col-lg-12 col-md-12 col-sm-12 br-lblue workpanel">

                        <h1>How it Works</h1>

                        <button>
                            <Link  to="/signup">Sign up</Link>
                        </button>
                                            </div>
            </div> 
        )
    }


}

export default Home;
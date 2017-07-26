import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router";
class Home extends Component {
 
    render(){
        return(
        <div>
            <div className ="container">
                    <div className="col-lg-12 col-md-12 col-sm-12 banner white">

                        <h1 className="white">Welcome to the Education Exchange</h1>
                        <h1 className="white">Where Professionals Connect with Educators</h1>
                        <button className = "btn btn-large">
                            <Link  to="/signup">Sign up</Link>
                        </button>
                    </div>
            </div> 
            <div className="container">
                <div className ="row">
                    <div className = "col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
                        <h2 className="white">How it works</h2>
                        <p className = "white"> Create a Profile and tell us what skills you can provide or what skills you need. <br /> 
                        We will connect you with a classroom who needs someone with your skill set or, if your an educator, we'll connect you with 
                        a person who has the skills you require. Creating better educational opportunities for our local students </p>         
                    </div>                                           
                </div>
                <div className="row">
                    <div className = "col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
                        <h1 className="white"> Who's on Education Exchange</h1>
                        <div id="chart"></div>
                    </div>
                </div>
            </div>
        </div>
        )
    }


}

export default Home;
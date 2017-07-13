import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import API from "../utils/API";
import edModal from "./edModal";

export default class Profile extends React.Component {
   constructor() {
    super();
    this.state = {
      info: []
    };

    this.getProfile = this.getProfile.bind(this);
   }

    componentDidMount() {
        this.getProfile();

    } 

    getProfile() {
        API.getProfile().then((res) => {
        this.setState({ info: res.data });
        console.log(res.data);
        });
    }
    
    render(){
        return(
            <div id ="parent">
                    <h1>Hey, {this.state.info.firstname}</h1>
                    
                    
            
                <div className = "col-md-12 col-lg-12 col-sm-12 col-xs-12">
                    <Button color="secondary" className="right-button">Create a Help Request</Button>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-6">
                        <div className="well profile">
                            <div className="col-sm-12">
                                <div className="col-xs-12 col-sm-8">
                                    <h2>{this.state.info.firstname} {this.state.info.lastname}</h2>
                                    <p><strong>About: </strong> Educator </p>
                                    <p><strong>School: </strong>{this.state.info.school}   </p>
                                    <p><strong>Skills: </strong>
                                        <span className="tags">html5</span> 
                                        <span className="tags">css3</span>
                                        <span className="tags">jquery</span>
                                        <span className="tags">bootstrap3</span>
                                    </p>
                                </div>             
                                <div className="col-xs-12 col-sm-4 text-center">
                                   
                                </div>
                            </div>            
                            <div className="col-xs-12 divider text-center">
                                <div className="col-xs-12 col-sm-4 emphasis">
                                    <h2><strong> 1</strong></h2>                    
                                    <p><small>Help Requests</small></p>
                                    <button className="btn btn-success btn-block"><span className="fa fa-plus-circle"></span> Create Help Requests </button>
                                </div>
                                <div className="col-xs-12 col-sm-4 emphasis">
                                    <h2><strong>245</strong></h2>                    
                                    <p><small>Following</small></p>
                                    <button className="btn btn-info btn-block"><span class="fa fa-user"></span> Edit Profile </button>
                                </div>
                               <div className="col-xs-12 col-sm-4 emphasis">
                                    <h2><strong>245</strong></h2>                    
                                    <p><small>Following</small></p>
                                    <button className="btn btn-info btn-block"><span class="fa fa-user"></span> Search Experts</button>
                                </div>
                        
                            </div>
                        </div>                 
                        </div>
                    </div>
                </div>
                <div className="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-10 col-sm-12 col-xs-12">
                    <div className="well well-lg">
                        <h2> Help Requests</h2>
                    </div>
                </div>
                
            </div>

        )
    }
}


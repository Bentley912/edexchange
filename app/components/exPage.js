import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import API from "../utils/API";
import ExpertPanel from "./common/ExpertPanel.js";


export default class exPage extends React.Component {
   constructor() {
    super();
    this.state = {
      info: []
    };

    this.getExProfile = this.getExProfile.bind(this);
   }

    componentDidMount() {
        this.getExProfile();

    } 

    getExProfile() {
        API.getExProfile().then((res) => {
        this.setState({ info: res.data });
        console.log(res.data);
        });
    }
    
    render(){
        return(
            <div id ="parent">
                    <h1>Hey, {this.state.info.firstname}</h1>
                    
                    
            
                <div className = "col-md-12 col-lg-12 col-sm-12 col-xs-12">
                    <Button color="secondary" className="right-button">Create a Help Post</Button>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-6">
                        <div className="well profile">
                            <div className="col-sm-12">
                                <div className="col-xs-12 col-sm-8">
                                    
                                            <a href="" class="thumbnail">
                                            <img src="/images/feamleUser.png" alt="..." />
                                            </a>
                                     
                                    <h2>{this.state.info.firstname} {this.state.info.lastname}</h2>
                                    <p><strong>About: </strong> Expert </p>
                                    <p><strong>School: </strong>{this.state.info.school}   </p>
                                    <p><strong>Skills: </strong>
                                        <span className="tags">{this.state.info.skill}</span> 
                                      
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
                <ExpertPanel EducatorId = {this.state.info.id}/>
                
            </div>

        )
    }
}


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
                    <h1>Profile Page</h1>
                    <p>First Name: {this.state.info.firstname} </p>
                    <p>Last Name:  {this.state.info.lastname} </p>
                    <p>School: {this.state.info.school} </p>
            
                <div className = "col-md-12 col-lg-12 col-sm-12 col-xs-12">
                    <Button color="secondary" className="right-button">success</Button>
                </div>
                <div>
                <edModal />
                </div>
                
             </div>
        )
    }
}

